# Todos — Ajmal Garden Nursery (blended with locked plan)

> Locked plan: `C:\Users\Usman\.opencode\plan\ajmal-garden-plan.md` — $0 (Vercel + Supabase + Cloudinary),
> owner-only admin, marketing-only (no cart), prices hidden but ready.
> Status: ⬜ todo · 🟡 in progress · ✅ done · →plan = lives in the plan doc

---

## ✅ Shipped this round (old todos closed)

- ✅ CTA hierarchy: WhatsApp primary / Call secondary / Quote tertiary (`CtaButtons.tsx`, `site.ts` header, `config.ts:CTA_ORDER`)
- ✅ `track()` stub wired: whatsapp/call (`CtaButtons`), quote open (`GetQuote`), product ask (`ProductCard`), contact submit (`Contact`)
- ✅ Products: hash deep-link survives refresh, instant search (collections + products) with counts, WhatsApp empty-state, `aria-pressed`/`aria-current` chips (`Products.tsx`)
- ✅ Contact: 10–500 char validation, honeypot, trimmed name (no `(visitor)`), "Opening WhatsApp…" feedback (`Contact.tsx`)
- ✅ SEO basics: per-route titles + descriptions (`hooks/usePageMeta`), OG/Twitter/`theme-color` (`index.html`), `robots.txt`, real 404 page (`NotFound.tsx`, `App.tsx:*`)
- ✅ Nav renamed Identify → Plant Finder (+ `/plant-finder` alias, hero eyebrow, title)
- ✅ Logo 404 killed — vector `LogoMark` renders directly (`Logo.tsx`); photo logo = upload + one-line restore
- ✅ Motion/a11y: `prefers-reduced-motion` (`index.css`), carousel keyboard arrows + real hit-areas + focus rings (`ProductCard.tsx`), video thumbs `alt={title}`
- ✅ Key hygiene: hardcoded Pl@ntNet fallback removed (fail-closed + WhatsApp handoff), `.env.example` rotation guide; verified `.env`/`dist/` untracked, leaked key absent from fresh bundle
- ✅ Private relay coded: `supabase/functions/identify` (per-IP 30/day + global 450/day caps, CORS allowlist, PlantNet→Gemini server-side, `?action=status` leaks nothing) + client tries relay first, legacy direct keys second, WhatsApp handoff last
- ✅ Google favicon fix (not PWA): crawlable `/favicon.svg` + PNGs 48/96/180/192/512 (`public/icons/`, `scripts/make-icons.mjs`), file `<link rel="icon">` tags replacing the data-URI Google ignores, `GardenStore` JSON-LD (logo, hours, phone, address); verified served with correct MIME + present in HTML
- ✅ Photo library foundation: audited `ext-src/` (186 files, 186 unique, 0 unreadable) → `ext-src/organized/AGN-XXXX.*` + `media-manifest.json`; sampled 25 photos visually → trashed 2 substandard (stock tree, watermark+fingers) + 4 mp4 videos to `ext-src/trash/` (manifest tracks reasons; video gallery roadmapped, not Cloudinary); `gallery/` removed by owner (ext-src supersedes it)
- ✅ Gallery V1 redesign: curated masonry (natural ratios, orientation rhythm, CSS columns 2/3/4), URL filter state (?cat=&q=&tag=), search + auto-unlocking refine row, serif name plates, immersive full-viewport lightbox (swipe/arrows/counter/preload/share/WhatsApp), srcset + fade-in + CLS-safe aspect boxes, Cloudinary-failure leaf tiles
- ✅ UI skill group (local, `.agents/skills/`): `impeccable` (taste/critique) + `frontend-design` (Anthropic, bold surfaces) + `ui-ux-pro-max` (searchable DB: styles/palettes/fonts/guidelines, `search.py --design-system` smoke-tested) + custom `ajmal-ui` orchestrator + root `DESIGN.md` brand spec (tokens, type scale, CTA order, gates). NOTE: `ui.sh` skills unverified as a package — needs owner URL.
- ✅ `ErrorBoundary` around router; foundation files: `config.ts` flags (`showPrices:false`), `Category.tags`/`nameUr` (facet-ready)
- ✅ Phase 0 web foundation: `BrowserRouter` + `vercel.json` rewrites + old-hash compat, singlefile plugin dropped (split assets), `fuse.js` installed
- ✅ Phase 1 catalog depth: product pages `/catalog/:cat/:id` (gallery, breadcrumbs, related, sticky mobile CTA bar), wishlist → one-WhatsApp-message (`/wishlist`, navbar badge, card hearts), suggest-as-you-type overlay (plants + collections + WhatsApp fallback, keyboard navigable), Identify→catalog stock links (`lib/matchPlant`), same-page hash sync

## 🟡 Deliberately deferred (needs owner/Vercel checks, in plan)

- →plan Server proxy + admin-managed secrets (plan §11) — relay DEPLOYED to `agn-cms` and verified end-to-end (PlantNet primary restored via relay Origin header, `relayed:true`, 5 results); left: set `VITE_IDENTIFY_PROXY_URL` in Vercel → redeploy → delete old `VITE_*` keys. NOTE: Pl@ntNet "expose key" browser-mode 403s keyless server calls — relay now sends our allowlisted Origin; keep www.ajmalgarden.com in the Pl@ntNet domain list
- →plan Image compression (`hero/cat-*.jpg` → <300KB/<150KB) + hero width/height
- →plan `gallery/` purge / LFS (100+ WhatsApp JPEGs bloat repo)
- →plan Type-scale lock + terra/marigold role cleanup (visual pass with owner)
- →plan Identify quota display, sample photos, Take-vs-Upload split
- →plan 11px uppercase contrast bump (fold into visual pass)

## →plan Roadmap (single source of truth in plan doc §8)

- **Phase 0:** ✅ router/split-assets/SEO/404/track/relay done · ✅ Supabase schema + seed live AND verified over REST (7 categories, 26 published products, 8 settings rows, RLS public reads working) · left: Cloudinary pipeline (bulk upload running), static snapshot build
- **Phase 1:** ✅ product pages, Fuse suggest, wishlist→WhatsApp, Urdu-ready fields, Identify→product links · left: facet auto-collections (needs owner tagging via admin), full Urdu strings
- **Phase 2:** Owner-only `/admin` (products → categories → settings → sections → media), export/trash/Republish
- **Phase 3:** Bulk import, Plausible + events, reviews/banners, 360/768/1280 QA gate

## Out of scope (confirmed)

- Cart / checkout / payments / accounts · separate CMS/search/auth vendors · video on Cloudinary
