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
 */
export const FEATURES = {
  showPrices: false,
  showAI: false,
  showBulkTable: true,
} as const;

/** Primary conversion funnel order — WhatsApp first, always. */
export const CTA_ORDER = ["whatsapp", "call", "quote"] as const;
