/**
 * One-shot image optimizer for public/ assets.
 * Converts oversized source images to right-sized WebP and prints
 * the emitted dimensions (used for next/image width/height props).
 *
 * Usage: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { stat } from "node:fs/promises";
import path from "node:path";

const PUBLIC = new URL("../public/", import.meta.url).pathname;

// [source, output, max width, max height (crop from top, applied after resize)]
const JOBS = [
  ["tap-landing-screenshot.png", "tap-landing-screenshot.webp", 1600, 4000],
  ["totalaud-landing-screenshot.png", "totalaud-landing-screenshot.webp", 1600],
  ["spotcheck_screenshot.png", "spotcheck_screenshot.webp", 1600],
  ["newsjack_screenshot.png", "newsjack_screenshot.webp", 1600],
  ["sadact_artwork.jpg", "sadact_artwork.webp", 800],
  ["chris-schofield-founder.jpg", "chris-schofield-founder.webp", 800],
];

for (const [src, out, maxWidth, maxHeight] of JOBS) {
  const srcPath = path.join(PUBLIC, src);
  const outPath = path.join(PUBLIC, out);
  let image = sharp(srcPath);
  const meta = await image.metadata();
  const width = Math.min(meta.width ?? maxWidth, maxWidth);
  image = image.resize({ width, withoutEnlargement: true });
  if (maxHeight) {
    const scaledHeight = Math.round(((meta.height ?? 0) * width) / (meta.width ?? width));
    if (scaledHeight > maxHeight) {
      image = image.extract({ left: 0, top: 0, width, height: maxHeight });
    }
  }
  const info = await image.webp({ quality: 80 }).toFile(outPath);
  const before = (await stat(srcPath)).size;
  console.log(
    `${src} (${(before / 1024).toFixed(0)}KB) -> ${out} ` +
      `${info.width}x${info.height} (${(info.size / 1024).toFixed(0)}KB)`
  );
}
