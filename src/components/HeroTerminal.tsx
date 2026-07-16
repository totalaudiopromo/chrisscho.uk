"use client";

import React, { useState, useEffect } from "react";

interface HeroTerminalProps {
  lines: string[];
  header: string;
  live: boolean;
}

/** Types out real commit log lines passed down from the server. */
export default function HeroTerminal({ lines, header, live }: HeroTerminalProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const timeout = setTimeout(() => setVisibleCount((count) => count + 1), 280);
    return () => clearTimeout(timeout);
  }, [visibleCount, lines.length]);

  return (
    <div className="bg-[#FAF9F6] border-2 border-neutral-900 p-4 font-mono text-[9px] text-neutral-850 shadow-[4px_4px_0px_rgba(1,38,65,1)] w-full min-h-[170px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3 border-b border-neutral-250 pb-2 text-neutral-500 font-bold uppercase tracking-wider text-[8px]">
          <span>{header}</span>
          <div className="flex items-center gap-1.5">
            {!live && (
              <span className="text-[7px] border border-neutral-400 px-1 text-neutral-500 tracking-widest">
                [ CACHED ]
              </span>
            )}
            <span className="h-1.5 w-1.5 bg-neutral-200 rounded-full"></span>
            <span className="h-1.5 w-1.5 bg-neutral-200 rounded-full"></span>
            <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-500" : "bg-tap-raspberry"} animate-pulse`}></span>
          </div>
        </div>
        <div className="space-y-1">
          {lines.slice(0, visibleCount).map((line, idx) => {
            const [prefix, ...rest] = line.split(": ");
            return (
              <div key={idx} className="leading-relaxed whitespace-pre-wrap break-all">
                <span className="text-tap-raspberry select-none mr-1.5 font-bold">{prefix}:</span>
                {rest.join(": ")}
              </div>
            );
          })}
          {visibleCount < lines.length && (
            <div className="inline-block h-2.5 w-1.5 bg-tap-raspberry animate-pulse ml-0.5" />
          )}
        </div>
      </div>
    </div>
  );
}
