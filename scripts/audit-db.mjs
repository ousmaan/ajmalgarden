/**
 * Production audit: does the live Supabase media table agree with the
 * verified photo catalog, and does anything still look fabricated?
 *
 *   node scripts/audit-db.mjs
 *
 * Reads a dump produced by the shell (db.json) so no service key is needed.
 */
import { readFileSync } from "node:fs";
import { readFileSync as rf } from "node:fs";
import { OWNER_BATCHED } from "./mark-verified.mjs";

const db = JSON.parse(rf(process.argv[2] ?? `${process.env.TEMP}/db.json`, "utf8"));
const cat = JSON.parse(readFileSync("scripts/photo-catalog.json", "utf8"));

// The 30 photos trusted on the owner's own tagging batches, not re-opened.
// Use the shared set, not a regex — a regex here silently mis-matched IDs.

const problems = [];
const note = (s) => problems.push(s);

for (const row of db) {
  const id = row.cloudinary_id.split("/").pop();
  const c = cat[id];

  if (!c) {
    note(`${id}: in DB but not in catalog`);
    continue;
  }
  if (c.title !== row.title) {
    note(`${id}: title drift — db="${row.title}" catalog="${c.title}"`);
  }
  if (!row.description) note(`${id}: empty description`);
  if (!row.name_local) note(`${id}: empty name_local`);
  if (!row.category) note(`${id}: empty category`);
  if (!row.width || !row.height) note(`${id}: missing dimensions`);
  if (c.archived) note(`${id}: ARCHIVED but still in the DB`);
  if (!c.__observed && !OWNER_BATCHED.has(id)) {
    note(`${id}: published without ever being observed`);
  }
}

// Anything archived must be gone from the DB entirely.
for (const [id, c] of Object.entries(cat)) {
  if (id.startsWith("_") || !c.archived) continue;
  if (db.some((r) => r.cloudinary_id.endsWith(`/${id}`))) {
    note(`${id}: archived but still present in the DB`);
  }
}

const observed = db.filter((r) => cat[r.cloudinary_id.split("/").pop()]?.__observed).length;
const owner = db.length - observed;

console.log(`DB rows                : ${db.length}`);
console.log(`  observed by eye      : ${observed}`);
console.log(`  trusted owner batches: ${owner}`);
console.log(`archived still in DB   : ${db.filter((r) => cat[r.cloudinary_id.split("/").pop()]?.archived).length}`);
console.log(`problems               : ${problems.length}`);
for (const p of problems) console.log("  - " + p);

process.exit(problems.length ? 1 : 0);
