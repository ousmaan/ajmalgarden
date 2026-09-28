/**
 * Stamp `verified: true` on catalog rows a human/AI has actually LOOKED at.
 *
 * Why this exists: the catalog once claimed 180/180 complete while only ~32
 * photos had been viewed. AGN-0099 was titled "Palm Tree" — it is raspberries.
 * A title that is a guess is worse than no title, because customers order from
 * it. So a row is publishable only once it is in this list.
 *
 *   node scripts/mark-verified.mjs AGN-0001 AGN-0041 …
 *
 * IDs not listed here stay `verified: false` and are withheld from the gallery
 * (see sync-gallery-media.mjs) until someone confirms the photo by eye.
 */
import { readFileSync, writeFileSync } from "node:fs";

const CATALOG = "scripts/photo-catalog.json";

/** Photos confirmed by direct observation (this file is the audit trail). */
export const VERIFIED = new Set([
  // viewed 2026-09-29
  "AGN-0001", "AGN-0008", "AGN-0016", "AGN-0023", "AGN-0031",
  "AGN-0036", "AGN-0037", "AGN-0038", "AGN-0039", "AGN-0040",
  "AGN-0041", "AGN-0042", "AGN-0043", "AGN-0044", "AGN-0045",
  "AGN-0054", "AGN-0055", "AGN-0056", "AGN-0057", "AGN-0058",
  "AGN-0059", "AGN-0060", "AGN-0061", "AGN-0062", "AGN-0063",
  "AGN-0064", "AGN-0065",
  "AGN-0099", "AGN-0100", "AGN-0141", "AGN-0179", "AGN-0181",
  // owner's own tagging batches (scripts/tag-batch-1.json, -2.json)
  "AGN-0002", "AGN-0003", "AGN-0004", "AGN-0005", "AGN-0006",
  "AGN-0007", "AGN-0009", "AGN-0010", "AGN-0011", "AGN-0012",
  "AGN-0013", "AGN-0014", "AGN-0015", "AGN-0017", "AGN-0018",
  "AGN-0019", "AGN-0020", "AGN-0021", "AGN-0022", "AGN-0024",
  "AGN-0025", "AGN-0026", "AGN-0027", "AGN-0028", "AGN-0029",
  "AGN-0030", "AGN-0032", "AGN-0033", "AGN-0034", "AGN-0035",
]);

// `node scripts/mark-verified.mjs AGN-XXXX …` adds newly-confirmed photos.
const added = process.argv.slice(2);
if (added.length) {
  const catalog = JSON.parse(readFileSync(CATALOG, "utf8"));
  let n = 0;
  for (const id of added) {
    if (!catalog[id]) {
      console.warn(`skip ${id}: not in catalog`);
      continue;
    }
    VERIFIED.add(id);
    n++;
  }
  for (const [id, row] of Object.entries(catalog)) {
    row.verified = VERIFIED.has(id);
  }
  writeFileSync(CATALOG, JSON.stringify(catalog, null, 2) + "\n");
  console.log(`marked ${n} new photo(s) verified`);
}

const catalog = JSON.parse(readFileSync(CATALOG, "utf8"));
const ids = Object.keys(catalog);
const verified = ids.filter((id) => VERIFIED.has(id));
const unverified = ids.filter((id) => !VERIFIED.has(id));

console.log(`\nverified   : ${verified.length}/${ids.length}`);
console.log(`unverified : ${unverified.length}`);
if (unverified.length) {
  console.log(`\nwithheld from the gallery until confirmed:`);
  for (let i = 0; i < unverified.length; i += 10) {
    console.log("  " + unverified.slice(i, i + 10).join(", "));
  }
}
