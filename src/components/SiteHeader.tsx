import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/audit", label: "[ Audit ]" },
  { href: "/projects", label: "[ Projects ]" },
  { href: "/services", label: "[ Services ]" },
  { href: "/writing", label: "[ Writing ]" },
  { href: "/log", label: "[ Log ]" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b-2 border-neutral-900 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-serif text-xl font-bold tracking-tight text-neutral-950">
            chrisscho.uk
          </Link>
          <span className="text-[9px] font-mono border border-neutral-400 px-1.5 py-0.5 text-neutral-500 rounded-none select-none hidden sm:inline">
            SYS-ARCH // ISSUE 01
          </span>
        </div>

        <nav className="flex items-center gap-3 sm:gap-4 text-[10px] font-mono tracking-widest uppercase text-neutral-600 font-bold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-tap-raspberry transition-colors hidden sm:inline">
              {link.label}
            </Link>
          ))}
          <a
            href="https://cal.com/chris-schofield/advisory-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-tap-navy text-white hover:bg-neutral-900 transition-all rounded-none border border-neutral-950 shadow-[2px_2px_0px_rgba(238,0,90,1)]"
          >
            Consulting ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
