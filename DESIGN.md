# DESIGN.md — Ajmal Garden Nursery brand specification

> Single source of visual truth for this project (Stripe/Linear/Vercel-style spec).
> Every UI change must comply. Tokens live in `src/index.css` (`@theme`); values below mirror it.

## Brand

Ajmal Garden Nursery — Sialkot, since 1958. Marketing-only catalog site: every
purchase action resolves to **WhatsApp / Call / Get a Quote**. No cart, no checkout, ever.

## Typography

- Display: **Fraunces** (`font-display`) — heroes, section titles, prices. Tight tracking.
- Body/UI: **Inter** (`font-sans`) — everything else.
- Locked scale: hero `32px mobile / 56px desktop`, H2 `26/36`, card titles `17/18`.
  No ad-hoc `text-[…]` sizes — extend the scale instead.
- Urdu (`lang="ur"`): product `nameUr` only for now (names-first i18n). Never let long Urdu strings overflow cards — clamp + ellipsis.

## Color roles (not just swatches)

- **Conversion green `#25D366`** (hover `#1fb959`) — WhatsApp primary CTA only.
- **Terra `#d95f31`** (hover `#c14a24`) — brand accent + tertiary actions (Get a Quote).
- **Marigold `#f5a623`** — highlights, dots, badges only. Never a button fill.
- **Leaf scale** — surfaces + text: bg `cream #faf7f0`, ink `leaf-950 #0f2010` / `leaf-900 #1e3a1e`,
  muted `leaf-800/65`, lines `leaf-100 #e0efdd`, deep sections `leaf-950` / `leaf-900`.
- Full scale: leaf `50 #f2f8f1 · 200 #c2dfbe · 500 #468a41 · 700 #2a5728 · 800 #244623`;
  terra `100 #fae7db · 300 #eca984 · 500 #d95f31 · 700 #a03a20`;
  blossom `100 #fce7eb · 500 #d94a6e`; sage `50 #f4f6f1 · 100 #e8ece3`;
  gold `100 #fdeec0 · 400 #e8a317 · 500 #c98708`.

## CTA hierarchy (locked)

1. WhatsApp (solid green, first) · 2. Call (secondary/outline) · 3. Get a Quote (tertiary).
Every CTA calls `track()` from `src/utils/track.ts` with a `source` string.

## Shape, space, motion

- Pills `rounded-full` for buttons/chips; cards `rounded-[20–22px]` mobile / `rounded-3xl` desktop; max content `72rem` (`max-w-6xl`).
- Breakpoints `sm 640 / lg 1024 / xl 1280`. Same hierarchy both canvases; tuned layouts (drawer vs mega-menu, chip rail vs sidebar, stacked vs 2-col, sheet vs dropdown).
- Motion: `.reveal-up` 0.65s entrances, `.card-lift` hover `-3px`; ALL gated behind `prefers-reduced-motion`.
- Decorative: `.blob` organic shapes, `.leaf-texture` dot grids, `.glass` frosted cards. Season sparingly.

## States & fallbacks (non-negotiable)

- Images: `ProductThumb` cascade (photo → category photo → leaf-icon tile). Never a broken glyph.
- Loading: spinners + "Looking at your photo…" style copy. Errors: WhatsApp handoff always present.
- Empty search: counts + clear + pre-filled WhatsApp ask. 404: garden-themed `NotFound` with funnel intact.
- Focus: visible rings everywhere; 44px min targets on touch; carousel dots are 24px hit-areas with arrow-key support.

## Accessibility baseline

WCAG 2.2 AA intent: contrast-checked text (no 11px uppercase on tints), `aria-pressed`/`aria-current` on toggles, labeled dialogs (`SearchOverlay`), `alt` on all meaningful images, decorative SVGs `aria-hidden`.
