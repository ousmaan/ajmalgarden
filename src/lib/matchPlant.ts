import { allProducts, type ProductHit } from "../data/catalog";

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Identify → catalog bridge (plan Phase 1): when the AI's suggestion matches
 * something the nursery stocks, link straight to its product page instead of
 * leaving the visitor at a dead end. Conservative on purpose — a missed link
 * just shows the normal WhatsApp CTA; a wrong link would erode trust.
 */
export function findStockMatch(
  scientificName: string,
  commonNames: string[] = [],
): ProductHit | null {
  const sci = norm(scientificName);
  if (!sci || sci === "unknown") return null;
  const words = sci.split(" ");
  const genus = words[0] ?? "";
  const epithet = words[words.length - 1] ?? "";
  const commons = commonNames.map(norm).filter(Boolean);

  for (const hit of allProducts()) {
    const name = norm(hit.product.name);
    if (!name) continue;
    if (commons.some((c) => (c.length > 3 && name.includes(c)) || (name.length > 3 && c.includes(name))))
      return hit;
    if (genus.length > 3 && epithet.length > 3 && name.includes(genus) && name.includes(epithet))
      return hit;
    if (epithet.length > 4 && name.split(" ").includes(epithet)) return hit;
  }
  return null;
}
