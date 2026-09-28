/**
 * Verify the Home "This Week at the Nursery" strip agrees with the photo catalog.
 *
 *   node scripts/verify-gallery-tiles.mjs
 *
 * A tile is broken if its photo isn't in the category it deep-links into, or if
 * it points at a photo that was never uploaded. Both fail silently in the UI,
 * so this check runs as part of the sync and in CI-adjacent scripts.
 */
import { readFileSync } from "node:fs";

const catalog = JSON.parse(readFileSync("scripts/photo-catalog.json", "utf8"));
const report = JSON.parse(readFileSync("scripts/cloudinary-report.json", "utf8"));
const site = readFileSync("src/data/site.ts", "utf8");

const pairs = [
  ...site.matchAll(/galleryPhotoId:\s*"ajmal-garden\/(AGN-\d+)"[\s\S]*?galleryFilter:\s*"([^"]+)"/g),
].map((m) => ({ id: m[1], filter: m[2] }));

if (pairs.length === 0) {
  // Home strip is on placeholder images — nothing to verify.
  console.log("no Home gallery tiles wired to real photos (placeholders in use) — nothing to check");
  process.exit(0);
}

let bad = 0;
for (const { id, filter } of pairs) {
  const row = catalog[id];
  const problems = [];
  if (!row) problems.push("photo not in catalog");
  else if (!report[id]) problems.push("photo not uploaded to Cloudinary");
  else if (row.category !== filter) problems.push(`category is "${row.category}", tile links to "${filter}"`);
  if (problems.length) {
    bad++;
    console.error(`FAIL  ${id}  ${problems.join("; ")}`);
  } else {
    console.log(`OK    ${id}  ${filter}  — ${row.title}`);
  }
}

console.log(`\n${pairs.length} tile(s) checked, ${bad} broken.`);
process.exit(bad ? 1 : 0);
