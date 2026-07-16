import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../../lib/jsonld";
import { services } from "../../config/services";

// Dedicated Cal.com event (45 min, 6 intake questions) — created 16 Jul 2026.
const BOOKING_URL = "https://cal.com/chris-schofield/ai-workflow-audit";

const audit = services.find((s) => s.slug === "ai-workflow-audit")!;

export const metadata: Metadata = {
  title: "AI Workflow Audit — £750, money-back guarantee",
  description:
    "A fixed-price AI workflow audit for owner-run businesses. Find 7+ hours a week to reclaim, or your money back. £750. Music industry a speciality.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "AI Workflow Audit for Small Businesses",
    description:
      "Find 7+ hours a week hiding in your business — or your money back. £750, fixed price.",
    url: "/audit",
  },
};

const icps = [
  {
    label: "Music businesses",
    note: "Labels, managers, PR agencies, studios, self-releasing artists. My home turf — four years of radio promotion behind the advice.",
  },
  { label: "Agencies & consultancies", note: "Client comms, reporting, proposals, project admin that eats billable hours." },
  { label: "Trades & local services", note: "Enquiries answered too slowly, quoting, scheduling, invoicing, chasing payment." },
  { label: "Professional services", note: "Solicitors, accountants, brokers — document-heavy workflows and overloaded inboxes." },
  { label: "E-commerce & retail", note: "Customer emails, listings, stock admin, and the same data retyped between systems." },
  { label: "Any owner-run team of 2–20", note: "Big enough to have real bottlenecks, small enough that you decide. If your week runs on email and spreadsheets, this works." },
];

const phases = [
  {
    n: "01",
    h: "Discovery call",
    d: "A 45-minute call where I map how work actually moves through your week — and where the hours quietly disappear.",
  },
  {
    n: "02",
    h: "Analysis",
    d: "I work through everything you told me and pick the three-to-seven off-the-shelf tools that will save you the most time, checked for fit against how music businesses really run.",
  },
  {
    n: "03",
    h: "The report",
    d: "A plain, simple report: the tools, what each costs in pounds, how long to set up, the hours saved, and a four-day plan you can run in ten minutes a day.",
  },
  {
    n: "04",
    h: "Review call",
    d: "A 30-minute walkthrough of the report. I show you how each piece works and answer every question, so you can start on Monday.",
  },
];

const walkaway = [
  "Executive summary — the pain, and life after the quick wins",
  "An effort-versus-impact matrix so you know what to do first",
  "Three-to-seven tool prescriptions with real GBP costs and hours saved",
  "A four-day quick-start plan, ten minutes a day",
  "A clear monthly ROI in pounds",
  "The bigger opportunities worth building next — if and when you want them",
];

