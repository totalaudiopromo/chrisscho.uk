/**
 * Build-log agent: fetches the last 7 days of commits across the
 * totalaudiopromo GitHub org, asks Claude to write a short factual
 * changelog entry (strictly grounded in the commits provided), and
 * writes it to src/content/log/<year>-W<week>.json.
 *
 * Also refreshes src/config/fallback/githubSnapshot.json so the site's
 * hero terminal fallback stays fresh.
 *
 * Runs weekly via .github/workflows/build-log.yml. The resulting commit
 * triggers a Vercel deploy, so the /log page updates itself.
 *
 * Env:
 *   GH_ORG_READ_TOKEN  - fine-grained PAT with org repo read access
 *   ANTHROPIC_API_KEY  - Claude API key (Haiku-class model, pennies/run)
 */
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const ORG = "totalaudiopromo";
const GH_TOKEN = process.env.GH_ORG_READ_TOKEN || process.env.GITHUB_TOKEN;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-haiku-4-5-20251001";
const ROOT = new URL("..", import.meta.url).pathname;

if (!GH_TOKEN) fail("GH_ORG_READ_TOKEN (or GITHUB_TOKEN) is required");
if (!ANTHROPIC_API_KEY) fail("ANTHROPIC_API_KEY is required");

function fail(message) {
  console.error(`build-log-agent: ${message}`);
  process.exit(1);
}

function isoWeek(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return { year: d.getUTCFullYear(), week };
}

async function github(url) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${GH_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "chrisscho.uk-build-log-agent",
    },
  });
  if (!res.ok) throw new Error(`GitHub ${res.status}: ${url}`);
  return res.json();
}

// --- 1. Collect the week's commits across the org ---

const since = new Date(Date.now() - 7 * 86400000);
const repos = await github(`https://api.github.com/orgs/${ORG}/repos?sort=pushed&per_page=50`);
const activeRepos = repos.filter((r) => !r.fork && new Date(r.pushed_at) >= since);

const commitsByRepo = {};
let totalCommits = 0;
for (const repo of activeRepos) {
  const commits = await github(
    `https://api.github.com/repos/${ORG}/${repo.name}/commits?since=${since.toISOString()}&per_page=50`
  );
  if (commits.length > 0) {
    commitsByRepo[repo.name] = commits.map((c) => ({
      sha: c.sha.slice(0, 7),
      message: c.commit.message.split("\n")[0].slice(0, 120),
      date: c.commit.committer?.date ?? c.commit.author?.date ?? "",
    }));
    totalCommits += commits.length;
  }
}

if (totalCommits === 0) {
  console.log("No commits in the last 7 days — skipping log entry.");
  process.exit(0);
}

// --- 2. Refresh the hero-terminal fallback snapshot ---

const allCommits = Object.entries(commitsByRepo)
  .flatMap(([repo, commits]) => commits.map((c) => ({ repo, ...c })))
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 12);

const languageTotals = {};
for (const repo of activeRepos.slice(0, 6)) {
  try {
    const langs = await github(`https://api.github.com/repos/${ORG}/${repo.name}/languages`);
    for (const [lang, bytes] of Object.entries(langs)) {
      languageTotals[lang] = (languageTotals[lang] ?? 0) + bytes;
    }
  } catch {
    // language data is nice-to-have
  }
}
const totalBytes = Object.values(languageTotals).reduce((a, b) => a + b, 0) || 1;
const languages = Object.entries(languageTotals)
  .sort(([, a], [, b]) => b - a)
  .slice(0, 5)
  .map(([name, bytes]) => ({ name, pct: Math.max(1, Math.round((bytes / totalBytes) * 100)) }));

await writeFile(
  path.join(ROOT, "src/config/fallback/githubSnapshot.json"),
  JSON.stringify(
    {
      commits: allCommits.map(({ repo, message, sha, date }) => ({ repo, message, sha, date })),
      repoCount: repos.length,
      languages,
      fetchedAt: new Date().toISOString(),
    },
    null,
    2
  ) + "\n"
);
console.log("Refreshed githubSnapshot.json");

// --- 3. Ask Claude for a strictly grounded weekly summary ---

const commitDigest = Object.entries(commitsByRepo)
  .map(
    ([repo, commits]) =>
      `## ${repo}\n${commits.map((c) => `- ${c.date.slice(0, 10)} ${c.sha} ${c.message}`).join("\n")}`
  )
  .join("\n\n");

const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-api-key": ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
  },
  body: JSON.stringify({
    model: MODEL,
    max_tokens: 1024,
    system: [
      "You write weekly build-log entries for a developer portfolio site.",
      "You will receive a list of git commits grouped by repository. Summarize ONLY what these commits state.",
      "Hard rules:",
      "- Never invent features, progress, or intent not visible in the commit messages.",
      "- Never use marketing language or superlatives. Factual, dry, slightly wry zine voice.",
      "- If the week was mostly maintenance, say exactly that.",
      "- Output valid JSON only, matching: {\"summary\": string (2-3 sentences), \"highlights\": [{\"repo\": string, \"text\": string (one factual sentence)}] (max 5)}",
    ].join("\n"),
    messages: [{ role: "user", content: `Commits from the last 7 days:\n\n${commitDigest}` }],
  }),
});
if (!anthropicRes.ok) fail(`Anthropic API ${anthropicRes.status}: ${await anthropicRes.text()}`);
const anthropicJson = await anthropicRes.json();
const rawText = anthropicJson.content?.[0]?.text ?? "";
const parsed = JSON.parse(rawText.replace(/^```(json)?\n?|\n?```$/g, ""));

// --- 4. Write the log entry ---

const now = new Date();
const { year, week } = isoWeek(now);
const weekId = `${year}-W${String(week).padStart(2, "0")}`;
const entry = {
  week: weekId,
  dateRange: `${since.toISOString().slice(0, 10)} → ${now.toISOString().slice(0, 10)}`,
  summary: parsed.summary,
  highlights: parsed.highlights ?? [],
  commitCount: totalCommits,
  reposTouched: Object.keys(commitsByRepo),
  generatedBy: `${MODEL} via GitHub Actions`,
  generatedAt: now.toISOString(),
};

const logDir = path.join(ROOT, "src/content/log");
await mkdir(logDir, { recursive: true });
await writeFile(path.join(logDir, `${weekId}.json`), JSON.stringify(entry, null, 2) + "\n");
console.log(`Wrote src/content/log/${weekId}.json (${totalCommits} commits, ${Object.keys(commitsByRepo).length} repos)`);
