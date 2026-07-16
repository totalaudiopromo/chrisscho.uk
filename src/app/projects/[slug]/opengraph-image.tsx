import { zineOgImage, OG_SIZE } from "../../../lib/og";
import { portfolioProjects } from "../../../config/portfolioConfig";

export const alt = "Project case file — Chris Schofield";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.id }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.id === slug);
  return zineOgImage({
    kicker: `[ Case File // ${project?.type.replace("-", " ") ?? "project"} ]`,
    title: project?.name ?? "Project",
    subtitle: project?.tagline ?? "chrisscho.uk",
  });
}
