/**
 * One-off seed generator: live TS catalog → SQL migration.
 * Run: npx -y tsx scripts/seed-catalog.ts
 * Then: supabase db push --linked
 * Safe to re-run (upserts by slug). Local image paths seed `images[]` as-is;
 * the Cloudinary migration (plan Phase 0) rewrites them to cloudinary_ids.
 */
import { writeFileSync } from "node:fs";
import { CATEGORIES, CONTACT, CONTACTS, HOURS, MAPS_URL, SOCIALS, TAGLINE, VIDEOS } from "../src/data/site";
import { PRODUCT_CATALOG } from "../src/data/catalog";
import { FEATURES } from "../src/config";

const q = (s: unknown) => `'${String(s ?? "").replace(/'/g, "''")}'`;
const j = (v: unknown) => `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`;

const out: string[] = [];
out.push("-- Generated seed — do not hand-edit. Regenerate via scripts/seed-catalog.ts");

for (const [i, c] of CATEGORIES.entries()) {
  out.push(`insert into categories (slug, name_en, image, sort) values (${q(c.id)}, ${q(c.name)}, ${q(c.image)}, ${i})
  on conflict (slug) do update set name_en = excluded.name_en, image = excluded.image, sort = excluded.sort;`);
}

for (const section of PRODUCT_CATALOG) {
  for (const group of section.groups) {
    for (const p of group.products) {
      out.push(`insert into products (category_id, slug, name_en, description, attrs, images, status)
  values ((select id from categories where slug = ${q(section.categoryId)}), ${q(p.id)}, ${q(p.name)}, ${q(p.description)}, ${j({ group: group.title })}, ${j(p.images)}, 'published')
  on conflict (category_id, slug) do update set name_en = excluded.name_en, description = excluded.description, attrs = excluded.attrs, images = excluded.images, status = 'published';`);
    }
  }
}

const settings: Record<string, unknown> = {
  contacts: CONTACTS,
  contact: CONTACT,
  hours: HOURS,
  maps_url: MAPS_URL,
  socials: SOCIALS,
  tagline: TAGLINE,
  features: { showPrices: FEATURES.showPrices, showAI: FEATURES.showAI, showBulkTable: FEATURES.showBulkTable },
  videos: VIDEOS,
};
for (const [key, value] of Object.entries(settings)) {
  out.push(`insert into site_settings (key, value) values (${q(key)}, ${j(value)})
  on conflict (key) do update set value = excluded.value;`);
}

const path = "supabase/migrations/20260928130000_seed_catalog.sql";
writeFileSync(path, out.join("\n") + "\n");
console.log(`wrote ${path} (${out.length} statements)`);
