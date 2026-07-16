import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../../../lib/jsonld";
import { services } from "../../../config/services";
import { portfolioProjects } from "../../../config/portfolioConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = portfolioProjects.filter((project) =>
    service.relatedProjectIds.includes(project.id)
  );

  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased">
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <article className="py-16 max-w-3xl mx-auto px-6">
        <nav className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-8">
          <Link href="/services" className="hover:text-tap-raspberry transition-colors">
            [ ← All Services ]
          </Link>
        </nav>

        <header className="mb-10 border-b-2 border-neutral-900 pb-8">
          <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-4">
            {service.kicker}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            {service.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-neutral-600 font-bold">
            <span>{service.priceRange}</span>
            <span className="text-neutral-400">·</span>
            <span>{service.timeline}</span>
          </div>
        </header>

        <div className="space-y-5 text-sm leading-relaxed text-[#44403c]">
          {service.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        {/* Deliverables */}
        <div className="mt-10 border-2 border-neutral-900 bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-4">
            What you get
          </h2>
          <ul className="space-y-2.5">
            {service.deliverables.map((item) => (
              <li key={item} className="text-sm flex items-start gap-2">
                <span className="text-tap-accent font-bold font-mono">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Music PR cross-link */}
        {service.musicCrossLink && (
          <div className="mt-8 border-2 border-neutral-900 bg-[#FAF9F6] p-5 text-sm shadow-[3px_3px_0px_rgba(1,38,65,1)]">
            <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-neutral-500 block mb-2">
              Running a music PR agency?
            </span>
            The campaign-platform side of this work lives at{" "}
            <a
              href="https://totalaudiopromo.com/advisory"
              target="_blank"
              rel="noopener"
              className="font-bold text-tap-raspberry hover:underline"
            >
              Total Audio Promo advisory
            </a>{" "}
            — the specialist funnel built around the TAP platform.
          </div>
        )}

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-950 mb-6">
            Questions, answered
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="border-l-4 border-tap-raspberry pl-4">
                <h3 className="font-bold text-sm mb-1">{faq.question}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related shipped systems — proof of work */}
        {relatedProjects.length > 0 && (
          <div className="mt-12 border-t-2 border-neutral-900 pt-8">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-4">
              Shipped systems behind this service
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="font-mono text-xs font-bold border-2 border-neutral-900 bg-white px-3 py-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(238,0,90,1)] transition-all"
                >
                  {project.name} →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://cal.com/chris-schofield/advisory-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-4 font-mono text-sm font-bold uppercase tracking-widest border-2 border-neutral-900 bg-tap-navy text-white hover:bg-neutral-900 transition-all shadow-[4px_4px_0px_rgba(238,0,90,1)]"
          >
            Book a Discovery Call ↗
          </a>
        </div>
      </article>
    </div>
  );
}
