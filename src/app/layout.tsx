import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { personSchema, professionalServiceSchema, SITE_URL } from "../lib/jsonld";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chris Schofield | AI Agentic Workflow Consulting & Systems Architect",
    template: "%s | Chris Schofield",
  },
  description:
    "Done-with-you AI agentic workflow consulting, custom multi-agent environment design, and automated systems engineering. Freeing up agency and operations hours.",
  keywords: [
    "AI agentic workflow consulting",
    "agentic AI implementation services",
    "AI workflow automation agency",
    "custom AI systems architect",
    "Model Context Protocol developer",
    "Claude Code setup consultant",
    "Obsidian second brain integration",
    "total audio promo",
    "mcp servers",
    "workflow automation consulting",
  ],
  authors: [{ name: "Chris Schofield", url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "BSBQ_J36NT1DqngpO9bPo0Pbszli-I4RWQIYrP5qlLU",
  },
  openGraph: {
    title: "Chris Schofield | AI Agentic Workflow Consulting & Systems Architect",
    description:
      "Done-with-you AI agentic workflow consulting, custom multi-agent environment design, and automated systems engineering.",
    url: SITE_URL,
    siteName: "Chris Schofield AI Consulting",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Schofield | AI Agentic Workflow Consulting & Systems Architect",
    description: "Done-with-you AI agentic workflow consulting and systems automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <JsonLd data={[personSchema(), professionalServiceSchema()]} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF9F6] text-neutral-900">
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
