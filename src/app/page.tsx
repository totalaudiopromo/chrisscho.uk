import React from 'react';
import Hero from '../components/Hero';
import StatusBanner from '../components/StatusBanner';
import ProjectCard from '../components/ProjectCard';
import WorkflowSection from '../components/WorkflowSection';
import AgenticEngines from '../components/AgenticEngines';
import SolopreneurSuite from '../components/SolopreneurSuite';
import Advisory from '../components/Advisory';
import { portfolioProjects } from '../config/portfolioConfig';
import { portfolioWorkflows } from '../config/workflows';

export default function Home() {
  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased selection:bg-tap-raspberry selection:text-white">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b-2 border-neutral-900 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight text-neutral-950">
              chrisscho.uk
            </span>
            <span className="text-[9px] font-mono border border-neutral-400 px-1.5 py-0.5 text-neutral-500 rounded-none select-none hidden sm:inline">
              SYS-ARCH // ISSUE 01
            </span>
          </div>
          
          {/* Main sections */}
          <nav className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-neutral-600 font-bold">
            <a href="#systems" className="hover:text-tap-raspberry transition-colors">[ Systems ]</a>
            <a href="#workflows" className="hover:text-tap-raspberry transition-colors">[ Workflows ]</a>
            <a href="#agentic" className="hover:text-tap-raspberry transition-colors">[ Agentic ]</a>
            <a href="#suite" className="hover:text-tap-raspberry transition-colors">[ Suite ]</a>
            <a href="#advisory" className="hover:text-tap-raspberry transition-colors">[ Advisory ]</a>
            <a 
              href="https://cal.com/chris-schofield/advisory-discovery-call" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-tap-navy text-white hover:bg-neutral-900 transition-all rounded-none border border-neutral-950 shadow-[2px_2px_0px_rgba(238,0,90,1)]"
            >
              Consulting ↗
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Status Banner */}
      <StatusBanner />

      {/* Projects / Systems Section */}
      <section id="systems" className="py-20 max-w-5xl mx-auto px-6 border-b-2 border-neutral-900">
        <div className="mb-16 max-w-xl">
          <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-3">
            [ RUNNING SYSTEMS // VOL. 01 ]
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-neutral-950 mb-2">
            Production Software & Tooling
          </h2>
          <p className="text-tap-text-secondary text-sm font-sans leading-relaxed">
            Curated SaaS products, list engines, and developer-labs repositories. Toggle the **"Real Visuals"** tab on any card to view actual workspace screenshots and layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Workflows / Timelines Section */}
      <section id="workflows" className="py-20 border-b-2 border-neutral-900 bg-[#FAF9F6]/40">
        <WorkflowSection workflows={portfolioWorkflows} />
      </section>

      {/* Agentic Infrastructure Section */}
      <section id="agentic" className="py-20 border-b-2 border-neutral-900 bg-[#FAF9F6]/20">
        <AgenticEngines />
      </section>

      {/* Solopreneur Automation Suite Section */}
      <section id="suite" className="py-20 border-b-2 border-neutral-900 bg-[#FAF9F6]/30">
        <SolopreneurSuite />
      </section>

      {/* Advisory / Tiers Section */}
      <section id="advisory" className="py-20 bg-white">
        <Advisory />
      </section>

      {/* Footer */}
      <footer className="bg-tap-navy text-neutral-400 py-16 border-t-2 border-neutral-900 font-mono text-xs">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-[#FAF9F6] font-serif text-xl font-bold mb-2">chrisscho.uk</p>
            <p className="text-[10px] text-neutral-400 max-w-md leading-relaxed font-sans">
              Designed as a professional index of systems, SaaS, and agentic workflows. Built in the UK. Registered GDPR compliant.
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
            <span className="text-neutral-500 font-semibold">// Live Portals</span>
            <a href="https://totalaudiopromo.com" target="_blank" rel="noopener noreferrer" className="text-neutral-350 hover:text-white transition-colors">
              Total Audio Promo ↗
            </a>
            <a href="https://sadact.uk" target="_blank" rel="noopener noreferrer" className="text-neutral-350 hover:text-white transition-colors">
              sadact.uk ↗
            </a>
            <a href="https://totalaud.io" target="_blank" rel="noopener noreferrer" className="text-neutral-350 hover:text-white transition-colors">
              totalaud.io ↗
            </a>
            <a href="https://github.com/totalaudiopromo" target="_blank" rel="noopener noreferrer" className="text-neutral-350 hover:text-white transition-colors">
              GitHub Repository ↗
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
