import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "../../../lib/jsonld";
import { getPostSlugs } from "../../../lib/posts";
import type { PostMeta } from "../../../lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function loadPost(slug: string) {
  try {
    const mod = await import(`../../../content/writing/${slug}.mdx`);
    return {
      Content: mod.default as React.ComponentType,
      meta: mod.meta as PostMeta,
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `/writing/${slug}`,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const { Content, meta } = post;

  return (
    <div className="bg-tap-bg text-tap-text min-h-screen font-sans antialiased">
      <JsonLd
        data={[
          blogPostingSchema({ ...meta, slug }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
            { name: meta.title, path: `/writing/${slug}` },
          ]),
        ]}
      />

      <article className="py-16 max-w-3xl mx-auto px-6">
        <nav className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-8">
          <Link href="/writing" className="hover:text-tap-raspberry transition-colors">
            [ ← All Writing ]
          </Link>
        </nav>

        <header className="mb-10 border-b-2 border-neutral-900 pb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-[9px] uppercase tracking-widest font-bold">
            <span className="bg-neutral-900 text-white px-2 py-0.5">[ FIELD NOTE ]</span>
            <time dateTime={meta.date} className="text-neutral-500">
              {meta.date}
            </time>
            {meta.tags?.map((tag) => (
              <span key={tag} className="border border-neutral-400 text-neutral-600 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            {meta.title}
          </h1>
        </header>

        <Content />

        <div className="mt-12 border-t-2 border-neutral-900 pt-8 text-sm text-neutral-600">
          <p>
            Want systems like this in your business?{" "}
            <Link href="/services" className="font-bold text-tap-raspberry hover:underline">
              See consulting services →
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
