/**
 * Housekeeping after the owner review (2026-09-30).
 *
 * 1. Phone watermarks ("Galaxy A73 5G" / "S24 Ultra") are an accepted mobile
 *    signature, not a defect. They were being annotated as "worth cropping" on
 *    ~20 photos, which is now settled policy — strip that wording so the notes
 *    stop repeating a non-issue, and record the policy once, in the catalog
 *    docblock, rather than on every row.
 *
 * 2. A third-party brand burned into a photo of our own stock is a
 *    misrepresentation — we would be selling someone else's product under our
 *    name. Archive it.
 *
 * 3. Identifiable faces of nursery staff published without consent is a privacy
 *    problem. Archive it.
 *
 * 4. AGN-0182 and AGN-0183 are the same scene. Keep one.
 */
import { readFileSync, writeFileSync } from "node:fs";

const CATALOG = "scripts/photo-catalog.json";
const catalog = JSON.parse(readFileSync(CATALOG, "utf8"));

// 1. Watermark notes are policy-settled; drop the per-row "worth cropping".
let cleaned = 0;
for (const row of Object.values(catalog)) {
  if (row.note && /worth cropping/i.test(row.note)) {
    row.note = row.note.replace(/;?\s*phone watermark[^;]*worth cropping/i, "").trim() || "";
    cleaned++;
  }
}
console.log(`watermark notes softened : ${cleaned}`);

// 2/3/4. Decisions applied to the catalog.
const decisions = {
  "AGN-0161": { archived: true, is_our_stock: false, archive_reason:
    "Third-party 'Agro Dhaan' brand burned into the pots — selling another company's product under our name" },
  "AGN-0162": { archived: true, is_our_stock: false, archive_reason:
    "Two identifiable nursery staff in frame, published without consent" },
  "AGN-0183": { archived: true, is_our_stock: false, archive_reason:
    "Near-duplicate of AGN-0182 (same spiral-topiary scene) — dropped to avoid a repeated tile" },
};
for (const [id, patch] of Object.entries(decisions)) {
  if (!catalog[id]) {
    console.warn(`  skip ${id}: not in catalog`);
    continue;
  }
  Object.assign(catalog[id], patch);
  console.log(`  ${id}: archived (${patch.archive_reason.slice(0, 48)}…)`);
}

// Keep AGN-0183's note pointing at the survivor rather than the reverse.
if (catalog["AGN-0182"]) {
  catalog["AGN-0182"].note = "Species not certain from the foliage; AGN-0183 was a duplicate of this scene";
}

// 1 (cont). Record the policy once.
const header = `{
  "_policy": "Phone watermarks (Galaxy A73/S24 Ultra) are an accepted mobile signature, not a defect — decided by the owner 2026-09-30. Cropping is out of scope. Photos with third-party branding in frame, identifiable faces without consent, or duplicates are archived instead (see scripts/archive-list*.json).",
`;
const keys = Object.keys(catalog);
const body = JSON.stringify(catalog, null, 2);
const withPolicy = body.replace(/^\{\n/, header).replace(/\n}$/, "\n}\n");
writeFileSync(CATALOG, withPolicy, "utf8");
console.log("policy recorded in photo-catalog.json");
