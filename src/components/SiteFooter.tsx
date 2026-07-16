import React from "react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-tap-navy text-neutral-400 py-16 border-t-2 border-neutral-900 font-mono text-xs">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-[#FAF9F6] font-serif text-xl font-bold mb-2">chrisscho.uk</p>
          <p className="text-[10px] text-neutral-400 max-w-md leading-relaxed font-sans">
            Designed as a professional index of systems, SaaS, and agentic workflows. Built in the UK.
          </p>

          {/* Music profile links in footer */}
          <div className="flex gap-4 mt-6 text-[10px] uppercase font-bold text-tap-raspberry font-mono tracking-widest">
            <a href="https://open.spotify.com/artist/1Pj866WF6r7xZcJxtKsPlU" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Spotify ↗
            </a>
            <span className="text-neutral-600">/</span>
            <a href="https://sadactmusic.bandcamp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Bandcamp ↗
            </a>
            <span className="text-neutral-600">/</span>
            <a href="https://soundcloud.com/sadactmusic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              SoundCloud ↗
            </a>
            <span className="text-neutral-600">/</span>
            <a href="https://www.youtube.com/@sadact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              YouTube ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 font-mono text-[9px] uppercase font-bold tracking-widest md:text-right shrink-0">
          <span className="text-neutral-500 font-semibold">{"// This Site"}</span>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/writing" className="hover:text-white transition-colors">Writing</Link>
          <Link href="/log" className="hover:text-white transition-colors">Build Log</Link>

          <span className="text-neutral-500 font-semibold mt-3">{"// Live Portals"}</span>
          <a href="https://totalaudiopromo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Total Audio Promo ↗
          </a>
          <a href="https://sadact.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            sadact.uk ↗
          </a>
          <a href="https://totalaud.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            totalaud.io ↗
          </a>
          <a href="https://github.com/totalaudiopromo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub Repository ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
