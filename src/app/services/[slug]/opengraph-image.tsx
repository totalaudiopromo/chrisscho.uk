import { zineOgImage, OG_SIZE } from "../../../lib/og";
import { services } from "../../../config/services";

export const alt = "Consulting service — Chris Schofield";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return zineOgImage({
    kicker: service?.kicker ?? "[ Service ]",
    title: service?.title ?? "Consulting",
    subtitle: service?.priceRange ?? "chrisscho.uk",
  });
}
