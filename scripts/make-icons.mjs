/**
 * Favicon/icon generator (Google Search favicon fix).
 * Run: node scripts/make-icons.mjs
 * Renders public/favicon.svg to crawlable PNGs at Google-eligible sizes
 * (square, ≥48px). Re-run if the logo ever changes. Checked into git —
 * these are tiny brand assets, not catalog photos.
 */
import { mkdirSync } from "node:fs";
import sharp from "sharp";

mkdirSync("public/icons", { recursive: true });

const jobs = [
  ["public/icons/logo-48.png", 48],
  ["public/icons/logo-96.png", 96],
  ["public/icons/apple-touch-icon.png", 180],
  ["public/icons/icon-192.png", 192],
  ["public/icons/icon-512.png", 512],
];

for (const [out, size] of jobs) {
  await sharp("public/favicon.svg", { density: 300 })
    .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(out);
  console.log("wrote", out);
}
