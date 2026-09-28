/**
 * Site-wide feature flags — the code-side seed of the future `site_settings` table.
 *
 * The owner-only /admin (plan Phase 2) will edit these without code deploys.
 * Until then, flip values here + republish.
 *
 * - showPrices: catalog shows Rs. prices + bulk tiers. OFF for now (WhatsApp-only),
 *   but `price_rs` / `bulk_tiers` fields must be added price-ready (see plan §3).
 * - showAI: AI Q&A / care-draft assistant surfaces. OFF until grounded on product facts.
 * - showBulkTable: landscaper bulk-tier tables on Trees & Palms. ON (copy only, no prices).
 * - showLangToggle: EN | URDU pill in the navbar. OFF at owner's request (2026-09-29) —
 *   the site renders English only for now. The i18n layer (src/i18n/) and every
 *   `t()` call stay in place, so re-enabling is this one boolean.
 */
export const FEATURES = {
  showPrices: false,
  showAI: false,
  showBulkTable: true,
  showLangToggle: false,
} as const;

/** Primary conversion funnel order — WhatsApp first, always. */
export const CTA_ORDER = ["whatsapp", "call", "quote"] as const;
