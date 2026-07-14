import React from 'react';

export default function StatusBanner() {
  const statuses = [
    { label: "Datasink CLI", value: "v1.2.0 (Stable)", highlight: false },
    { label: "SpotCheck API", value: "200 OK", highlight: false },
    { label: "TAP Engine", value: "Active (Liberty V2)", highlight: true },
    { label: "Finisher Chain", value: "Float64 Pure", highlight: false }
  ];

  return (
    <div className="bg-[#FAF9F6] border-y-2 border-neutral-900 text-neutral-800 py-3 select-none overflow-hidden relative shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
        
        {/* Dynamic status indicators */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
          {statuses.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className="text-neutral-500 font-bold">[{s.label}]:</span>
              <span className={s.highlight ? "text-orange-700 font-black" : "text-neutral-800 font-medium"}>
                {s.value}
              </span>
            </div>
          ))}
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
