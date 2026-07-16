import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { breadcrumbSchema, softwareAppSchema } from "../../../lib/jsonld";
import { portfolioProjects } from "../../../config/portfolioConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: project.name,
      description: project.tagline,
      url: `/projects/${project.id}`,
    },
  };
}

const statusLabels: Record<string, string> = {
  active: "Active",
  "soft-live": "Soft-Live Waitlist",
  "self-running": "Self-Running Daemon",
  parked: "Parked",
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased">
      <JsonLd
        data={[
          softwareAppSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.name, path: `/projects/${project.id}` },
          ]),
        ]}
      />

      <article className="py-16 max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-8">
          <Link href="/projects" className="hover:text-tap-raspberry transition-colors">
            [ ← All Projects ]
          </Link>
        </nav>

        {/* Case file header */}
        <header className="mb-10 border-b-2 border-neutral-900 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold">
              [ CASE FILE // {project.type.replace("-", " ")} ]
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest border border-neutral-400 text-neutral-600 px-2 py-0.5 font-bold">
              {statusLabels[project.status] ?? project.status}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            {project.name}
          </h1>
          <p className="font-serif text-lg italic text-neutral-600">{project.tagline}</p>
        </header>

        {/* Body copy */}
        <div className="space-y-6 text-sm leading-relaxed text-[#44403c]">
          <p>{project.description}</p>
          <p>{project.editorialCopy}</p>

          <div className="border-2 border-neutral-900 bg-white p-5 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
              Role in the ecosystem
            </div>
            <p className="text-sm">{project.roleInEcosystem}</p>
          </div>

          {/* Tech stack */}
          <div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono border border-neutral-300 px-2 py-0.5 text-neutral-600 bg-neutral-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Technical accent — labelled illustration */}
          <div className="relative border-2 border-neutral-900 bg-[#0b0c10] text-neutral-300 p-4 font-mono text-[10px] leading-relaxed shadow-[4px_4px_0px_rgba(1,38,65,1)]">
            <span className="absolute top-2 right-2 text-[7px] uppercase tracking-widest border border-neutral-600 text-neutral-500 px-1.5 py-0.5 font-bold select-none">
              [ ILLUSTRATION ]
            </span>
            <div className="text-emerald-400 mb-2">$ {project.technicalAccent.commandLine}</div>
            {project.technicalAccent.sampleLogLines.map((line) => (
              <div key={line} className="text-neutral-400">
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Outbound links — the backlink hub */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 font-mono text-xs font-bold">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener"
              className="flex-1 text-center py-3 border-2 border-neutral-900 bg-tap-navy text-white hover:bg-neutral-900 transition-all shadow-[3px_3px_0px_rgba(238,0,90,1)]"
            >
              ➔ VISIT {project.liveUrl.replace("https://", "").toUpperCase()}
            </a>
          )}
          {project.githubRepos.map((repo) => (
            <a
              key={repo}
              href={repo}
              target="_blank"
              rel="noopener"
              className="flex-1 text-center py-3 border-2 border-neutral-900 bg-white text-neutral-900 hover:bg-neutral-50 transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)]"
            >
              ➔ SOURCE CODE
            </a>
          ))}
        </div>

        {/* Cross-link to services */}
        <div className="mt-12 border-t-2 border-neutral-900 pt-8 text-sm text-neutral-600">
          <p>
            Want a system like this built for your business?{" "}
            <Link href="/services" className="font-bold text-tap-raspberry hover:underline">
              See consulting services →
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
