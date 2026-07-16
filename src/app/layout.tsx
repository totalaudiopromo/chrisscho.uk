import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  title: "Chris Schofield | AI Agentic Workflow Consulting & Systems Architect",
  description: "Done-with-you AI agentic workflow consulting, custom multi-agent environment design, and automated systems engineering. Freeing up agency and operations hours.",
  keywords: [
    "AI agentic workflow consulting",
    "agentic AI implementation services",
    "AI workflow automation agency",
    "custom AI systems architect",
    "Model Context Protocol developer",
    "Obsidian second brain integration",
    "total audio promo",
    "mcp servers",
    "workflow automation consulting"
  ],
  authors: [{ name: "Chris Schofield", url: "https://chrisscho.uk" }],
  openGraph: {
    title: "Chris Schofield | AI Agentic Workflow Consulting & Systems Architect",
    description: "Done-with-you AI agentic workflow consulting, custom multi-agent environment design, and automated systems engineering.",
    url: "https://chrisscho.uk",
    siteName: "Chris Schofield AI Consulting",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Schofield | AI Agentic Workflow Consulting & Systems Architect",
    description: "Done-with-you AI agentic workflow consulting and systems automation."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Chris Schofield AI Consulting",
    "image": "https://chrisscho.uk/chris-schofield-founder.webp",
    "url": "https://chrisscho.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brighton",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://github.com/totalaudiopromo",
      "https://open.spotify.com/artist/1Pj866WF6r7xZcJxtKsPlU"
    ],
    "description": "Done-with-you AI agentic workflow consulting and custom systems automation. We build custom multi-agent environments, Obsidian second brain integrations, and API pipelines.",
    "provider": {
      "@type": "Person",
      "name": "Chris Schofield",
      "jobTitle": "Systems Architect & AI Consultant"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Workflow Consulting & Integration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Done-With-You Workflow Advisory Blueprint",
            "description": "Auditing manual systems and mapping automated pipelines."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Systems Engineering & Setup Projects",
            "description": "Configuring local or cloud agent frameworks like Claude Code, OpenClaw, and custom Gmail MCP servers."
          }
        }
      ]
    }
  };

  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF9F6] text-neutral-900">
        {children}
      </body>
    </html>
  );
}

