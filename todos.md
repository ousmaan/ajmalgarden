# Todos — Ajmal Garden Nursery (blended with locked plan)

> Locked plan: `C:\Users\Usman\.opencode\plan\ajmal-garden-plan.md` — $0 (Vercel + Supabase + Cloudinary),
> owner-only admin, marketing-only (no cart), prices hidden but ready.
> Status: ⬜ todo · 🟡 in progress · ✅ done · →plan = lives in the plan doc

---

## 🔴 TOMORROW (Wed 2026-09-30) — Verify 118 photo name plates

**The single highest-priority task.** A wrong name plate costs a customer and
our credibility; a missing one costs only a listing.

**What went wrong (2026-09-29):** the gallery catalog claimed 180/180 complete
but only ~32 photos had actually been opened and looked at. The other ~118
titles/descriptions/categories were plausible-sounding guesses. Proof:
**AGN-0099 was published as "Palm Tree / Khajoor" — the photo is a punnet of red
raspberries.** Three more confirmed wrong: AGN-0179 (seedling rows, not a mango
tree) and AGN-0181 (stone urns, not indoor plants) were viewed but mis-titled.

**Current state:** 62 verified photos live · 118 unverified withheld
(`visible = false`, uploaded but not public). Nothing guessed is in public.

**Task:** open each withheld photo, identify it by eye, write the name plate
from what is actually in the frame, then publish.

- [ ] Read the 118 withheld IDs (list printed by `node scripts/mark-verified.mjs`)
- [ ] Rewrite each title/description/category/**local name** from observation
- [ ] `node scripts/mark-verified.mjs AGN-XXXX …` as each batch is confirmed
- [ ] `node scripts/sync-gallery-media.mjs` then `supabase db push --linked`
- [ ] Confirm 180/180 published with no `WITHHELD` count in the sync output
- [ ] Re-wire the Home "This Week" tiles to real photos (currently placeholders)
      — only 1 of 4 was verified as matching its label, so it was reverted
- [ ] Shoot a real **bonsai** photo — the library has none; tile 4 borrowed a
      topiary and the alt text had to be rewritten to stop overclaiming

**Rules for this pass — do not repeat 2026-09-29:**
1. Never write a name plate for a photo you have not opened in this session.
2. A guess is worse than a blank. If unsure, leave the title empty and flag it.
3. The "RED RASPBERRY" style burned-in labels are retail stock photos — note
   them, and consider whether stock fruit images belong on a nursery site at all.
4. Re-derive `photo-catalog-local.json` from the same observation, not from the
   English title (that is how "Palm Tree" became "Khajoor" for a raspberry).

**Guardrail that now exists:** `scripts/mark-verified.mjs` holds the audit trail
of photos actually viewed; `sync-gallery-media.mjs` sets `visible = false` for
anything not on it, so an unverified photo can never ship. Note that
`verify-gallery-tiles.mjs` only checks catalog-internal consistency (photo's
category vs the filter it links to) — it cannot see whether a photo matches its
title, which is exactly the gap that caused this.

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
- ✅ Gallery V1 redesign: curated masonry (natural ratios, CSS columns 2/3/4), URL filter state (?cat=&q=&tag=&ori=), search + orientation chips + auto-unlocking color refine row, serif name plates, immersive lightbox (swipe/arrows/counter/preload/share/WhatsApp), srcset + CLS-safe aspect boxes, failure leaf tiles
- ✅ Gallery filters live: scripted dominant-color tags for all 180 (refine row unlocked); AI classification batches 1–2 shipped 30 titled photos + indoor/outdoor/flowering collection chips (`tag-batch-*.json`, reusable `apply-tag-patch.mjs`); remaining ~150 continue in batches
- ✅ Preservation: working tree committed on `main`, tag `pre-redesign`, Track 1 work continues on branch `redesign` (main stays deployable)
- ✅ Quote Builder functional spec filed (`.opencode/plan/quote-builder-spec.md`) — visual-agnostic, skinned only in the winning Track 1 world
- 🟡 Track 1 direction brief drafted (`.opencode/plan/redesign-brief.md`) — clean-slate world, modes per surface, anti-default review; AWAITING owner decisions (photo style, Urdu scope, surface order, reviews)
- ✅ UI skill group (local, `.agents/skills/`): `impeccable` + `frontend-design` + `ui-ux-pro-max` (`search.py` smoke-tested) + custom `ajmal-ui` orchestrator + root `DESIGN.md`. NOTE: `ui.sh` unverified — needs owner URL.
- ✅ Language toggle disabled at owner request — `FEATURES.showLangToggle = false` gates both navbar + drawer mounts; i18n layer and all `t()` calls retained so re-enable = flip one boolean
- ✅ Navbar hamburger leaked onto desktop on scroll — `md:hidden` was inside a scroll-state ternary, so scrolling dropped it; now unconditional with a comment
- ✅ Hero Plant Finder card fixed — white `.glass` on white text was unreadable; rebuilt as dark scrim pill (`bg-leaf-950/45` + blur + hairline border + marigold icon/chevron), verified in bundle
- ✅ Bilingual EN | Latin-Urdu toggle (Roman Urdu, `ur-Latn`, LTR — no mirroring): navbar, search overlay, CTAs, Home (new hero + gallery strip + finder band), Products (hero, search, chips, sidebar, sort, empty/bottom states), ProductDetail, Wishlist, ProductCard; ~100 keys in `src/i18n/`
- ✅ Home hero redesigned (photo-led, Plant Finder inline glass card) + `/gallery` and `/plant-finder` entries Home was missing
- ✅ Catalog density: desktop sticky facet sidebar with counts + Featured/A–Z sort; mobile chip rail kept
- ✅ Gallery collection repair: `collection` column wired end-to-end (type + query); orientation experiment reverted to keep another author's WIP intact
- ✅ `ErrorBoundary` around router; foundation files: `config.ts` flags (`showPrices:false`), `Category.tags`/`nameUr` (facet-ready)
- ✅ Phase 0 web foundation: `BrowserRouter` + `vercel.json` rewrites + old-hash compat, singlefile plugin dropped (split assets), `fuse.js` installed
- ✅ Phase 1 catalog depth: product pages `/catalog/:cat/:id` (gallery, breadcrumbs, related, sticky mobile CTA bar), wishlist → one-WhatsApp-message (`/wishlist`, navbar badge, card hearts), suggest-as-you-type overlay (plants + collections + WhatsApp fallback, keyboard navigable), Identify→catalog stock links (`lib/matchPlant`), same-page hash sync
- ✅ Gallery data pipeline rebuilt around two hand-maintained catalogs (`scripts/photo-catalog.json`, `photo-catalog-local.json`) + a dependency-free JPEG header parser (`scripts/image-meta.mjs`) for true width/height/bytes — the old sync read `product_long` from a manifest that no longer had it, so it wrote `title = ''` for 150 of 180 rows and hardcoded `900x1600`/`0 bytes`
- ✅ Gallery name plates: title / local Pakistani name (Rose → Ghulab) / description, plus `name_local` column + index, local-name search, and the local name in the WhatsApp enquiry
- ✅ Taxonomy normalised to one vocabulary — batches used `outdoor`/`indoor`/`flowering` while the rest used `Foliage`/`Flowering Plant`, producing duplicate-looking filter pills; `Garden Decor` disambiguated from a `Garden Accessories` category
- ✅ Verification gate: `scripts/mark-verified.mjs` audit trail + `visible = false` for unverified rows. Added after AGN-0099 shipped as "Palm Tree" but was raspberries

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
