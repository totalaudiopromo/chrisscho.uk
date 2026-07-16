import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "../../lib/jsonld";
import { services } from "../../config/services";

export const metadata: Metadata = {
  title: "Services — AI Agentic Workflow Consulting",
  description:
    "AI agentic workflow consulting, Claude Code setups, music industry automation, and full AI infrastructure builds. Done-with-you, from £500.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Chris Schofield",
    description: "AI agentic workflow consulting and systems engineering, done with you.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...services.map((service) => serviceSchema(service)),
        ]}
      />
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-3">
            [ SERVICES // INDEX ]
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            Consulting Services
          </h1>
          <p className="text-tap-text-secondary text-sm font-sans leading-relaxed">
            Done-with-you AI systems engineering. Every service below is architecture I run in
            production across my own portfolio — this site&apos;s live commit feed and status pings
            included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border-2 border-neutral-900 bg-white p-6 flex flex-col justify-between shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(238,0,90,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-3">
                  {service.kicker}
                </div>
                <h2 className="font-serif text-2xl font-bold text-neutral-950 mb-2 group-hover:text-tap-raspberry transition-colors">
                  {service.name}
                </h2>
                <p className="text-sm text-tap-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] font-bold border-t border-neutral-200 pt-3">
                <span className="text-neutral-600">{service.priceRange}</span>
                <span className="text-tap-raspberry uppercase tracking-widest">Details →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-2 border-neutral-900 bg-tap-navy text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-[4px_4px_0px_rgba(238,0,90,1)]">
          <div>
            <p className="font-serif text-xl font-bold">Not sure which fits?</p>
            <p className="text-sm text-neutral-300">
              A 30-minute discovery call maps your workflow to the right starting point.
            </p>
          </div>
          <a
            href="https://cal.com/chris-schofield/advisory-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 bg-[#FAF9F6] text-tap-navy font-mono text-xs font-bold uppercase border-2 border-neutral-900 hover:bg-white transition-all"
          >
            Book Discovery Call ↗
          </a>
        </div>
      </section>
    </div>
  );
}
