import React from "react";
import type { Metadata } from "next";
import ProjectCard from "../../components/ProjectCard";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema } from "../../lib/jsonld";
import { portfolioProjects } from "../../config/portfolioConfig";

export const metadata: Metadata = {
  title: "Projects — Shipped SaaS, Tools & Systems",
  description:
    "Nine shipped systems: Total Audio Promo, totalaud.io, SpotCheck, Newsjack, Datasink, audx, podflow and more. Music-tech SaaS and agentic tooling built solo.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Chris Schofield",
    description: "Shipped SaaS products, internal tools, and developer-labs systems.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-3">
            [ INDEX // ALL SYSTEMS ]
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            Projects
          </h1>
          <p className="text-tap-text-secondary text-sm font-sans leading-relaxed">
            Every system in the ecosystem — flagship SaaS, micro-SaaS earners, self-running
            daemons, and developer-labs research. Each case file links to the live product
            and source where public.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
