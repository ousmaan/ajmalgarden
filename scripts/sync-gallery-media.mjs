/**
 * Gallery DB sync — regenerates media-manifest.json and a SQL migration from
 * the two hand-maintained catalogs, then emits the upserts.
 *
 *   node scripts/sync-gallery-media.mjs
 *   supabase db push --linked
 *
 * Sources of truth, in priority order:
 *   scripts/photo-catalog.json        title / description / category / collection
 *   scripts/photo-catalog-local.json  name_local (Roman Urdu / Pakistani name)
 *   scripts/cloudinary-report.json    public_id (what actually exists in Cloudinary)
 *   ext-src/organized/<ID>.jpg       width / height / bytes (read from JPEG header)
 *
 * Only rows present in the Cloudinary report go live (visible = true); anything
 * not uploaded yet stays out of the gallery. Re-runnable: upsert on cloudinary_id.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { imageMeta } from "./image-meta.mjs";

const q = (s) => `'${String(s ?? "").replace(/'/g, "''")}'`;
const j = (v) => `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`;

const catalog = JSON.parse(readFileSync("scripts/photo-catalog.json", "utf8"));
const localNames = JSON.parse(readFileSync("scripts/photo-catalog-local.json", "utf8"));
const report = JSON.parse(readFileSync("scripts/cloudinary-report.json", "utf8"));

/**
 * Build the manifest. Catalog order defines `sort` (stable gallery ordering);
 * anything uploaded but missing from the catalog is appended and flagged, so a
 * newly-uploaded photo can never silently ship without a name plate.
 */
const items = [];
let missingCatalog = 0;

for (const [id, meta] of Object.entries(catalog)) {
  if (!report[id]) continue; // not uploaded yet → stays out of the gallery
  items.push({ id, sort: items.length, ...meta, name_local: localNames[id] ?? "" });
}

for (const [id, rep] of Object.entries(report)) {
  if (catalog[id]) continue;
  missingCatalog++;
  items.push({
    id,
    sort: items.length,
    title: id, // placeholder — flagged by the count printed at the end
    description: "",
    category: "",
    collection: "",
    name_local: "",
  });
}

// Attach intrinsic dimensions + file size so the grid can reserve space
// (masonry tiles render at the photo's true aspect ratio, never cropped).
for (const it of items) {
  const dim = imageMeta(`ext-src/organized/${it.id}.jpg`);
  it.width = dim.width;
  it.height = dim.height;
  it.bytes = dim.bytes;
  it.file = `${it.id}.jpg`;
  it.status = "unique";
  it.kind = "image";
  it.alt = it.title;
  it.tags = it.category ? [it.category] : [];
}

writeFileSync(
  "ext-src/organized/media-manifest.json",
  JSON.stringify({ items }, null, 4) + "\n",
);

const out = [];
out.push("-- Generated gallery sync — regenerate via scripts/sync-gallery-media.mjs");
out.push("create unique index if not exists media_cloudinary_id_uidx on media (cloudinary_id);");

for (const row of items) {
  const rep = report[row.id];
  const title = row.product_long || row.product_short || row.title || "";
  const alt = row.alt || row.description || title || row.id;
  out.push(
    `insert into media (cloudinary_id, local_path, alt, title, description, category, collection, name_local, tags, sort, visible, width, height, bytes)
  values (${q(rep.public_id)}, ${q("organized/" + row.file)}, ${q(alt)}, ${q(title)}, ${q(row.description)}, ${q(row.category)}, ${q(row.collection)}, ${q(row.name_local)}, ${j(row.tags ?? [])}, ${row.sort}, true, ${row.width ?? "null"}, ${row.height ?? "null"}, ${row.bytes ?? "null"})
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, name_local = excluded.name_local, tags = excluded.tags, sort = excluded.sort, visible = true, width = excluded.width, height = excluded.height, bytes = excluded.bytes;`,
  );
}

const stamp = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14);
const path = `supabase/migrations/${stamp}_gallery_sync.sql`;
writeFileSync(path, out.join("\n") + "\n");

const noTitle = items.filter((r) => !r.title || r.title === r.id).length;
const noDesc = items.filter((r) => !r.description).length;
console.log(`wrote ${path}`);
console.log(`  rows        : ${items.length}`);
console.log(`  no title    : ${noTitle}${missingCatalog ? `  (${missingCatalog} not in catalog — ADD THEM)` : ""}`);
console.log(`  no desc     : ${noDesc}`);
console.log(`  no local    : ${items.filter((r) => !r.name_local).length}`);

// The Home strip links into ?cat= filters — a tile whose photo sits in another
// category would open a gallery missing its own photo. Fail the sync on that.
try {
  execFileSync("node", ["scripts/verify-gallery-tiles.mjs"], { stdio: "inherit" });
} catch {
  console.error("\nHome gallery tiles are out of sync with the catalog — see FAILs above.");
  process.exitCode = 1;
}
