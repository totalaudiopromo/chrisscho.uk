import React from 'react';
import { getUptimeReport, SiteStatus } from '../lib/uptime';

function statusText(site: SiteStatus): { value: string; tone: "ok" | "warn" } {
  if (site.up === true) {
    return { value: `${site.status} · ${site.ms}ms`, tone: "ok" };
  }
  if (site.up === false) {
    return { value: `${site.status ?? "ERR"}`, tone: "warn" };
  }
  return { value: "NO RESPONSE", tone: "warn" };
}

function checkedAgo(iso: string): string {
  const minutes = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  return `${Math.round(minutes / 60)}h ago`;
}

export default async function StatusBanner() {
  const report = await getUptimeReport();

  return (
    <div className="bg-[#FAF9F6] border-y-2 border-neutral-900 text-neutral-800 py-3 select-none overflow-hidden relative shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">

        {/* Genuine server-side reachability checks against the live properties */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center sm:justify-start items-center">
          {report.sites.map((site) => {
            const { value, tone } = statusText(site);
            return (
              <div key={site.host} className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    tone === "ok" ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                ></span>
                <span className="text-neutral-500 font-bold text-[10px]">[{site.host}]:</span>
                <span
                  className={`text-[10px] ${
                    tone === "ok" ? "text-neutral-800 font-medium" : "text-amber-700 font-bold"
                  }`}
                >
                  {value}
                </span>
              </div>
            );
          })}
          <span className="text-[9px] text-neutral-400">checked {checkedAgo(report.checkedAt)}</span>
        </div>

        {/* Consulting availability indicator */}
        <div className="flex items-center gap-2 shrink-0 border border-neutral-300 bg-white px-2 py-0.5 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-neutral-800 font-bold uppercase tracking-wider">
            Available for Select Work
          </span>
        </div>

      </div>
    </div>
  );
}
