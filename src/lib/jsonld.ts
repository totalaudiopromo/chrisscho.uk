import type { Project } from "../config/portfolioConfig";

export const SITE_URL = "https://chrisscho.uk";
export const SITE_NAME = "Chris Schofield — AI Agentic Workflow Consultant";
export const PERSON_NAME = "Chris Schofield";

type JsonLdObject = Record<string, unknown>;

export function personSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/chris-schofield-founder.webp`,
    jobTitle: "Systems Architect & AI Agentic Workflow Consultant",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brighton",
      addressCountry: "GB",
    },
    sameAs: [
      "https://github.com/totalaudiopromo",
      "https://totalaudiopromo.com",
      "https://open.spotify.com/artist/1Pj866WF6r7xZcJxtKsPlU",
    ],
    knowsAbout: [
      "AI agentic workflows",
      "Model Context Protocol (MCP)",
      "Claude Code",
      "Workflow automation",
      "Music industry software",
    ],
  };
}

export function professionalServiceSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "Chris Schofield AI Consulting",
    image: `${SITE_URL}/chris-schofield-founder.webp`,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brighton",
      addressCountry: "GB",
    },
    sameAs: ["https://github.com/totalaudiopromo", "https://totalaudiopromo.com"],
    description:
      "Done-with-you AI agentic workflow consulting and custom systems automation: multi-agent environments, Claude Code setups, MCP servers, and API pipelines.",
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: "Worldwide",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function softwareAppSchema(project: Project): JsonLdObject {
  const schema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    author: { "@id": `${SITE_URL}/#person` },
  };
  if (project.liveUrl) schema.url = project.liveUrl;
  if (project.githubRepos.length > 0) schema.sameAs = project.githubRepos;
  return schema;
}

export function serviceSchema(service: {
  title: string;
  slug: string;
  description: string;
  priceRange?: string;
}): JsonLdObject {
  const schema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: "Worldwide",
    serviceType: "AI workflow consulting",
  };
  if (service.priceRange) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "GBP",
      description: service.priceRange,
    };
  }
  return schema;
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/writing/${post.slug}`,
    datePublished: post.date,
    author: { "@id": `${SITE_URL}/#person` },
  };
}
