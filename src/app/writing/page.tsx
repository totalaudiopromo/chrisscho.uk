import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema } from "../../lib/jsonld";
import { getAllPosts } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Writing — Agentic Workflows in Practice",
  description:
    "Field notes on AI agentic workflows, Claude Code setups, and automation systems — written from production, not theory.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing — Chris Schofield",
    description: "Field notes on agentic workflows and automation systems.",
    url: "/writing",
  },
};

export default async function WritingPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
          ]),
        ]}
      />
      <section className="py-20 max-w-3xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-3">
            [ FIELD NOTES // TABLE OF CONTENTS ]
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            Writing
          </h1>
          <p className="text-tap-text-secondary text-sm leading-relaxed">
            Notes on agentic workflows, Claude Code, and automation — written from systems
            running in production, not from theory.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block border-2 border-neutral-900 bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(238,0,90,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex justify-between items-baseline gap-4 mb-2 font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold">
                <span>No. {String(posts.length - index).padStart(2, "0")}</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-950 group-hover:text-tap-raspberry transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-tap-text-secondary leading-relaxed">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
