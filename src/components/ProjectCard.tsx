"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../config/portfolioConfig';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusLabels = {
    active: { label: "Active Campaign Work", color: "bg-[#0e7490]" },
    "soft-live": { label: "Soft-Live Waitlist", color: "bg-[#d97757]" },
    "self-running": { label: "Self-Running Daemon", color: "bg-neutral-600" },
    parked: { label: "Parked / Offline", color: "bg-neutral-400" }
  };

  const status = statusLabels[project.status] || { label: project.status, color: "bg-neutral-500" };

  // Corner tag marking real screenshots vs illustrated terminal mockups
  const renderProvenanceTag = (kind: "screenshot" | "illustration") => (
    <span
      className={`absolute bottom-1.5 right-1.5 z-20 text-[7px] font-mono uppercase tracking-widest px-1.5 py-0.5 border font-bold select-none ${
        kind === "screenshot"
          ? "bg-emerald-50 text-emerald-800 border-emerald-700"
          : "bg-neutral-100 text-neutral-500 border-neutral-400"
      }`}
    >
      {kind === "screenshot" ? "[ LIVE SCREENSHOT ]" : "[ ILLUSTRATION ]"}
    </span>
  );

  // Render browser chrome frame with dynamic CSS scrolling screenshot
  const renderBrowserFrame = (src: string, alt: string, scrollAmount: string, width: number, height: number) => {
    return (
      <div className="w-full aspect-[16/10] flex flex-col bg-neutral-100 border-b-2 border-neutral-900 relative group overflow-hidden select-none">
        {/* Browser Top Chrome bar */}
        <div className="bg-neutral-100 border-b border-neutral-350 py-1.5 px-3 flex items-center justify-between shrink-0 z-10 relative">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 bg-neutral-300 rounded-full border border-neutral-400"></span>
            <span className="h-1.5 w-1.5 bg-neutral-300 rounded-full border border-neutral-400"></span>
            <span className="h-1.5 w-1.5 bg-neutral-300 rounded-full border border-neutral-400"></span>
          </div>
          <div className="bg-white border border-neutral-250 text-[7px] text-neutral-400 font-mono py-0.5 px-4 rounded-sm w-36 text-center truncate">
            {project.liveUrl ? project.liveUrl.replace("https://", "") : "localhost"}
          </div>
          <div className="flex gap-0.5">
            <span className="h-1 w-1.5 bg-neutral-400 rounded-none"></span>
          </div>
        </div>

        {/* Scrolling Viewport Container */}
        <div className="relative flex-grow w-full bg-neutral-50 overflow-hidden">
          {/* Scroll wrapper translates translation on card hover */}
          <div
            className="absolute top-0 left-0 w-full transition-transform duration-[7000ms] ease-in-out transform translate-y-0"
            style={{ transform: `translateY(var(--scroll-y, 0))` }}
          >
            {/* Explicit width/height keeps intrinsic ratio for the translate animation */}
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto block"
            />
          </div>

          {/* Mouse/hover interaction styling via CSS variables */}
          <style jsx>{`
            .group:hover div[style*="translateY"] {
              transform: translateY(${scrollAmount}) !important;
            }
          `}</style>
        </div>
        {renderProvenanceTag("screenshot")}
      </div>
    );
  };

  // Render edge-to-edge header visuals
  const renderCardHeader = () => {
    switch (project.id) {
      case 'total-audio-promo':
        return renderBrowserFrame("/tap-landing-screenshot.webp", "Total Audio Promo landing page", "-70%", 1600, 4000);

      case 'totalaud-io':
        return renderBrowserFrame("/totalaud-landing-screenshot.webp", "totalaud.io onboarding dashboard", "-35%", 1600, 1000);

      case 'spotcheck':
        return renderBrowserFrame("/spotcheck_screenshot.webp", "SpotCheck curator validation dashboard", "-30%", 1280, 800);

      case 'newsjack':
        return renderBrowserFrame("/newsjack_screenshot.webp", "Newsjack newsjacking alert monitor", "-25%", 1280, 800);

      case 'datasink':
        return (
          <div className="w-full aspect-[16/10] bg-[#0b0c10] text-[#0e7490] p-3.5 font-mono text-[8px] flex flex-col justify-between select-none leading-relaxed border-b-2 border-neutral-900 relative">
            {renderProvenanceTag("illustration")}
            {/* Terminal Top bar */}
            <div className="flex justify-between items-center text-white border-b border-neutral-850 pb-1.5 font-bold uppercase tracking-wider text-[7px]">
              <span>bash // datasink-scrub</span>
              <div className="flex gap-1">
                <span className="h-1 w-1 bg-neutral-700 rounded-full"></span>
                <span className="h-1 w-1 bg-neutral-700 rounded-full"></span>
                <span className="h-1 w-1 bg-emerald-500 rounded-full"></span>
              </div>
            </div>

            {/* Official ASCII logo from sink README */}
            <div className="flex justify-between items-center my-1">
              <pre className="text-[#0e7490] font-black leading-none text-[7px] select-none">
{`   ___ (_)__  / /__
  (_-</ / _ \\/  '_/
 /___/_/_//_/_/\\_\\`}
              </pre>
              <div className="text-right text-neutral-500 font-bold text-[6px]">
                <div>v1.2.0 // NPM: datasink</div>
                <div className="text-cyan-400">DNS SECURE: YES</div>
              </div>
            </div>

            {/* Structured run output */}
            <div className="space-y-1 my-0.5 text-neutral-350">
              <div className="text-neutral-550 font-bold text-[7px]">$ sink wash list.csv</div>
              <div className="flex justify-between items-center bg-neutral-900/40 px-1.5 py-0.5 border border-neutral-850">
                <span>[SCRUB] bbc.com ➔ <span className="text-emerald-400 font-bold">bbc.co.uk</span></span>
                <span className="text-emerald-400 font-bold">[TYPO_FIX]</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-900/40 px-1.5 py-0.5 border border-neutral-850">
                <span>{'[RINSE] "Chris S" / "Chris Schofield"'}</span>
                <span className="text-cyan-400 font-bold">[MERGED_0.94]</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-900/40 px-1.5 py-0.5 border border-neutral-850">
                <span>[SOAK] enriched 42 contacts via Anthropic</span>
                <span className="text-[#d97757] font-bold">[ENRICHED]</span>
              </div>
            </div>

            {/* CLI run summary */}
            <div className="text-[7.5px] text-neutral-600 border-t border-neutral-900 pt-1 flex justify-between font-normal">
              <span>MX check: 100% resolve</span>
              <span>scrubbed.csv [SAVED]</span>
            </div>
          </div>
        );

      case 'audx':
        return (
          <div className="w-full aspect-[16/10] bg-[#0b0c10] text-[#45f3ff] p-3 font-mono text-[8px] flex flex-col justify-between select-none leading-[1.1] border-b-2 border-neutral-900 relative">
            {renderProvenanceTag("illustration")}
            {/* Real TUI app.py transport bar styling */}
            <div className="flex justify-between items-center text-white border-b border-neutral-850 pb-1.5 font-bold uppercase tracking-wider text-[7px]">
              <span>▶ audx  last.audx</span>
              <span className="text-[#45f3ff]">▶ 132.0 bpm  4/4  48k  cpu 12%  bar 002:03</span>
            </div>

            {/* MixerTable layout */}
            <div className="space-y-1 my-1">
              <div className="text-neutral-550 font-bold border-b border-neutral-900 pb-0.5 text-[7px] flex justify-between">
                <span>CH · NAME      LVL                            PEAK    GAIN   M    SAMPLE / DSL</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400">
                <span>01 ▮ kick      ████████████░░░░░░░░░░░░  -4.2dB  +0.00        kick 4/4</span>
              </div>
              <div className="flex justify-between items-center text-emerald-500">
                <span>02 ▮ snare     ████████░░░░░░░░░░░░░░░░ -11.0dB  +0.00        snare 2/8</span>
              </div>
              <div className="flex justify-between items-center text-cyan-400">
                <span>03 ▮ hihat     ████████████████░░░░░░░░  -6.5dB  -2.50        hh 16x8 | swing 50%</span>
              </div>
            </div>

            {/* PatternGrid layout */}
            <div className="border-t border-neutral-900 pt-1 space-y-0.5">
              <div className="text-neutral-600 text-[7px] flex gap-2 font-bold mb-0.5">
                <span className="w-7 shrink-0">STEP:</span>
                <span>01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16</span>
              </div>
              <div className="flex gap-2 text-white">
                <span className="text-neutral-500 w-7 shrink-0">kick</span>
                <span className="text-[#45f3ff]">█   ·   ·   ·   █   ·   ·   ·   █   ·   ·   ·   █   ·   ·   ·</span>
              </div>
              <div className="flex gap-2 text-neutral-300">
                <span className="text-neutral-555 w-7 shrink-0">snar</span>
                <span>·   ·   ·   ·   █   ·   ·   ·   ·   ·   ·   ·   █   ·   ·   ·</span>
              </div>
            </div>
          </div>
        );

      case 'sadact-finisher':
        return (
          <div className="w-full aspect-[16/10] bg-[#FAF9F6] p-4 font-mono text-[9px] flex flex-col justify-between border-b-2 border-neutral-900 relative">
            {renderProvenanceTag("illustration")}
            <div className="flex justify-between border-b border-neutral-250 pb-1.5 text-neutral-500 font-bold">
              <span>FINISHER DSP ENGINE</span>
              <span className="text-[#0e7490]">PROFILE: UKG_GOLD</span>
            </div>
            <div className="bg-white p-2 border border-neutral-250 space-y-1.5 my-2">
              <div className="flex justify-between items-center text-[10px] font-sans">
                <span className="font-bold text-neutral-850">Spectral Match:</span>
                <span className="font-bold text-emerald-700">97.8% (Gold Align)</span>
              </div>
              <svg className="w-full h-8 border border-neutral-200 bg-neutral-50" viewBox="0 0 100 30">
                <path d="M0,25 Q20,5 40,20 T80,10 T100,15" fill="none" stroke="#ee005a" strokeWidth="1.5" />
                <path d="M0,26 Q20,6 40,19 T80,11 T100,14" fill="none" stroke="#0e7490" strokeWidth="1" strokeDasharray="2,2" />
              </svg>
            </div>
            <div className="flex justify-between text-[8px] text-neutral-500 font-normal">
              <span>LUFS: -14.2 (Target)</span>
              <span>Peak: -1.0 dBFS</span>
            </div>
          </div>
        );

      case 'sadact-uk':
        return (
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 flex items-center justify-center border-b-2 border-neutral-900">
            <Image
              src="/sadact_artwork.webp"
              alt="sadact mild peril EP artwork"
              fill 
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover opacity-85"
            />
            <div className="absolute top-3 right-3 bg-neutral-900/90 text-white text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 border border-neutral-700">
              mild peril ep
            </div>
          </div>
        );

      case 'podflow':
        return (
          <div className="w-full aspect-[16/10] bg-neutral-950 text-neutral-350 p-4 font-mono text-[8px] flex flex-col justify-between shadow-inner leading-normal border-b-2 border-neutral-900 relative">
            {renderProvenanceTag("illustration")}
            <div className="text-neutral-500 font-bold border-b border-neutral-900 pb-1.5 flex justify-between">
              <span>PODFLOW SYSTEM // digest-daemon</span>
              <span className="text-emerald-400 font-black">ACTIVE</span>
            </div>
            
            {/* Real ASCII Art from podflow README */}
            <div className="my-1.5">
              <pre className="text-[#d97757] font-bold leading-none text-[8px] opacity-90 select-none">
{`    ___  ___  ___/ / _/ /__ _    __
   / _ \\/ _ \\/ _  / _/ / _ \\ |/|/ /
  / .__/\\___/\\_,_/_//_/\\___/__,__/
 /_/`}
              </pre>
            </div>

            <div className="space-y-1 text-neutral-400 my-0.5">
              <div className="text-neutral-350 font-bold">$ podflow digest --max-episodes 3</div>
              <div className="text-[7.5px] leading-tight text-neutral-500">
                [22:42:00] SQLITE: Reading Apple Podcasts library...<br />
                [22:42:01] BATCH: Found 3 new episodes to process<br />
                {'[22:42:03] LLM: Summarising "AI Agents in Production" (score: 94)'}<br />
                [22:42:05] OUTPUT: Written 3 new digests to podflow-digest.md
              </div>
            </div>
            
            <div className="text-[7px] text-neutral-600 border-t border-neutral-900 pt-1 text-right">
              github.com/totalaudiopromo/podflow
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full aspect-[16/10] bg-neutral-100 flex items-center justify-center text-neutral-400 font-mono text-xs border-b-2 border-neutral-900">
            Visual not available
          </div>
        );
    }
  };

  return (
    <article className="border-2 border-neutral-900 bg-white transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(1,38,65,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between rounded-none overflow-hidden">
      
      {/* Edge-to-edge image header visual */}
      <div className="overflow-hidden relative">
        {renderCardHeader()}
      </div>

      {/* Card Details Body */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <div className="flex justify-between items-start gap-3">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-950">{project.name}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <span className={`h-2 w-2 rounded-full ${status.color}`}></span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-550 font-medium">{status.label}</span>
              </div>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 bg-neutral-900 text-[#FAF9F6] font-bold">
              {project.type.replace("-", " ")}
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-neutral-550 text-xs italic tracking-wide font-sans">{project.tagline}</p>
            <p className="text-[#57534e] text-sm leading-relaxed font-sans">{project.editorialCopy}</p>
          </div>
        </div>

        {/* Tech Tags and Backlinks Footer */}
        <div className="pt-2 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-[9px] font-mono border border-neutral-250 px-2 py-0.5 text-neutral-600 rounded-none bg-neutral-50">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Internal case-file link */}
          <Link
            href={`/projects/${project.id}`}
            className="font-mono text-[10px] uppercase tracking-widest font-bold text-tap-raspberry hover:underline"
          >
            Read the case file →
          </Link>

          {/* Backlink CTA button */}
          <div>
            {project.liveUrl ? (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener"
                className="inline-block w-full text-center py-2.5 text-xs font-mono border-2 border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-50 transition-all font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              >
                ➔ VISIT LIVE SITE
              </a>
            ) : (
              <a 
                href={project.githubRepos[0]} 
                target="_blank" 
                rel="noopener"
                className="inline-block w-full text-center py-2.5 text-xs font-mono border-2 border-neutral-900 text-neutral-650 bg-neutral-50 hover:bg-neutral-100 transition-all font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              >
                ➔ VIEW SOURCE CODE
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
