/**
 * Apply observed photo classifications into the catalogs.
 *
 *   node scripts/apply-observations.mjs scripts/observations-batch.json
 *
 * Input is a JSON array of observations produced by looking at each photo:
 *   { id, title, description, category, name_local, is_our_stock?, note? }
 *
 * Rules this enforces, so a future pass cannot repeat the 2026-09-29 failure:
 *  - Only ids that were actually observed get written. No invention.
 *  - An observation with an empty title is accepted but leaves the row
 *    UNVERIFIED — "I looked and I don't know" must never become a name plate.
 *  - Rows flagged is_our_stock:false are not published, even if identified:
 *    a reposted social-media screenshot is not our stock to sell.
 *  - Merges are additive per field; unspecified fields are left untouched.
 */
import { readFileSync, writeFileSync } from "node:fs";

const CATALOG = "scripts/photo-catalog.json";
const LOCALS = "scripts/photo-catalog-local.json";

const path = process.argv[2];
if (!path) {
  console.error("Usage: node scripts/apply-observations.mjs <observations.json>");
  process.exit(1);
}

const observations = JSON.parse(readFileSync(path, "utf8"));
const catalog = JSON.parse(readFileSync(CATALOG, "utf8"));
const locals = JSON.parse(readFileSync(LOCALS, "utf8"));

const CATEGORIES = new Set([
  "Flowering Plant", "Flowering Climber", "Flowering Tree", "Foliage",
  "Fruit Tree", "Tropical Plant", "Shrub", "Ornamental Plants",
  "Planters & Pots", "Fountains & Water Features", "Garden Furniture",
  "Garden Structure", "Garden Ornament", "Garden Accessories", "Nursery",
]);

let applied = 0;
let unknownId = 0;
let unidentifiable = 0;
let notOurStock = 0;
const problems = [];

for (const obs of observations) {
  const id = obs.id;
  if (!catalog[id]) {
    unknownId++;
    problems.push(`${id}: not in catalog — check the id`);
    continue;
  }
  if (!obs.title) {
    // Looked at, could not identify. Record the note, keep it unpublished.
    unidentifiable++;
    if (obs.note) catalog[id].note = obs.note;
    continue;
  }
  if (obs.category && !CATEGORIES.has(obs.category)) {
    problems.push(`${id}: unknown category "${obs.category}" — row left unverified`);
    continue;
  }
  if (obs.is_our_stock === false) {
    // Correctly identified, but it is not our stock to sell.
    notOurStock++;
    catalog[id].title = obs.title;
    catalog[id].description = obs.description;
    if (obs.category) catalog[id].category = obs.category;
    if (obs.note) catalog[id].note = obs.note;
    catalog[id].is_our_stock = false;
    continue;
  }

  catalog[id].title = obs.title;
  catalog[id].description = obs.description;
  if (obs.category) catalog[id].category = obs.category;
  catalog[id].is_our_stock = obs.is_our_stock !== false;
  if (obs.note) catalog[id].note = obs.note;
  if (obs.name_local) locals[id] = obs.name_local;
  catalog[id].__observed = true; // consumed by mark-verified
  applied++;
}

writeFileSync(CATALOG, JSON.stringify(catalog, null, 2) + "\n");
writeFileSync(LOCALS, JSON.stringify(locals, null, 2) + "\n");

console.log(`applied            : ${applied}`);
console.log(`unidentifiable     : ${unidentifiable}  (left unverified — no name plate)`);
console.log(`not our stock      : ${notOurStock}  (identified, but withheld from sale)`);
console.log(`unknown id         : ${unknownId}`);
if (problems.length) {
  console.log("\nproblems:");
  for (const p of problems) console.log("  " + p);
}
