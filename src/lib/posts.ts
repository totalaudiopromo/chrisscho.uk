import "server-only";
import fs from "node:fs";
import path from "node:path";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

export interface PostEntry extends PostMeta {
  slug: string;
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/writing");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<PostEntry[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const mod = await import(`../content/writing/${slug}.mdx`);
      return { slug, ...(mod.meta as PostMeta) };
    })
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
