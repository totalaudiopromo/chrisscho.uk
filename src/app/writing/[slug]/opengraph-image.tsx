import { zineOgImage, OG_SIZE } from "../../../lib/og";
import { getPostSlugs } from "../../../lib/posts";
import type { PostMeta } from "../../../lib/posts";

export const alt = "Field note — Chris Schofield";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let meta: PostMeta | null = null;
  try {
    meta = (await import(`../../../content/writing/${slug}.mdx`)).meta as PostMeta;
  } catch {
    meta = null;
  }
  return zineOgImage({
    kicker: "[ Field Note ]",
    title: meta?.title ?? "Writing",
    subtitle: meta?.date ?? "chrisscho.uk",
  });
}
