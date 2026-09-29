/**
 * Archive photos that must not appear on the site.
 *
 *   node scripts/archive-photos.mjs scripts/archive-list.json
 *
 * Moved out of ext-src/organized/ into ext-src/trash/ (reversible — the
 * project's established pattern) and flagged `archived` in the catalog, so the
 * sync stops emitting them for the gallery feed entirely.
 *
 * Why this exists (2026-09-30): 14 of the 180 photos are not our stock —
 * reposted social-media screenshots with app overlays, retail stock fruit with
 * burned-in product labels, and landscaped street/park trees. Selling a plant
 * from someone else's screenshot is a rights problem as much as a trust one.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, writeFileSync as wf } from "node:fs";
import { join } from "node:path";

const CATALOG = "scripts/photo-catalog.json";
const ORGANIZED = "ext-src/organized";
const TRASH = "ext-src/trash/archived";
const README = "ext-src/trash/archived/README.md";

const path = process.argv[2];
if (!path) {
  console.error("Usage: node scripts/archive-photos.mjs <archive-list.json>");
  process.exit(1);
}

const list = JSON.parse(readFileSync(path, "utf8")); // [{ id, reason }]
const catalog = JSON.parse(readFileSync(CATALOG, "utf8"));

if (!existsSync(TRASH)) mkdirSync(TRASH, { recursive: true });

let moved = 0;
let flagged = 0;
const missing = [];

for (const { id, reason } of list) {
  if (!catalog[id]) {
    missing.push(id);
    continue;
  }
  catalog[id].archived = true;
  catalog[id].archive_reason = reason;
  catalog[id].is_our_stock = false;
  flagged++;

  const src = join(ORGANIZED, `${id}.jpg`);
  if (existsSync(src)) {
    renameSync(src, join(TRASH, `${id}.jpg`));
    moved++;
  }
}

writeFileSync(CATALOG, JSON.stringify(catalog, null, 2) + "\n");

const rows = list.map(({ id, reason }) => `- **${id}** — ${reason}`).join("\n");
wf(
  README,
  `# Archived photos\n\n` +
  `Removed from the gallery on 2026-09-30. Files moved here, not deleted —\n` +
  `move them back to \`ext-src/organized/\` and clear \`archived\` in\n` +
  `\`scripts/photo-catalog.json\` to restore.\n\n${rows}\n`,
  "utf8",
);

console.log(`flagged archived : ${flagged}`);
console.log(`files moved      : ${moved}  -> ${TRASH}`);
if (missing.length) console.log(`not in catalog   : ${missing.join(", ")}`);
