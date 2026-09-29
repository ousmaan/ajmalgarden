# Todos — Ajmal Garden Nursery (blended with locked plan)

> Locked plan: `C:\Users\Usman\.opencode\plan\ajmal-garden-plan.md` — $0 (Vercel + Supabase + Cloudinary),
> owner-only admin, marketing-only (no cart), prices hidden but ready.
> Status: ⬜ todo · 🟡 in progress · ✅ done · →plan = lives in the plan doc

---

## ✅ Photo verification pass (completed 2026-09-30)

**The problem it fixed:** the gallery catalog claimed 180/180 complete while
only ~32 photos had actually been opened. The rest were plausible-sounding
guesses. Proof: **AGN-0099 shipped as "Palm Tree / Khajoor" — the photo is a
punnet of red raspberries.** Wrong error rate: of the 28 photos in one batch,
every guessed title was wrong (0167 "Plastic Nursery Pots" = a red rose, 0095
"Large Tropical Leaves" = a giant jackfruit, 0115 "Concrete Planters" = rows
of topiary).

**Outcome:** all 180 photos opened and identified. 158 published with correct
name plates, 22 archived, 0 outstanding.

### What the pass actually found

- **Topiary is a major part of the nursery** (AGN-0115–0124, ~10 photos of
  standards, lattice-wrapped trunks and overhead views). It was invisible
  behind fabricated "concrete planter" labels. The Home strip and a future
  Bonsai/topiary collection should build on it.
- **A genuinely great asset:** AGN-0101 is a mulberry harvest shot with the
  Ajmal Garden Nursery farm card in frame. Free credibility — consider using it
  as a hero or About image.
- **Shade-house rows** (0106, 0114, 0120, 0121, 0123) show real scale and are
  the honest answer to "what does 68 years of stock look like".

### Archived (22) — moved to `ext-src/trash/archived/`, reversible

- AGN-0087/0088/0094, 0102 — reposted social-media screenshots, Google Photos
  icon overlays, reference shots
- AGN-0099/0100/0103/0104 — retail stock fruit, burned-in labels, indoor/hobby
  backgrounds
- AGN-0044/0047–0050/0054–0056/0060 — landscaped street and park trees
- AGN-0105 — unidentified fruit on a wild tree
- AGN-0160 — a selfie of three people, no plant in frame
- AGN-0161 — third-party "Agro Dhaan" brand burned into the pots
- AGN-0162 — two identifiable staff faces published without consent
- AGN-0183 — near-duplicate of AGN-0182

### Policy settled

- **Phone watermarks ("Galaxy A73" / "S24 Ultra") are an accepted mobile
  signature, not a defect** (owner, 2026-09-30). No cropping. Recorded once in
  `photo-catalog.json` `_policy`, not repeated per row.
- **Still flagged per photo:** third-party branding, identifiable faces without
  consent, duplicates, and crops that cut a subject badly. Those get archived
  or noted, never silently published.

### Guardrails so it cannot regress

- `scripts/apply-observations.mjs` — writes name plates only from an
  observation record. An empty title is accepted but leaves the photo
  unpublished, so "I looked and I don't know" never becomes a name plate.
- `scripts/archive-photos.mjs` — moves files to trash and records the reason.
- `scripts/mark-verified.mjs` — derives the verdict from the catalog, not a
  hand-typed ID list, and reports archived / not-our-stock / to-check separately.
  Ignores `_`-prefixed documentation keys.
- `scripts/verify-gallery-tiles.mjs` — runs inside the sync and fails it if a
  Home tile's photo is uncatalogued, unuploaded, or in a different category than
  it links to. Note: it checks catalog-internal consistency only; it cannot see
  whether a photo matches its title. Observation is the only real safeguard.

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
