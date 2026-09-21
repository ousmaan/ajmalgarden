# Todos — Ajmal Garden Live Site

> Scope: product improvements for today. Owner: PM + UI/UX + Dev.
> Status legend: ⬜ not started · 🟡 in progress · ✅ done

---

## Product Risks

- ⬜ No clear CTA hierarchy — users may not know the primary action (browse products vs. contact)
- ⬜ No product filtering/sorting — limits discoverability as catalog grows
- ⬜ No analytics integration — cannot measure conversion or product interest
- ⬜ Contact form lacks validation — risks spam/broken submissions

---

## Immediate Priorities (today)

### 1. Add product category filtering
- ⬜ Decide category taxonomy (plants / trees / supplies / succulents / flowering / indoor / outdoor / bonsai)
- ⬜ Wire filter UI into Products page (chips or dropdown)
- ⬜ Filter ProductCard list by selected category
- ⬜ Preserve filter state on navigation / refresh

### 2. Implement basic analytics
- ⬜ Pick provider: Plausible (privacy-friendly, no cookie) or Google Analytics
- ⬜ Add script tag / tag to `index.html`
- ⬜ Track key events: page views, product click, contact form submit, CTA clicks
- ⬜ Confirm events fire in dev before shipping

### 3. Add form validation and spam protection
- ⬜ Add client-side validation to Contact form (name, email format, message required)
- ⬜ Add honeypot field (hidden spam trap) — never visible to real users
- ⬜ Add server-side validation when `/api/contact` exists
- ⬜ Show success/error feedback after submit

### 4. Define primary vs. secondary CTAs
- ⬜ Agree on primary CTA (e.g. "Browse Products" on Home, "Get a Quote" on product pages)
- ⬜ Agree on secondary CTA (e.g. "Contact Us")
- ⬜ Apply visual hierarchy: primary = filled button, secondary = outline/ghost
- ⬜ Add CTA to Home, Products, and Contact pages
- ⬜ Add tracking for CTA clicks (ties into analytics priority #2)

---

## Other things to do today (from audit)

- ⬜ Add `loading="lazy"` to product images (performance)
- ⬜ Add accessible `alt` text to all images in ProductCard / Gallery
- ⬜ Add loading + error states to Products page API fetch
- ⬜ Add focus-visible styles for keyboard navigation
- ⬜ Add success/error feedback to contact form submission

---

## Out of scope today

- Cart/checkout (not a showcase requirement)
- User accounts / auth
- Code splitting / React Query refactor (Phase 3)
- CI/CD setup