export default function AuditPage() {
  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased">
      <JsonLd
        data={[
          serviceSchema(audit),
          faqSchema(audit.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Workflow Audit", path: "/audit" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-4">
          [ THE AI WORKFLOW AUDIT ]
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.02] max-w-3xl">
          Find 7+ hours a week hiding in your business — or your money back.
        </h1>
        <p className="mt-6 text-base md:text-lg text-tap-text-secondary leading-relaxed max-w-2xl">
          A fixed-price audit for owner-run businesses. I sit with you for 45 minutes, find where
          the week goes, and hand you the exact off-the-shelf tools to win it back — from someone
          who builds and runs these systems every day, not a consultant reading from a slide deck.
          Music industry a speciality; the framework works anywhere.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest border-2 border-neutral-900 bg-tap-navy text-white hover:bg-neutral-900 transition-all shadow-[4px_4px_0px_rgba(238,0,90,1)]"
          >
            Book your audit ↗
          </a>
          <div className="font-mono text-sm font-bold text-neutral-700">
            £750 fixed
            <span className="text-neutral-400"> · </span>
            <span className="text-tap-raspberry">money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Guarantee banner */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="border-2 border-neutral-900 bg-tap-navy text-white p-6 md:p-8 shadow-[4px_4px_0px_rgba(238,0,90,1)]">
          <div className="font-mono text-[9px] uppercase tracking-widest font-bold text-tap-celadon mb-2">
            The guarantee
          </div>
          <p className="font-serif text-2xl md:text-3xl font-bold leading-snug">
            If I can&apos;t find you at least seven hours a week to reclaim within 30 days, you get
            a full refund.
          </p>
          <p className="mt-3 text-sm text-neutral-300 max-w-2xl">
            Seven hours is what the average audit finds — usually at roughly £45 a month in tool
            costs. The maths is built to work heavily in your favour — which is exactly why I can
            make the promise.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-5">
          Who it&apos;s for
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {icps.map((icp) => (
            <div
              key={icp.label}
              className="border-2 border-neutral-900 bg-white p-5 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
            >
              <div className="font-serif text-lg font-bold text-neutral-950">{icp.label}</div>
              <p className="mt-1 text-sm text-tap-text-secondary leading-relaxed">{icp.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The 4-phase process */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="font-serif text-3xl font-bold text-neutral-950 mb-8">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {phases.map((p) => (
            <div
              key={p.n}
              className="border-2 border-neutral-900 bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-serif text-3xl text-tap-raspberry">{p.n}</span>
                <span className="font-serif text-xl font-bold text-neutral-950">{p.h}</span>
              </div>
              <p className="text-sm text-tap-text-secondary leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you walk away with */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="border-2 border-neutral-900 bg-white p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-5">
            What you walk away with
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {walkaway.map((item) => (
              <li key={item} className="text-sm flex items-start gap-2">
                <span className="text-tap-accent font-bold font-mono">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Price + ladder */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="font-serif text-3xl font-bold text-neutral-950 mb-2">Price</h2>
        <p className="text-sm text-tap-text-secondary mb-6 max-w-2xl">
          The audit is £750, fixed. If you decide you&apos;d rather have the deeper automations built
          for you rather than installing the quick wins yourself, your £750 comes off the price of
          the build.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border-2 border-neutral-900 bg-white p-6 shadow-[4px_4px_0px_rgba(238,0,90,1)]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
              Start here
            </div>
            <div className="font-serif text-2xl font-bold text-neutral-950">AI Workflow Audit</div>
            <div className="font-mono text-sm font-bold text-tap-raspberry mt-1">£750 fixed</div>
            <p className="mt-3 text-sm text-tap-text-secondary leading-relaxed">
              The call, the report, the review call, and the guarantee.
            </p>
          </div>
          <div className="border-2 border-neutral-900 bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
              If you want it built
            </div>
            <div className="font-serif text-2xl font-bold text-neutral-950">Implementation</div>
            <div className="font-mono text-sm font-bold text-neutral-700 mt-1">
              From £2,000 · £750 credited
            </div>
            <p className="mt-3 text-sm text-tap-text-secondary leading-relaxed">
              Done-for-you builds — speed-to-lead agents, workflow automation, data pipelines,
              knowledge systems.
            </p>
          </div>
          <div className="border-2 border-neutral-900 bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
              Ongoing
            </div>
            <div className="font-serif text-2xl font-bold text-neutral-950">AI Concierge</div>
            <div className="font-mono text-sm font-bold text-neutral-700 mt-1">
              £900–£1,500/mo
            </div>
            <p className="mt-3 text-sm text-tap-text-secondary leading-relaxed">
              Two calls a month plus async help, building as your business grows. Six clients only.
            </p>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="border-2 border-neutral-900 bg-[#FAF9F6] p-6 shadow-[3px_3px_0px_rgba(1,38,65,1)]">
          <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
            Why me
          </div>
          <p className="text-sm text-tap-text-secondary leading-relaxed max-w-3xl">
            I&apos;m not a consultant who read about AI. I&apos;ve shipped nine production systems —
            a campaign platform, a playlist validator, contact-hygiene tooling, automation daemons —
            and I run my own company on the same agent infrastructure I&apos;d recommend to you. Four
            years in music promotion means labels, studios, and agencies get advice from someone
            who has done their actual job.{" "}
            <Link href="/projects" className="font-bold text-tap-raspberry hover:underline">
              See the shipped systems →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="font-serif text-3xl font-bold text-neutral-950 mb-6">Questions, answered</h2>
        <div className="space-y-6 max-w-3xl">
          {audit.faqs.map((faq) => (
            <div key={faq.question} className="border-l-4 border-tap-raspberry pl-4">
              <h3 className="font-bold text-sm mb-1">{faq.question}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="border-2 border-neutral-900 bg-tap-navy text-white p-8 text-center shadow-[4px_4px_0px_rgba(238,0,90,1)]">
          <p className="font-serif text-2xl md:text-3xl font-bold mb-2">
            Book your audit
          </p>
          <p className="text-sm text-neutral-300 mb-6 max-w-xl mx-auto">
            Forty-five minutes, a report you can act on the same week, and a guarantee that takes the
            risk off the table.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest border-2 border-neutral-900 bg-[#FAF9F6] text-tap-navy hover:bg-white transition-all"
          >
            Book your audit ↗
          </a>
        </div>
      </section>
    </div>
  );
}
