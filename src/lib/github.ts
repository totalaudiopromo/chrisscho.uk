import "server-only";
import snapshot from "../config/fallback/githubSnapshot.json";

export interface CommitEntry {
  repo: string;
  message: string;
  sha: string;
  date: string;
}

export interface GithubActivity {
  commits: CommitEntry[];
  repoCount: number;
  languages: { name: string; pct: number }[];
  fetchedAt: string;
  /** true when served from the GitHub API, false when from the checked-in snapshot */
  live: boolean;
}

const ORG = "totalaudiopromo";
const REVALIDATE_SECONDS = 3600;
const TOP_REPOS = 6;
const MAX_COMMITS = 12;

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "chrisscho.uk-portfolio",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

async function githubJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: githubHeaders(),
    next: { revalidate: REVALIDATE_SECONDS, tags: ["github"] },
  });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} for ${url}`);
  }
  return res.json() as Promise<T>;
}

interface RepoResponse {
  name: string;
  pushed_at: string;
  fork: boolean;
}

interface CommitResponse {
  sha: string;
  commit: { message: string; committer?: { date?: string }; author?: { date?: string } };
}

/**
 * Real activity across the totalaudiopromo GitHub org: recent commits,
 * repo count, and an aggregated language breakdown. Never throws — falls
 * back to the checked-in snapshot (kept fresh weekly by the build-log
 * GitHub Action) when the API is unreachable or unauthorized.
 */
export async function getOrgActivity(): Promise<GithubActivity> {
  try {
    const repos = await githubJson<RepoResponse[]>(
      `https://api.github.com/orgs/${ORG}/repos?sort=pushed&per_page=20`
    );
    const active = repos.filter((repo) => !repo.fork).slice(0, TOP_REPOS);

    const [commitResults, languageResults] = await Promise.all([
      Promise.allSettled(
        active.map((repo) =>
          githubJson<CommitResponse[]>(
            `https://api.github.com/repos/${ORG}/${repo.name}/commits?per_page=4`
          ).then((commits) =>
            commits.map<CommitEntry>((entry) => ({
              repo: repo.name,
              message: entry.commit.message.split("\n")[0].slice(0, 90),
              sha: entry.sha.slice(0, 7),
              date: entry.commit.committer?.date ?? entry.commit.author?.date ?? "",
            }))
          )
        )
      ),
      Promise.allSettled(
        active.map((repo) =>
          githubJson<Record<string, number>>(
            `https://api.github.com/repos/${ORG}/${repo.name}/languages`
          )
        )
      ),
    ]);

    const commits = commitResults
      .filter((r): r is PromiseFulfilledResult<CommitEntry[]> => r.status === "fulfilled")
      .flatMap((r) => r.value)
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, MAX_COMMITS);

    const byteTotals: Record<string, number> = {};
    for (const result of languageResults) {
      if (result.status !== "fulfilled") continue;
      for (const [lang, bytes] of Object.entries(result.value)) {
        byteTotals[lang] = (byteTotals[lang] ?? 0) + bytes;
      }
    }
    const totalBytes = Object.values(byteTotals).reduce((a, b) => a + b, 0);
    const languages = Object.entries(byteTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([name, bytes]) => ({
        name,
        pct: Math.max(1, Math.round((bytes / totalBytes) * 100)),
      }));

    if (commits.length === 0) {
      throw new Error("GitHub API returned no commits");
    }

    return {
      commits,
      repoCount: repos.length,
      languages,
      fetchedAt: new Date().toISOString(),
      live: true,
    };
  } catch {
    return { ...snapshot, live: false };
  }
}
