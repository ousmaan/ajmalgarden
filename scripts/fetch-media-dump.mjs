/**
 * Pull the live media table via the public anon key and write a local dump
 * for the audit/test scripts. Uses ONLY the publishable anon key — the
 * service key must never appear in this repo.
 *
 *   node scripts/fetch-media-dump.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(".env", "utf8")
    .split(/\r?\n/)
    .filter((l) => l.includes("=") && !l.trim().startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);

const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error("VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY missing from .env");
  process.exit(1);
}

const out = `${process.env.TEMP}/db.json`;
const res = await fetch(
  `${url}/rest/v1/media?select=cloudinary_id,alt,title,description,category,collection,name_local,tags,sort,visible,width,height&limit=1000`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } },
);
if (!res.ok) {
  console.error(`REST ${res.status}: ${await res.text()}`);
  process.exit(1);
}
const rows = await res.json();
if (!Array.isArray(rows)) {
  console.error("expected an array from the media table");
  process.exit(1);
}
writeFileSync(out, JSON.stringify(rows, null, 2), "utf8");
console.log(`wrote ${out} (${rows.length} rows, ${rows.filter((r) => r.visible).length} visible)`);
