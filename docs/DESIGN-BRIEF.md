# PERFECT DESIGN BRIEF — Ajmal Garden Nursery (ajmalgarden.com)

## THE ESSENCE (Read This First)
Ajmal Garden Nursery is not a store. It is a 67-year-old living nursery in Sialkot, Pakistan — a place where customers walk through rows of real plants, order by what they see, and talk directly to the owner. The website's job is to make a stranger feel like they just stepped onto the nursery bench. No stock imagery. No generic e-commerce patterns. No "add to cart." Just trust, beauty, and the sound of a phone call or WhatsApp message.

The design must feel like a slow walk through a well-tended garden at golden hour: warm, precise, unhurried, confident. The nursery's own video is the hero — the site wraps around it like a frame around a painting.

---

## WHAT THE BUSINESS IS
- **Name:** Ajmal Garden Nursery (Sialkot, Pakistan — since 1958)
- **Type:** Marketing-only nursery site (no checkout, no cart, no accounts)
- **How customers order:** They visit, call (+92-300-612-1225), or WhatsApp. They describe what they want. Prices are hidden by design (`showPrices: false`).
- **Inventory:** 158 verified live plant photos (each named and described). 22 archived. Photos publish only via direct observation (`__observed: true`) — never guessed.
- **Collections:** Rare Exotics, Ornamental Plants, Flowering Plants, Indoor Plants, Outdoor Plants, Medicinal Plants, Fruit Plants, Succulents, Bonsai, Topiary, Seasonal Plants.

---

## THE TECHNICAL CANVAS (Don't Break These)
- Stack: React 19 + Vite 7 + Tailwind 4 + TypeScript
- Design system: Custom tokens defined in `tailwind.config` (leaves, marigold, terra, sage palette)
- Images: Served via Cloudinary (`egagzfgg`) — already configured for responsive delivery
- Video: Hero background video served via Cloudinary (`f_auto,q_auto,w_1280`) — 54MB source transcoded to ~7MB, never in repo
- Font: Use `font-display` (the custom serif/display font already wired) for headlines; clean sans-serif for body
- Mobile-first: Every design decision must work at 375px width before it works at 1440px
- No horizontal scroll ever — this is a hard gate

---

## VISUAL DIRECTION (The Vibe)

### Color World
Don't use generic "green." Use the project's actual palette:
- `leaves` (deep botanical green) — primary dark surfaces
- `marigold` (warm golden yellow) — highlights, accents, the warm afternoon light
- `terra` (earth/clay) — secondary text, borders, grounding
- `sage` (soft muted green) — backgrounds, calm surfaces
- White — clean breath between elements

The site should feel like it was designed on a bench at the nursery — not in a dark office with a generic UI kit.

### Typography Mood
- Headlines (`font-display`): Large, tight tracking (`tracking-tight`), slightly compressed (`leading-[0.95]`). They should feel like they were letter-spaced by hand for a sign at the nursery gate.
- Body: Relaxed line-height (`leading-relaxed`), never cramped. Reading the site should feel like reading a well-printed plant catalog.
- Labels (`eyebrow` / `kicker`): Small caps (`uppercase tracking-[0.16em]`), hairline rules, generous whitespace. Never loud.

### Photography Philosophy
Every image is real. Every photo has a verified title. Never invent a caption. The gallery is a verification system as much as it is a visual feature. Design the gallery so the photo is the hero — text supports, never competes.

---

## THE CURRENT STATE (What Exists — Build On This, Don't Replace It Blindly)

### Hero Section
- Full-width background video (nursery tour, transcoded via Cloudinary)
- Dark gradient overlay (heavier at bottom for text readability)
- Editorial typography: hairline kicker, large headline, sub-copy
- Two CTAs: WhatsApp (primary green pill) + Call (outline/secondary)
- Hours line and "no store" note
- Mobile: the two CTAs are combined into a single sliced button — Call (full-width) + WhatsApp icon (fixed green section), inline with more spacing above

### Gallery Marquee (Live)
- Two rows of cards, opposite directions, slow drift (256s / 312s cycles)
- 158 verified photos, reshuffled per page load
- Cards: image + gradient caption overlay (name + local name only on mobile; full 3 lines on desktop)
- Touch: draggable (not just hover-paused) — drag moves the strip, release resumes with fade
- Respects `prefers-reduced-motion`
- Only image-ready cards appear (no empty tiles)

### Gallery Page
- Masonry-style grid with lightbox
- Filter/search by plant name
- Mobile: only name + local name in tile; description lives in lightbox
- `alt` text carries the description (not the title — this is a verified design decision)

### Navigation / Header
- Clean header with navigation, logo, mobile hamburger
- Title `whitespace-nowrap` overlap fix (repeated tagline hidden below `sm`)

### Trust Strip
- Horizontal strip of trust indicators: plants count, advice, bulk orders, delivery — with small icon markers

---

## DESIGN OPPORTUNITIES (Where You Can Make It Better)

### 1. Hero — Make It Feel Like a Place, Not a Template
The current hero works functionally but could become unforgettable:
- The video background is good. Keep it. Don't replace it with a static photo.
- The typography is solid. Consider a slightly more dramatic scale jump between the `eyebrow` (small caps with hairline) and the headline — maybe the eyebrow floats slightly left of the headline alignment.
- The gradient overlay: consider making the bottom heavier (`from-leaf-950/85` to `via-transparent`) so text always sits on the darkest part of the video, regardless of what's playing.
- The eyebrow pill (`rounded-full bg-white/12`) was removed in favor of hairline + small caps. This was a good decision. Keep it. It reads as editorial, not UI-widget.
- The WhatsApp circle button (mobile) should stay green (`#25D366`) — don't change this to the brand green. It's a functional color that signals "this is WhatsApp."
- Consider very subtle decorative elements: a blurred marigold glow (`bg-marigold/20 blur-3xl`) positioned off-center — this is already present and works. Don't overdo it.

