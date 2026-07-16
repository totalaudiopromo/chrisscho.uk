import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/jsonld";
import { portfolioProjects } from "../config/portfolioConfig";
import { services } from "../config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/writing`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/log`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}
