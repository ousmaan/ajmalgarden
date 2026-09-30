/**
 * Check the identify relay's CORS allowlist for the production origins.
 *   node scripts/check-relay-cors.mjs
 */
const RELAY = "https://xnonklducighcdbtlbhw.supabase.co/functions/v1/identify";

for (const origin of [
  "https://www.ajmalgarden.com",
  "https://ajmalgarden.com",
  "https://evil.example",
]) {
  try {
    const res = await fetch(`${RELAY}?action=status`, {
      headers: { Origin: origin },
    });
    const allow = res.headers.get("access-control-allow-origin");
    console.log(
      `${origin.padEnd(32)} -> ${res.status}  allow-origin: ${allow ?? "(none)"}` +
        (allow ? "" : "   <-- browser will BLOCK"),
    );
  } catch (e) {
    console.log(`${origin.padEnd(32)} -> ERROR ${e.message}`);
  }
}
