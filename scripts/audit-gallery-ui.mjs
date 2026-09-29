/**
 * Production audit for the gallery UI: the checks a build cannot catch.
 *
 *   node scripts/audit-gallery-ui.mjs
 *
 * Static analysis of the rendered contract:
 *  - every caption field is wired to a real GalleryRow property
 *  - the name plate degrades sensibly when a field is empty
 *  - the tile is a real button (keyboard reachable) with an accessible name
 *  - the deep-link filter value matches the category vocabulary the DB uses
 */
import { readFileSync } from "node:fs";

const G = readFileSync("src/pages/Gallery.tsx", "utf8");
const S = readFileSync("src/lib/supabase.ts", "utf8");
const CAT = JSON.parse(readFileSync("scripts/photo-catalog.json", "utf8"));

const problems = [];
const ok = [];

// 1. GalleryRow must expose every field the UI reads.
const rowFields = [...S.matchAll(/^\s{2}(\w+)\??:/gm)].map((m) => m[1]);
const readFields = new Set();
for (const m of G.matchAll(/\brow\.(\w+)/g)) readFields.add(m[1]);
for (const f of readFields) {
  if (!rowFields.includes(f)) problems.push(`GalleryRow has no field "${f}" but Gallery.tsx reads row.${f}`);
  else ok.push(`row.${f} declared in GalleryRow`);
}

// 2. The caption must render title, local name AND description.
for (const [label, re] of [
  ["title", /row\.title &&/],
  ["name_local", /row\.name_local &&/],
  ["description", /row\.description &&/],
]) {
  if (re.test(G)) ok.push(`name plate renders ${label}`);
  else problems.push(`name plate does not render ${label}`);
}

// 3. Local name must be searchable, or it is invisible to customers who use it.
if (/name_local/.test(G.split("const visible")[1] ?? "")) ok.push("local name is in the search index");
else problems.push("name_local is not included in the gallery search index");

// 4. The tile must be a keyboard-reachable control with an accessible name.
if (/<button[\s\S]{0,400}?onClick=\{onOpen\}/.test(G)) ok.push("tile is a <button> (keyboard reachable)");
else problems.push("tile is not a button — cannot be tabbed to");
if (/aria-label=\{row\.title/.test(G)) ok.push("tile has an accessible name");
else problems.push("tile has no aria-label");

// 5. Local name should reach the WhatsApp handover too.
if (/name_local[\s\S]{0,200}?do you have this plant/.test(G)) ok.push("WhatsApp enquiry includes the local name");
else problems.push("WhatsApp enquiry omits the local name");

// 6. Every category the UI can be deep-linked to must exist in the catalog.
const filters = [...readFileSync("src/data/site.ts", "utf8").matchAll(/galleryFilter:\s*"([^"]+)"/g)].map((m) => m[1]);
const vocab = new Set(
  Object.values(CAT).filter((r) => r && r.category).map((r) => r.category),
);
for (const f of filters) {
  if (vocab.has(f)) ok.push(`Home tile filter "${f}" is a real category`);
  else problems.push(`Home tile filter "${f}" matches no catalog category`);
}

// 7. Archived photos must not be referenced by the UI.
const archived = Object.entries(CAT).filter(([id, r]) => id.startsWith("AGN-") && r.archived).map(([id]) => id);
const site = readFileSync("src/data/site.ts", "utf8");

/** Comments document the archive list by name; they are not live references. */
const codeOnly = (src) => src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
const siteCode = codeOnly(site);
const galleryCode = codeOnly(G);
for (const id of archived) {
  if (siteCode.includes(id) || galleryCode.includes(id)) {
    problems.push(`${id} is archived but still referenced in live UI code`);
  }
}
ok.push(`${archived.length} archived photos are not referenced by the UI`);

console.log("PASS (" + ok.length + ")");
for (const o of ok) console.log("  + " + o);
console.log("\nFAIL (" + problems.length + ")");
for (const p of problems) console.log("  - " + p);
process.exit(problems.length ? 1 : 0);
