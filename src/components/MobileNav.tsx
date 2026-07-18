"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  // Close on Escape, and lock body scroll while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-8 w-8 items-center justify-center border border-neutral-950 bg-tap-navy text-white shadow-[2px_2px_0px_rgba(238,0,90,1)] transition-all active:translate-x-px active:translate-y-px"
      >
        <span className="relative block h-3 w-4" aria-hidden="true">
          <span
            className={`absolute left-0 block h-0.5 w-4 bg-current transition-all duration-200 ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-current transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-4 bg-current transition-all duration-200 ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-40 bg-tap-navy/20 backdrop-blur-sm"
          />

          {/* Panel */}
          <div
            id="mobile-nav-panel"
            className="fixed inset-x-0 top-16 z-50 border-b-2 border-neutral-900 bg-[#FAF9F6] shadow-lg"
          >
            <nav className="mx-auto flex max-w-5xl flex-col px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-neutral-700">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-neutral-200 py-3 transition-colors hover:text-tap-raspberry"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
