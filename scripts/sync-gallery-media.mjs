/**
 * Gallery DB sync: media-manifest.json + cloudinary-report.json → SQL migration.
 * Run: node scripts/sync-gallery-media.mjs
 * Then: supabase db push --linked
 * Re-runnable by design (upsert on cloudinary_id) — re-run after the owner's
 * tagging pass to push titles/descriptions/categories/tags into `media`.
 * Only rows with a Cloudinary report entry go live (visible=true); the rest
 * stay invisible until uploaded.
 */
import { readFileSync, writeFileSync } from "node:fs";

const q = (s) => `'${String(s ?? "").replace(/'/g, "''")}'`;
const j = (v) => `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`;

const manifest = JSON.parse(readFileSync("ext-src/organized/media-manifest.json", "utf8"));
const report = JSON.parse(readFileSync("scripts/cloudinary-report.json", "utf8"));

const out = [];
out.push("-- Generated gallery sync — regenerate via scripts/sync-gallery-media.mjs");
out.push("create unique index if not exists media_cloudinary_id_uidx on media (cloudinary_id);");

let n = 0;
for (const [i, row] of manifest.items.entries()) {
  if (row.status !== "unique" || row.kind !== "image") continue;
  const rep = report[row.id];
  if (!rep) continue; // not uploaded yet → stays out of the gallery
  const title = row.product_long || row.product_short || "";
  const alt = row.alt || row.description || title || row.id;
  out.push(`insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values (${q(rep.public_id)}, ${q("organized/" + row.file)}, ${q(alt)}, ${q(title)}, ${q(row.description)}, ${q(row.parent_cat)}, ${j(row.tags ?? [])}, ${i}, true, ${row.width ?? "null"}, ${row.height ?? "null"}, ${row.bytes ?? "null"})
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;`);
  n++;
}

const path = "supabase/migrations/20260928150000_gallery_media.sql";
writeFileSync(path, out.join("\n") + "\n");
console.log(`wrote ${path} (${n} media rows)`);
