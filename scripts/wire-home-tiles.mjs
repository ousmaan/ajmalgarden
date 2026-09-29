/**
 * Re-wire the Home "This Week at the Nursery" tiles to verified photos.
 *
 * The previous picks were made from the fabricated catalog, which is why the
 * strip showed raspberries under "Trees & Palms". Every photo below has been
 * opened and identified, and the filter matches the photo's real category so
 * the tile's own photo is always present on the page it deep-links into.
 *
 * Note on the bonsai tile: the library still has no bonsai. Rather than pass a
 * topiary off as one, the tile uses a Bird of Paradise, which genuinely is an
 * exotic plant, and the alt text describes the real photo.
 */
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "src/data/site.ts";
const CATALOG = "scripts/photo-catalog.json";
const catalog = JSON.parse(readFileSync(CATALOG, "utf8"));

const TILES = {
  flowering: "AGN-0041", // Marigold Bed            -> Flowering Plant
  indoor: "AGN-0129",    // Green Peace Lily Plants -> Foliage
  trees: "AGN-0139",     // Areca Palm Seedlings    -> Foliage
  bonsai: "AGN-0155",    // Bird of Paradise        -> Tropical Plant
};

let site = readFileSync(SITE, "utf8");

// Alt text must describe the photo that is actually shown, not the department.
const ALT = {
  flowering: "A wide bed of orange marigolds in full bloom at Ajmal Garden Nursery",
  indoor: "Green peace lilies in nursery pots with dewy leaves",
  trees: "Dense Areca palm seedlings in black nursery bags at Ajmal Garden Nursery",
  bonsai: "Large paddle-leaved Bird of Paradise in pots, a strong statement for lawns",
};

for (const [id, agn] of Object.entries(TILES)) {
  const row = catalog[agn];
  if (!row) throw new Error(`${agn} missing from catalog`);
  if (row.archived) throw new Error(`${agn} is archived`);
  if (!row.__observed) throw new Error(`${agn} was never verified`);

  // Locate this category's `image:` line and inject after it.
  const re = new RegExp(`(id: "${id}",[\\s\\S]{0,900}?imageAlt: "[^"]*",)`);
  if (!re.test(site)) throw new Error(`could not locate category "${id}" in site.ts`);
  site = site.replace(
    re,
    (_m, head) =>
      `${head}\n    galleryPhotoId: "ajmal-garden/${agn}",\n` +
      `    galleryFilter: "${row.category}",`,
  );
}

// Now correct the alt text for the four tiles.
for (const [id, alt] of Object.entries(ALT)) {
  const re = new RegExp(`(id: "${id}",[\\s\\S]{0,900}?imageAlt: )"[^"]*"`);
  if (!re.test(site)) throw new Error(`could not locate alt text for "${id}"`);
  site = site.replace(re, (_m, head) => `${head}"${alt}"`);
}

writeFileSync(SITE, site, "utf8");
for (const [id, agn] of Object.entries(TILES)) {
  console.log(`  ${id.padEnd(10)} -> ${agn} ${catalog[agn].title} (${catalog[agn].category})`);
}
console.log("tiles rewired");
