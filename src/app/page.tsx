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
