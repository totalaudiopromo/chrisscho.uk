"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '../config/portfolioConfig';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // TAP brand color tokens
  const statusLabels = {
    active: { label: "Active Campaign Work", color: "bg-[#0e7490]" }, // Cyan-700
    "soft-live": { label: "Soft-Live Waitlist", color: "bg-[#d97757]" }, // Terracotta
    "self-running": { label: "Self-Running Daemon", color: "bg-neutral-600" },
    parked: { label: "Parked / Offline", color: "bg-neutral-400" }
  };

  const status = statusLabels[project.status] || { label: project.status, color: "bg-neutral-500" };

  // Local states for interactive CSS mockup animations
  const [tapLogs, setTapLogs] = useState<string[]>([]);
  const [totalAudChecking, setTotalAudChecking] = useState(true);

  // Cycle logs for TAP mockup
  useEffect(() => {
    if (project.id !== 'total-audio-promo') return;
    const initialLogs = [
      "SYSTEM: Queue synchronized",
      "API: Fetched 42 active curators",
      "OUTREACH: Sent pitch 'Mild Peril EP' to KEXP",
      "OUTREACH: Sent pitch to BBC Radio 6 Music"
    ];
    setTapLogs(initialLogs);

    const rotation = [
      "WEBHOOK: Reply parsed from Pitchfork (Warmth: 85%)",
      "API: Spotify playlist validation triggered",
      "OUTREACH: Sent pitch to NTS Radio",
      "SYSTEM: Weekly digest compiled for Chris"
    ];

    let cycleIdx = 0;
    const timer = setInterval(() => {
      setTapLogs(prev => {
        const next = [...prev.slice(1), rotation[cycleIdx]];
        cycleIdx = (cycleIdx + 1) % rotation.length;
        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [project.id]);

  // Pulse checker for totalaud.io brief validator mockup
  useEffect(() => {
    if (project.id !== 'totalaud-io') return;
    const interval = setInterval(() => {
      setTotalAudChecking(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.id]);

  // Render browser chrome frame wrapper for SaaS/Web interfaces
  const renderBrowserFrame = (children: React.ReactNode) => {
    return (
      <div className="w-full aspect-[16/10] flex flex-col bg-neutral-100 border-b-2 border-neutral-900 relative group overflow-hidden select-none">
        {/* Browser Top Chrome bar */}
        <div className="bg-neutral-100 border-b border-neutral-350 py-1.5 px-3 flex items-center justify-between shrink-0">
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
        {/* Mockup Canvas */}
        <div className="relative flex-grow w-full bg-neutral-50 overflow-hidden font-sans">
          {children}
        </div>
      </div>
    );
  };

  // Render edge-to-edge header visuals
  const renderCardHeader = () => {
    switch (project.id) {
      case 'total-audio-promo':
        return renderBrowserFrame(
          <div className="w-full h-full flex bg-[#FAF9F6] text-neutral-800 text-[8px]">
            {/* Left Sidebar */}
            <aside className="w-14 bg-tap-navy text-neutral-400 p-2 flex flex-col gap-2 shrink-0 border-r border-neutral-300">
              <div className="text-white font-serif font-black text-[9px] mb-1">TAP</div>
              <div className="space-y-1 font-mono text-[6px] tracking-wider">
                <div className="text-white font-bold bg-[#FAF9F6]/10 px-1 py-0.5">➔ CAMPAIGNS</div>
                <div className="px-1 py-0.5 hover:text-white">· ARTISTS</div>
                <div className="px-1 py-0.5 hover:text-white">· CONTACTS</div>
                <div className="px-1 py-0.5 hover:text-white">· LOGS</div>
              </div>
            </aside>

            {/* Main Area */}
            <main className="flex-grow p-3 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex justify-between items-center border-b border-neutral-200 pb-1 mb-2 font-mono">
                  <span className="font-bold text-neutral-900">Campaign // Mild Peril EP</span>
                  <span className="text-emerald-700 bg-emerald-50 px-1 border border-emerald-300 uppercase tracking-widest font-black text-[6px]">Active</span>
                </div>

                {/* Dashboard Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 mb-2 text-center">
                  <div className="bg-white border border-neutral-300 p-1.5 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                    <div className="font-serif font-bold text-[11px] text-tap-accent">38</div>
                    <div className="text-[6px] text-neutral-450 uppercase tracking-wider">Contacts</div>
                  </div>
                  <div className="bg-white border border-neutral-300 p-1.5 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                    <div className="font-serif font-bold text-[11px] text-tap-raspberry">32</div>
                    <div className="text-[6px] text-neutral-450 uppercase tracking-wider">Pitches</div>
                  </div>
                  <div className="bg-white border border-neutral-300 p-1.5 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                    <div className="font-serif font-bold text-[11px] text-[#0f7490]">21</div>
                    <div className="text-[6px] text-neutral-450 uppercase tracking-wider">Replies</div>
                  </div>
                </div>
              </div>

              {/* Ticker System Logs */}
              <div className="bg-neutral-950 text-neutral-450 p-2 font-mono text-[6.5px] border border-neutral-900 space-y-0.5">
                <div className="text-[6px] text-neutral-600 font-bold uppercase tracking-wider border-b border-neutral-850 pb-0.5 mb-1 flex justify-between">
                  <span>OUTREACH FEED</span>
                  <span className="text-emerald-500">LIVE SYNC</span>
                </div>
                {tapLogs.map((log, i) => (
                  <div key={i} className="truncate transition-opacity duration-300">
                    <span className="text-tap-raspberry">➔</span> {log}
                  </div>
                ))}
              </div>
            </main>
          </div>
        );
      
      case 'totalaud-io':
        return renderBrowserFrame(
          <div className="w-full h-full bg-[#FAF9F6] p-3.5 flex flex-col justify-between overflow-hidden">
            {/* Visual Waitlist Header */}
            <div className="flex justify-between items-start border-b border-neutral-300 pb-2">
              <div>
                <h4 className="font-serif text-sm font-bold text-neutral-900 tracking-tight leading-none mb-1">totalaud.io</h4>
                <p className="text-[7px] text-neutral-500 font-sans">Autonomous label brief ingest & format validator.</p>
              </div>
              <span className="text-[6px] font-mono border-2 border-neutral-900 bg-neutral-950 text-[#FAF9F6] px-1 py-0.5 font-bold uppercase tracking-wider">
                waitlist
              </span>
            </div>

            <div className="grid grid-cols-12 gap-3 my-2 items-center">
              {/* Validation Status Box */}
              <div className="col-span-7 bg-white p-2.5 border border-neutral-300 shadow-[2px_2px_0px_rgba(0,0,0,1)] font-mono text-[6.5px] space-y-1">
                <div className="text-[6px] text-neutral-500 uppercase tracking-wider border-b border-neutral-250 pb-0.5">Brief Handoff Checklist</div>
                <div className="flex justify-between text-emerald-700">
                  <span>✓ WAV Format check (16-bit, 44.1k)</span>
                  <span className="font-black">PASSED</span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>✓ Metadata (Artist, ISRC matching)</span>
                  <span className="font-black">PASSED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>↳ Artwork Aspect (3000x3000px)</span>
                  {totalAudChecking ? (
                    <span className="text-[#d97757] font-black animate-pulse">[CHECKING...]</span>
                  ) : (
                    <span className="text-emerald-700 font-black">PASSED</span>
                  )}
                </div>
              </div>

              {/* Waitlist Call-to-action */}
              <div className="col-span-5 flex flex-col gap-1.5">
                <input 
                  type="text" 
                  disabled 
                  placeholder="label@name.com" 
                  className="bg-white border border-neutral-350 p-1 font-mono text-[7px] text-neutral-400 cursor-not-allowed select-none rounded-none text-center" 
                />
                <button 
                  disabled
                  className="bg-neutral-900 text-white font-mono text-[6.5px] uppercase tracking-wider py-1 font-bold border border-neutral-900 hover:bg-neutral-850 cursor-default"
                >
                  Request Access ➔
                </button>
              </div>
            </div>

            <div className="text-[6px] font-mono text-neutral-400 border-t border-neutral-250 pt-1 text-center">
              Enforcing zero data gaps between record labels and pluggers.
            </div>
          </div>
        );

      case 'spotcheck':
        return renderBrowserFrame(
          <div className="w-full h-full bg-[#0b0c10] text-[#00ffcc] p-4 flex flex-col justify-between overflow-hidden">
            {/* Header console */}
            <div className="flex justify-between border-b border-neutral-850 pb-2 text-[8px] font-mono">
              <span className="text-white font-bold">SPOTCHECK // Playlisting Auditor</span>
              <span className="text-neutral-500 font-black">ENG: CONNECTED</span>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-2 my-2 text-center font-mono">
              <div className="bg-neutral-900 border border-neutral-800 p-2">
                <div className="text-[10px] text-white font-black">14</div>
                <div className="text-[5.5px] text-neutral-500 uppercase tracking-widest mt-0.5">Playlists Sync</div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 p-2">
                <div className="text-[10px] text-[#00ffcc] font-black">98.2%</div>
                <div className="text-[5.5px] text-neutral-500 uppercase tracking-widest mt-0.5">Audience Match</div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 p-2">
                <div className="text-[10px] text-emerald-400 font-black">ACTIVE</div>
                <div className="text-[5.5px] text-neutral-500 uppercase tracking-widest mt-0.5">API Link</div>
              </div>
            </div>

            {/* Curator validator logs */}
            <div className="space-y-1 font-mono text-[7px] text-neutral-350">
              <div className="flex justify-between border-b border-neutral-850 pb-0.5 text-neutral-500">
                <span>Curator Profile</span>
                <span>Audit Result</span>
              </div>
              <div className="flex justify-between">
                <span>· UK Indie Rock Playlist</span>
                <span className="text-emerald-400 font-bold">[✓ VALIDATED]</span>
              </div>
              <div className="flex justify-between">
                <span>· Late Night Beats</span>
                <span className="text-[#00ffcc] font-bold">[✓ MATCH_94%]</span>
              </div>
            </div>
          </div>
        );

      case 'newsjack':
        return renderBrowserFrame(
          <div className="w-full h-full bg-[#FAF9F6] p-3 flex flex-col justify-between overflow-hidden text-[#57534e]">
            {/* Header */}
            <div className="flex justify-between border-b border-neutral-250 pb-2 text-[7px] font-mono">
              <span className="text-neutral-900 font-bold uppercase tracking-wider">Newsjacking Monitor v2.1</span>
              <span className="text-[#d97757] font-bold">12 RSS FEEDS SCANNED</span>
            </div>

            {/* RSS Alert Stream */}
            <div className="space-y-1.5 my-2">
              <div className="bg-white p-2 border border-neutral-300 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] flex justify-between items-center text-[7.5px]">
                <div className="truncate pr-4 max-w-[180px]">
                  <span className="font-bold text-neutral-900">[PITCHFORK]</span> Spotify launches automated campaign filters...
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-300 font-mono text-[6px] px-1 font-black shrink-0">92% RELEVANCE</span>
              </div>
              <div className="bg-white p-2 border border-neutral-300 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] flex justify-between items-center text-[7.5px]">
                <div className="truncate pr-4 max-w-[180px]">
                  <span className="font-bold text-neutral-900">[TWITTER]</span> Independent labels team up to build regional MCP servers...
                </div>
                <span className="bg-[#FAF9F6] text-neutral-600 border border-neutral-350 font-mono text-[6px] px-1 shrink-0">84% RELEVANCE</span>
              </div>
            </div>

            {/* Action panel footer */}
            <div className="text-[6.5px] font-mono text-neutral-400 pt-1 border-t border-neutral-200 flex justify-between">
              <span>Claude budgets configured: active</span>
              <span>Draft folder auto-updated</span>
            </div>
          </div>
        );

      case 'datasink':
        return (
          <div className="w-full aspect-[16/10] bg-[#0b0c10] text-[#0e7490] p-3.5 font-mono text-[8px] flex flex-col justify-between select-none leading-relaxed border-b-2 border-neutral-900">
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
                <span>[RINSE] "Chris S" / "Chris Schofield"</span>
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
          <div className="w-full aspect-[16/10] bg-[#0b0c10] text-[#45f3ff] p-3 font-mono text-[8px] flex flex-col justify-between select-none leading-[1.1] border-b-2 border-neutral-900">
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
          <div className="w-full aspect-[16/10] bg-[#FAF9F6] p-4 font-mono text-[9px] flex flex-col justify-between border-b-2 border-neutral-900">
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
              src="/sadact_artwork.jpg" 
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
          <div className="w-full aspect-[16/10] bg-neutral-950 text-neutral-350 p-4 font-mono text-[8px] flex flex-col justify-between shadow-inner leading-normal border-b-2 border-neutral-900">
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
                [22:42:03] LLM: Summarising "AI Agents in Production" (score: 94)<br />
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
          
          {/* Backlink CTA button */}
          <div>
            {project.liveUrl ? (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="dofollow" 
                className="inline-block w-full text-center py-2.5 text-xs font-mono border-2 border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-50 transition-all font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              >
                ➔ VISIT LIVE SITE
              </a>
            ) : (
              <a 
                href={project.githubRepos[0]} 
                target="_blank" 
                rel="dofollow" 
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
