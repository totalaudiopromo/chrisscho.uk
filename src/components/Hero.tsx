"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const logScript = [
    "ssh guest@chrisscho.uk...",
    "session: established (auth: ssh-key)",
    "vault grounding: connected (obsidian git-sync)",
    "active: totalaudiopromo.com (marketing OS)",
    "active: sadact.uk (digital catalog)",
    "daemons status check:",
    "  [+] tap_pitcher-v2: active",
    "  [+] obsidian_brain: synchronized",
    "systems state: stable. standing by."
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < logScript.length) {
        setTerminalLines((prev) => [...prev, logScript[currentIdx]]);
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 md:py-24 bg-tap-raspberry border-b-2 border-neutral-900">
      {/* Editorial Zine Header & Grid */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Column 1: Zine Editorial Header (5 cols on desktop) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-tap-navy text-white px-2 py-0.5 font-bold mb-4">
              [ PROFILE // VOL. 01 ]
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-4">
              Chris Schofield
            </h1>
            <p className="font-serif text-lg md:text-xl font-bold text-tap-celadon leading-normal italic mb-4">
              Systems Architect & Second Brain Engineer
            </p>
            
            <p className="font-sans text-sm text-[#F5F2EB] leading-relaxed max-w-sm">
              I build high-throughput pipeline architectures, custom API integrations, and **Obsidian-grounded Second Brain databases**. I engineer agentic workflows that automate operations and accelerate delivery across any industry.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 font-mono text-[10px] uppercase font-bold">
            <a 
              href="https://totalaudiopromo.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2.5 bg-tap-navy text-white hover:bg-opacity-95 transition-all border-2 border-tap-navy shadow-[3px_3px_0px_rgba(255,255,255,1)] rounded-none"
            >
              TAP Flagship ↗
            </a>
            <a 
              href="https://cal.com/chris-schofield/advisory-discovery-call" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2.5 bg-[#FAF9F6] text-tap-navy hover:bg-white transition-all border-2 border-neutral-900 shadow-[3px_3px_0px_rgba(1,38,65,1)] rounded-none"
            >
              Consulting Call ↗
            </a>
          </div>
        </div>

        {/* Column 2: Actual Photograph Collage (3 cols on desktop) */}
        <div className="md:col-span-3 flex flex-col justify-center items-center">
          <div className="relative border-2 border-neutral-900 p-2 bg-white shadow-[4px_4px_0px_rgba(1,38,65,1)] hover:shadow-[6px_6px_0px_rgba(1,38,65,1)] transition-all duration-300 w-full max-w-[210px] aspect-[3/4] md:max-w-none">
            {/* Real photo clipping visual */}
            <div className="relative w-full h-full overflow-hidden border border-neutral-300 bg-neutral-100">
              <Image 
                src="/chris-schofield-founder.jpg" 
                alt="Chris Schofield - Founder Photograph" 
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                priority
                className="object-cover object-center grayscale contrast-[1.05] brightness-95"
              />
            </div>
            {/* Stylized zine tag */}
            <div className="absolute -bottom-3 left-4 right-4 bg-tap-navy text-white border border-neutral-950 py-0.5 px-2 text-center text-[8px] font-mono uppercase tracking-widest font-bold shadow-[2px_2px_0px_rgba(238,0,90,1)]">
              FOUNDER // BUILDER
            </div>
          </div>
        </div>

        {/* Column 3: Console Terminal (4 cols on desktop) - fixed height prevents layout shifts */}
        <div className="md:col-span-4 flex flex-col justify-center">
          <div className="bg-[#FAF9F6] border-2 border-neutral-900 p-4 font-mono text-[9px] text-neutral-850 shadow-[4px_4px_0px_rgba(1,38,65,1)] w-full min-h-[170px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3 border-b border-neutral-250 pb-2 text-neutral-500 font-bold uppercase tracking-wider text-[8px]">
                <span>syslog://session-init</span>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 bg-neutral-200 rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-neutral-200 rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-tap-raspberry rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="space-y-1">
                {terminalLines.map((line, idx) => {
                  if (!line) return null;
                  return (
                    <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                      <span className="text-neutral-400 select-none mr-1.5 font-bold">log:</span>
                      {line.startsWith("  [+]") ? (
                        <span>
                          &nbsp;&nbsp;[<span className="text-tap-raspberry font-bold">+</span>]
                          {line.substring(5)}
                        </span>
                      ) : line.includes(" established") ? (
                        <span>
                          {line.split(" established")[0]}
                          <span className="text-tap-raspberry font-bold"> established</span>
                          {line.split(" established")[1]}
                        </span>
                      ) : (
                        line
                      )}
                    </div>
                  );
                })}
                {terminalLines.length < logScript.length && (
                  <div className="inline-block h-2.5 w-1.5 bg-tap-raspberry animate-pulse ml-0.5" />
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
