import React from 'react';
import Image from 'next/image';
import HeroTerminal from './HeroTerminal';
import { getOrgActivity } from '../lib/github';

function formatCommitLine(repo: string, message: string, date: string): string {
  const day = date ? date.slice(5, 10) : "--/--";
  return `${repo}: [${day}] ${message}`;
}

export default async function Hero() {
  const activity = await getOrgActivity();

  const terminalLines = activity.commits
    .slice(0, 8)
    .map((commit) => formatCommitLine(commit.repo, commit.message, commit.date));

  const languageSummary = activity.languages
    .slice(0, 4)
    .map((lang) => `${lang.name} ${lang.pct}%`)
    .join(" · ");

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
              I build high-throughput pipeline architectures, custom API integrations, and <strong className="font-bold text-white">Obsidian-grounded Second Brain databases</strong>. I engineer agentic workflows that automate operations and accelerate delivery across any industry.
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
                src="/chris-schofield-founder.webp"
                alt="Chris Schofield - Founder Photograph"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
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

        {/* Column 3: Live commit feed terminal (4 cols on desktop) */}
        <div className="md:col-span-4 flex flex-col justify-center gap-2">
          <HeroTerminal
            lines={terminalLines}
            header={`git://${activity.live ? "totalaudiopromo — live" : "totalaudiopromo"}`}
            live={activity.live}
          />
          {/* Real language breakdown across recently pushed repos */}
          <div className="font-mono text-[8px] text-white/80 flex flex-wrap items-center gap-x-2 gap-y-1 px-1">
            <span className="font-bold uppercase tracking-widest text-white">Stack:</span>
            <span>{languageSummary}</span>
            <span className="text-white/50">
              · {activity.repoCount} {activity.repoCount === 1 ? "repo" : "repos"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
