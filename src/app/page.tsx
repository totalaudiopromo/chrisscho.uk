import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import StatusBanner from '../components/StatusBanner';
import ProjectCard from '../components/ProjectCard';
import WorkflowSection from '../components/WorkflowSection';
import AgenticEngines from '../components/AgenticEngines';
import SolopreneurSuite from '../components/SolopreneurSuite';
import Advisory from '../components/Advisory';
import { portfolioProjects } from '../config/portfolioConfig';
import { portfolioWorkflows } from '../config/workflows';

// Regenerate at most every 5 minutes: uptime pings refresh per interval,
// GitHub activity keeps its own 1-hour data cache (src/lib/github.ts).
export const revalidate = 300;

export default function Home() {
  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased selection:bg-tap-raspberry selection:text-white">

      {/* Hero Section */}
      <Hero />

      {/* Status Banner */}
      <StatusBanner />

      {/* Lead offer — AI Workflow Audit */}
      <section className="py-12 border-b-2 border-neutral-900 bg-tap-navy">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-tap-raspberry text-white px-2 py-0.5 font-bold mb-3">
              [ NEW // AI WORKFLOW AUDIT ]
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
              Find 7+ hours a week hiding in your business — or your money back.
            </h2>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              A fixed-price £750 AI workflow audit for owner-run businesses: a 45-minute call, a
              report of the tools that win your week back, and a guarantee. Music industry a
              speciality.
            </p>
          </div>
          <Link
            href="/audit"
            className="shrink-0 inline-block text-center px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest border-2 border-neutral-900 bg-[#FAF9F6] text-tap-navy hover:bg-white transition-all shadow-[4px_4px_0px_rgba(238,0,90,1)]"
          >
            See the audit →
          </Link>
        </div>
      </section>

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
            Curated SaaS products, list engines, and developer-labs repositories. Cards marked <span className="font-mono text-[10px] uppercase font-bold">[ Live Screenshot ]</span> show the real product; terminal-native tools carry labelled illustrations of their interfaces.
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

    </div>
  );
}
