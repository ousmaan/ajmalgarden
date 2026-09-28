/**
 * Funnel analytics stub.
 *
 * CTA hierarchy (locked): 1. WhatsApp (primary) · 2. Call (secondary) · 3. Get a Quote (tertiary).
 * Every Call / WhatsApp / Quote interaction should call `track()` with a source
 * (e.g. "hero", "product-dahlia", "contact-form") so Plausible/GA can plug in
 * later without touching call sites.
 */
export function track(event: string, props?: Record<string, string | number>): void {
  // Dev: visible in console so wiring can be verified before shipping analytics.
  if (!import.meta.env.PROD) {
    // eslint-disable-next-line no-console
    console.debug("[track]", event, props ?? {});
    return;
  }
  try {
    (window as unknown as { plausible?: (e: string, o?: unknown) => void }).plausible?.(event, {
      props,
    });
  } catch {
    // Analytics must never break the funnel.
  }
}
