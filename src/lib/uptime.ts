import "server-only";
import { unstable_cache } from "next/cache";

export interface SiteStatus {
  host: string;
  up: boolean | "unknown";
  status?: number;
  ms?: number;
}

export interface UptimeReport {
  sites: SiteStatus[];
  checkedAt: string;
}

const HOSTS = [
  "totalaudiopromo.com",
  "totalaud.io",
  "spotcheck.cc",
  "newsjack.cc",
  "sadact.uk",
];

const TIMEOUT_MS = 5000;

async function pingHost(host: string): Promise<SiteStatus> {
  const url = `https://${host}`;
  const started = Date.now();
  try {
    let res = await fetch(url, {
      method: "HEAD",
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    // Some hosts reject HEAD; retry once with GET before reporting down.
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, {
        method: "GET",
        cache: "no-store",
        redirect: "follow",
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
    }
    return {
      host,
      up: res.ok,
      status: res.status,
      ms: Date.now() - started,
    };
  } catch {
    return { host, up: "unknown" };
  }
}

/**
 * Genuine server-side reachability checks for the live properties.
 * Results are cached for 5 minutes; failures render as honest
 * "no response" states rather than fake OKs.
 */
export const getUptimeReport = unstable_cache(
  async (): Promise<UptimeReport> => {
    const results = await Promise.allSettled(HOSTS.map(pingHost));
    return {
      sites: results.map((result, i) =>
        result.status === "fulfilled" ? result.value : { host: HOSTS[i], up: "unknown" as const }
      ),
      checkedAt: new Date().toISOString(),
    };
  },
  ["uptime-report"],
  { revalidate: 300, tags: ["uptime"] }
);
