/**
 * Verification gate for the photo catalog.
 *
 * Why this exists: the catalog once claimed 180/180 complete while only ~32
 * photos had been opened. AGN-0099 was titled "Palm Tree" — it is raspberries.
 * A title nobody checked is worse than no title, because customers order from
 * it. So a row is publishable only once it is on this list.
 *
 * How a photo qualifies:
 *   1. the owner's own tagging batches (trusted), or
 *   2. `__observed: true` — someone opened the file and recorded what is in it,
 *      set by scripts/apply-observations.mjs, and
 *   3. `is_our_stock` is not false — a reposted social-media screenshot is not
 *      stock we can sell, however well identified.
 *
 * This module is imported by sync-gallery-media.mjs. Run it directly to see
 * the current coverage and the list still to be checked.
 */
import { readFileSync, writeFileSync } from "node:fs";

const CATALOG = "scripts/photo-catalog.json";

/** The owner's own tagging batches: trusted without re-checking. */
export const OWNER_BATCHED = new Set([
  "AGN-0002", "AGN-0003", "AGN-0004", "AGN-0005", "AGN-0006",
  "AGN-0007", "AGN-0009", "AGN-0010", "AGN-0011", "AGN-0012",
  "AGN-0013", "AGN-0014", "AGN-0015", "AGN-0017", "AGN-0018",
  "AGN-0019", "AGN-0020", "AGN-0021", "AGN-0022", "AGN-0024",
  "AGN-0025", "AGN-0026", "AGN-0027", "AGN-0028", "AGN-0029",
  "AGN-0030", "AGN-0032", "AGN-0033", "AGN-0034", "AGN-0035",
]);

const catalog = () => JSON.parse(readFileSync(CATALOG, "utf8"));
/** Photo rows only — keys starting with "_" are documentation, not photos. */
const photoEntries = (c) => Object.entries(c).filter(([id]) => !id.startsWith("_"));


/** Photographed and identified by eye. */
const OBSERVED = new Set(
  photoEntries(catalog())
    .filter(([, r]) => r.__observed === true)
    .map(([id]) => id),
);

/** Identified, but not our stock to sell. */
const NOT_OUR_STOCK = new Set(
  photoEntries(catalog())
    .filter(([, r]) => r.is_our_stock === false)
    .map(([id]) => id),
);

/** Removed from the site entirely (see scripts/archive-list.json). */
const ARCHIVED = new Set(
  photoEntries(catalog())
    .filter(([, r]) => r.archived === true)
    .map(([id]) => id),
);

/** Publishable: identified, genuinely our stock, and not archived. */
export const VERIFIED = new Set(
  [...OWNER_BATCHED, ...OBSERVED].filter(
    (id) => !NOT_OUR_STOCK.has(id) && !ARCHIVED.has(id),
  ),
);

export { ARCHIVED };

// Run directly (`node scripts/mark-verified.mjs`) to print coverage.
if (process.argv[1] && process.argv[1].endsWith("mark-verified.mjs")) {
  const c = catalog();
  const ids = photoEntries(c).map(([id]) => id);
  const pending = ids.filter((id) => !VERIFIED.has(id) && !ARCHIVED.has(id));
  const ours = ids.filter((id) => NOT_OUR_STOCK.has(id));

  console.log(`publishable : ${VERIFIED.size}/${ids.length}`);
  console.log(`archived     : ${ARCHIVED.size}${ARCHIVED.size ? ` (${[...ARCHIVED].join(", ")})` : ""}`);
  console.log(`not our stock: ${ours.filter((id) => !ARCHIVED.has(id)).length}`);
  console.log(`to check     : ${pending.length}`);
  if (pending.length) {
    console.log("\nwithheld from the gallery until confirmed:");
    for (let i = 0; i < pending.length; i += 10) {
      console.log("  " + pending.slice(i, i + 10).join(", "));
    }
  }
}
