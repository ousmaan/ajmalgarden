/**
 * Color-tag pass: dominant-color tag per photo via sharp channel stats.
 * Merges one tag into media-manifest.json tags[] (skips rows already tagged).
 * Unlocks the gallery refine row immediately; owner/AI tagging refines later.
 * Run: node scripts/color-tag.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import sharp from "sharp";

function pixelTag(r, g, b) {
  const mx = Math.max(r, g, b);
  const mn = Math.min(r, g, b);
  const sat = mx - mn;
  const bri = (r + g + b) / 3;
  if (bri < 45) return "dark";
  if (sat < 30 && bri > 170) return "white";
  if (sat < 30) return bri < 120 ? "dark" : "stone-grey";
  if (r > 140 && r - g > 40 && r - b > 40) return bri > 150 ? "pink" : "red";
  if (r > 160 && g > 135 && b < 130) return "yellow";
  if (r > 160 && g > 90 && g < 175 && b < 120) return "orange";
  if (b > 105 && r > 90 && g - r < 45 && sat > 30) return "purple";
  if (g >= r && g >= b) return "green-foliage";
  if (r > 105 && r < 205 && g < 150 && b < 110) return "terracotta";
  if (b > r + 25 && b > g) return "blue";
  return "mixed";
}

const mp = "ext-src/organized/media-manifest.json";
const manifest = JSON.parse(readFileSync(mp, "utf8"));
let tagged = 0;
const refresh = process.argv.includes("--refresh");
for (const row of manifest.items) {
  if (row.status !== "unique" || row.kind !== "image") continue;
  if (!refresh && row.tags && row.tags.length > 0) continue;
  const path = `ext-src/organized/${row.file}`;
  if (!existsSync(path)) continue;
  try {
    const { data } = await sharp(path).resize(24, 24, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
    const votes = {};
    for (let i = 0; i < data.length; i += 3) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const t = pixelTag(r, g, b);
      // Saturation-weighted: vivid flowers outvote dull leaves/soil, so a red
      // dahlia in green foliage still reads "red", not "green-foliage".
      const sat = Math.max(r, g, b) - Math.min(r, g, b);
      votes[t] = (votes[t] ?? 0) + 1 + sat / 128;
    }
    // Majority wins, but ignore a "dark" landslide from night shots only if a
    // real color holds a third of the frame (soil/shadow shouldn't define it).
    const ranked = Object.entries(votes).sort((a, b) => b[1] - a[1]);
    let winner = ranked[0][0];
    if (winner === "dark") {
      const color = ranked.find(([t]) => t !== "dark" && t !== "mixed");
      if (color && color[1] >= 24 * 24 * 0.25) winner = color[0];
    }
    row.tags = [winner];
    tagged++;
  } catch (err) {
    console.log(`SKIP ${row.id}: ${err.message}`);
  }
}
writeFileSync(mp, JSON.stringify(manifest, null, 4) + "\n");
const dist = {};
for (const row of manifest.items) for (const t of row.tags ?? []) dist[t] = (dist[t] ?? 0) + 1;
console.log(`color-tagged=${tagged}`, JSON.stringify(dist));
