import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import React from "react";

/** Zine-styled element mapping applied to every MDX post. */
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-950 mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="font-serif text-xl font-bold text-neutral-950 mt-8 mb-3" {...props} />
  ),
  p: (props) => <p className="text-sm leading-relaxed text-[#44403c] mb-4" {...props} />,
  ul: (props) => (
    <ul className="list-none space-y-2 mb-4 pl-1 text-sm text-[#44403c]" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal space-y-2 mb-4 pl-5 text-sm text-[#44403c]" {...props} />
  ),
  li: (props) => (
    <li className="flex items-start gap-2">
      <span className="text-tap-accent font-bold font-mono select-none">✓</span>
      <span>{props.children}</span>
    </li>
  ),
  a: ({ href = "", children, ...rest }) =>
    href.startsWith("/") ? (
      <Link href={href} className="font-bold text-tap-raspberry hover:underline">
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="font-bold text-tap-raspberry hover:underline"
        {...rest}
      >
        {children}
      </a>
    ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-tap-raspberry bg-white border-2 border-neutral-900 p-4 my-6 font-serif italic text-neutral-700 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-[#0b0c10] text-neutral-300 border-2 border-neutral-900 p-4 font-mono text-[11px] leading-relaxed overflow-x-auto my-6 shadow-[4px_4px_0px_rgba(1,38,65,1)] [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0"
      {...props}
    />
  ),
  code: (props) => (
    <code className="font-mono text-[0.85em] bg-neutral-100 border border-neutral-300 px-1 py-0.5" {...props} />
  ),
  hr: () => <hr className="border-t-2 border-neutral-900 my-8" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
