/**
 * Tag-patch applier (generic, reusable for every AI/owner tagging batch).
 * Run: node scripts/apply-tag-patch.mjs scripts/tag-batch-N.json
 * Merges patch fields into media-manifest.json by id: scalars overwrite when
 * non-empty, tags_add unions into tags[], cover/reuse set when present.
 * Afterwards: node scripts/sync-gallery-media.mjs + supabase db push --linked
 * (sync maps product_long→title, parent_cat→category).
 */
import { readFileSync, writeFileSync } from "node:fs";

const patchPath = process.argv[2];
if (!patchPath) {
  console.error("Usage: node scripts/apply-tag-patch.mjs scripts/tag-batch-N.json");
  process.exit(1);
}
const mp = "ext-src/organized/media-manifest.json";
const manifest = JSON.parse(readFileSync(mp, "utf8"));
const patch = JSON.parse(readFileSync(patchPath, "utf8"));

let n = 0;
for (const [id, p] of Object.entries(patch)) {
  const row = manifest.items.find((i) => i.id === id);
  if (!row) {
    console.log(`SKIP ${id}: not in manifest`);
    continue;
  }
  for (const k of ["parent_cat", "sub_cat", "collection", "product_short", "product_long", "description", "alt", "name_ur"]) {
    if (p[k]) row[k] = p[k];
  }
  if (Array.isArray(p.tags_add)) row.tags = [...new Set([...(row.tags ?? []), ...p.tags_add])];
  if (typeof p.cover === "boolean") row.cover = p.cover;
  if (Array.isArray(p.reuse)) row.reuse = p.reuse;
  n++;
}
writeFileSync(mp, JSON.stringify(manifest, null, 4) + "\n");
console.log(`patched=${n}`);
