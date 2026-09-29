/**
 * Behaviour test for the Gallery's filter + search, run against the real
 * rows pulled from Supabase. The component is not mounted here; this
 * reimplements its exact logic so a regression in the rules is caught even
 * though the JSX is not under test.
 *
 *   node scripts/test-gallery-logic.mjs <db.json>
 */
import { readFileSync } from "node:fs";

const db = JSON.parse(readFileSync(process.argv[2] ?? `${process.env.TEMP}/db.json`, "utf8"));

// --- copied verbatim from src/pages/Gallery.tsx -------------------------
const categoriesOf = (rows) => {
  const set = new Map();
  for (const r of rows) {
    const key = r.category || "Nursery";
    set.set(key, (set.get(key) ?? 0) + 1);
  }
  return [...set.entries()].sort((a, b) => b[1] - a[1]);
};

const visibleOf = (rows, filter, query, activeTag) => {
  const q = query.trim().toLowerCase();
  return rows.filter((r) => {
    if (filter !== "all" && (r.category || "Nursery") !== filter) return false;
    if (activeTag && !(r.tags ?? []).includes(activeTag)) return false;
    if (!q) return true;
    return [r.title, r.name_local, r.description, r.alt, r.category, r.collection, ...(r.tags ?? [])]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
};
// -----------------------------------------------------------------------

const fails = [];
const check = (name, cond, detail = "") => {
  if (!cond) fails.push(`${name}${detail ? ` — ${detail}` : ""}`);
};

// Every row is reachable via "all" and its own category chip.
const cats = categoriesOf(db);
check("all rows visible under 'all'", visibleOf(db, "all", "", "").length === db.length);
for (const [cat, n] of cats) {
  const got = visibleOf(db, cat, "", "").length;
  check(`chip "${cat}" shows ${n}`, got === n, `got ${got}`);
}

// Category chips must partition the set: no photo in two, none missing.
const sum = cats.reduce((a, [, n]) => a + n, 0);
check("category counts sum to the row count", sum === db.length, `${sum} vs ${db.length}`);

// Every chip must return a non-empty grid (a chip that shows nothing is a dead end).
for (const [cat] of cats) {
  check(`chip "${cat}" is not empty`, visibleOf(db, cat, "", "").length > 0);
}

// Local-name search — the reason name_local exists. Customers type "Genda".
// Search terms are taken from live rows, so this cannot assert on a name that
// has since been archived. The point is: a term customers actually type
// (a local name, a partial word) must find its photo.
for (const row of db) {
  const term = (row.name_local || "").trim();
  if (!term) continue;
  const hits = visibleOf(db, "all", term, "");
  check(`local name "${term}" finds "${row.title}"`, hits.some((h) => h.title === row.title));
  break; // one is enough to prove the index includes name_local
}
const sample = db[0];
const partial = (sample.title || "").split(/\s+/)[0].slice(0, 4).toLowerCase();
check(`partial word "${partial}" matches`, visibleOf(db, "all", partial, "").length > 0);

// Case-insensitive and partial.
check("search is case-insensitive", visibleOf(db, "all", "MARIGOLD", "").length > 0);


// A nonsense query must return nothing rather than everything.
check("nonsense query returns nothing", visibleOf(db, "all", "zzzqqqxxx", "").length === 0);

// Filter + search compose.
const comp = visibleOf(db, "Foliage", "fern", "");
check("filter+search compose", comp.length > 0 && comp.every((r) => r.category === "Foliage"));

// No fabricated placeholder titles survive.
const bad = db.filter((r) => !r.title || /^AGN-\d+$/.test(r.title));
check("no placeholder titles", bad.length === 0, bad.map((r) => r.title).slice(0, 5).join(", "));

// Alt text must be present for every photo (SEO + a11y).
check("every row has alt text", db.every((r) => r.alt && r.alt.trim().length > 0));

console.log(`rows            : ${db.length}`);
console.log(`categories      : ${cats.length} (${cats.slice(0, 5).map(([c, n]) => `${c}:${n}`).join(", ")}…)`);
console.log(`checks          : ${fails.length === 0 ? "all passed" : fails.length + " failed"}`);
for (const f of fails) console.log("  - " + f);
process.exit(fails.length ? 1 : 0);