### 2. The Marquee — It Should Feel Alive, Not Mechanical
Current: two rows, opposite directions, reshuffled per load.
- The cards don't have borders or heavy shadows — this is correct. They float on the sage background.
- The caption gradient (`from-leaf-950/85 to-transparent`) is correct. Don't darken it too much or you'll lose the photo.
- The drag interaction is the key innovation. Don't break it. The user must feel the strip respond to their finger. On release, it should fade out, resume, and fade back in — exactly as it does now.
- Consider a very subtle shadow or ring (`ring-1 ring-leaf-900/5`) on cards only when the user hovers (desktop) or touches (mobile). Not always visible — only on interaction.

### 3. Gallery — Make Verification Visible
Every verified photo has `__observed: true`. This is not just a database flag — it's a trust signal.
- Consider a very small verified marker (a tiny leaf or dot) on verified cards in the gallery grid.
- The archive (22 removed photos) exists with reasons documented in `ext-src/trash/archived/README.md`. This transparency is part of the brand story — the site doesn't hide that it removes bad photos.
- Don't add a "verified" filter toggle unless it genuinely helps the user. The gallery is already filtered by the verification gate (`sync-gallery-media.mjs`).

### 4. Typography — Let It Breathe
- The headline uses `bg-clip-text text-transparent` with a gradient (`from-marigold via-[#f8c45a] to-marigold`). This is working well.
- Consider reducing the headline tracking slightly (`tracking-tight` is fine) and letting the `font-display` serifs do the work.
- The sub-copy (`text-leaf-50/90`) should stay light against the dark video background. Don't darken it — the contrast is enough.

### 5. The Color System — Trust It
The palette exists for a reason:
- `leaves`: The nursery itself — deep, confident, not trendy
- `marigold`: The sun, the warmth, the owner's presence
- `terra`: The earth, the pots, the hands that touch plants
- `sage`: Rest, calm, the background between actions

Don't add new colors unless they serve a specific purpose (e.g., a danger/error color for form validation, which this site currently doesn't need).

---

## WHAT NOT TO DO (Based on What We've Learned)

### Don't:
- Replace the hero video with a static photo
- Add a carousel slider (the marquee is the live gallery — a carousel would compete)
- Change the WhatsApp button to the brand green (keep it `#25D366` — it's a functional signal)
- Add borders or heavy shadows to gallery cards (they float — don't weigh them down)
- Break the drag interaction on the marquee
- Change `alt` text back to titles (descriptions belong in `alt` — this was a verified fix)
- Add `VITE_GEMINI_API_KEY` to any environment (Gemini lives as a Supabase secret behind the relay)
- Add a cart, checkout, accounts, or price display (marketing-only mandate)
- Compress the hero video below the Cloudinary `f_auto,q_auto` settings (currently ~7MB at 720p, which is acceptable)

---

## WHAT A GREAT DESIGN LOOKS LIKE FOR THIS SITE

Imagine walking into the nursery at 6 PM. The light is golden. The owner is watering plants. There's no loud music, no neon signs — just the sound of water, the smell of soil, and the feeling that something real is growing.

The website should feel exactly like that.

- **Above the fold:** The video plays quietly. The text floats over it like a handwritten sign. The WhatsApp button says "this is how you talk to a real person." The Call button says "this is direct."
- **As you scroll:** The gallery moves slowly — not mechanically, but like plants in a light breeze. Each card shows a real photo with its real name.
- **Deep in the site:** The verification system is invisible to casual users but present as trust — the archive notes explain why photos are removed, the catalog is regenerated only from observed photos.
- **Every interaction:** Touch-drag works. The marquee pauses gently. The lightbox opens smoothly. Nothing jumps.
- **Every device:** Mobile first. The sliced CTA button (Call + WhatsApp) must work. The typography must stay readable. The video poster must stay visible until the video actually plays.

---

## DESIGN TASKS YOU CAN TAKE (Without Breaking Anything)

1. **Refine the hero typography scale** — adjust tracking, line-height, or the gradient highlight slightly for more drama
2. **Add subtle decorative motion** — the green wave animation on the Call button is a good start; consider very subtle parallax or gradient shifts on scroll for the hero background
3. **Polish mobile spacing** — the `pb-12` (half-padding) on mobile hero and the `mt-9` spacing above CTAs needs to feel right across screen sizes
4. **Gallery card refinements** — subtle hover states, better caption gradients, or very light ring borders on interaction
5. **Typography pairing** — ensure `font-display` (serif) headlines pair beautifully with clean sans-serif body text
6. **Accessibility audit** — verify the `aria-label` on the WhatsApp circle, the `prefers-reduced-motion` behavior, and the drag interaction accessibility
7. **Color consistency** — verify every color token (`leaves`, `marigold`, `terra`, `sage`) is used consistently and never replaced with arbitrary hex codes

---

## FINAL NOTE

This is not a generic e-commerce site. It is a digital version of a real place that has existed since 1958. Every design decision — from the video poster staying visible until the video plays, to the drag interaction on the marquee, to the archive notes explaining photo removals — exists because it serves the reality of the nursery, not the abstraction of "a business."

Make it beautiful. Make it slow. Make it feel like you just walked through the gate.
