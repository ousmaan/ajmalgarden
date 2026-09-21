# UI/UX and Functional Shortcomings — Ajmal Garden

> Source: codebase audit 2026-09-19. References as `file:line`.

## Routing / IA
- `src/App.tsx:11` uses `HashRouter` — `#/` URLs, poor SEO/shareability, breaks server analytics.
- `src/App.tsx:19` catch-all `* -> <Home/>` masks 404s; user never knows bad link.
- `src/pages/Home.tsx:155` links `to=/products#id` but `src/pages/Products.tsx:8,19-24` filter state doesn't read initial hash; deep-link lands but doesn't filter. Second hash handler in `src/components/Layout.tsx:9-22` races it.
- Only `src/pages/Identify.tsx:123` sets `document.title`; Home/Products/About/Contact leave stale titles.

## CTA / Hierarchy
- No primary CTA: Home has `CtaButtons`, `Browse Categories`, `View full catalog`, `Get Directions`, `WhatsApp Before Visit` — all same weight.
- `src/components/Layout.tsx:176` hides `GetQuoteDropdown` on scroll on desktop — CTA disappears when needed.
- `src/components/Layout.tsx:351-364` floating WhatsApp — no dismiss, covers form submit/footer on mobile.
- `src/components/Layout.tsx:44-100` 56 lines to hide/truncate the word "Nursery" — fragile ResizeObserver + manual measurement, layout-shift prone.

## Products / Catalog
- `src/pages/Products.tsx:61` sticky `top-[57px]/[61px]` hardcoded — breaks if header height changes.
- Filter has no `aria-pressed`/`aria-current`, no `?category=` URL sync, state resets on refresh (`useState("all")`).
- `src/data/catalog.ts:37` — only 5/7 categories have products; `bonsai` + `succulents` fall through to generic box `src/pages/Products.tsx:184-191`.
- No search, sort, price, stock, SKU — every `src/components/ProductCard.tsx:81-92` is "Ask on WhatsApp", high friction.
- `src/data/site.ts:70,82` `PLACEHOLDER` images — stock photos for a trust-based "visit us" business.

## Forms / Contact
- `src/pages/Contact.tsx:13-21` — only `name+message`, `window.open(waLink)`, whitespace-only passes `required`, `"(visitor)"` fallback, no validation, no honeypot, no feedback, no limit.
- Map `src/pages/Contact.tsx:152,159` — `?q=...&output=embed` + "Pin is approximate" undermines directions.
- `src/pages/About.tsx:141` "Team photos are coming soon" — placeholder copy ships to prod.

## UI Polish / A11y
- `src/pages/Home.tsx:89-95` trust strip uses emoji (🌿🏷️🚚📍) — inconsistent with premium serif brand.
- `src/components/VideoGallery.tsx:24-29` thumbnail `alt=""`, no duration/title overlay; generic titles in `src/data/site.ts:152-157`.
- No skip-link, no 404 page, no skeletons, no image failure state beyond "Photo coming soon" `src/components/ProductCard.tsx:35-39`.
- English-only for Sialkot audience, no Urdu toggle.
- No `og:`, `twitter:`, `JSON-LD`, `robots`/`sitemap` in `index.html:1-28`.
- `vite.config.ts:6` `viteSingleFile()` — one huge HTML, no caching/code-split.

## Functional / Reliability
- `src/lib/plantnet.ts:17` hardcoded PlantNet key in bundle, 500/day shared quota. Cache only `sessionStorage:12` (`plantnet.ts:114-115`).
- `src/lib/plantnet.ts:20` `GEMINI_API_KEY ?? ""` — fallback dead by default; when set, key has no origin lock.
- `src/lib/plantnet.ts:230` schema says `confidence: STRING` but prompt asks for number — parsing hack `plantnet.ts:343-357` defaults to `0.15`.
- `src/pages/Identify.tsx:251` `capture="environment"` forces camera, no gallery choice; no abort, no history/share; `Identify.tsx:395` `key=scientificName` collides on duplicates.
- `src/pages/Home.tsx:48` `fetchPriority` prop casing risk, no `srcset`/`sizes`; all externals (Maps/YouTube/Fonts/PlantNet) with no offline fallback.
