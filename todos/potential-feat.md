# Potential Features for Ajmal Garden

**Purpose** – give the site real business‑value: calendars, bulk quotes, care reminders, etc.  All work in the current Vite/React stacks, using Supabase for data and WhatsApp for engagement.

---

1. **Seasonal Plant Calendar** – `calendar` page that lists monthly “what to plant” for Sialkot.  Supabase table `seasonal_tasks(month, task_ur, task_en)`.  Optionally a push or WhatsApp broadcast.

2. **Plant Doctor** – Extend the existing Plant Finder (`Identify.tsx`).  After the image is identified, add a second step: “Is my plant sick?” → submit 2 photos → Gemini prompt for diagnosis + care recommendation.  WhatsApp hand‑off with pre‑filled message.

3. **My Garden Locker + WhatsApp Reminders** – Users can add purchased plants to a virtual locker.  System sends automatic water/fertilizer reminders via WhatsApp, leveraging `sessionStorage` + Supabase `user_plants`.

4. **Bulk / Landscaper Quote Builder** – A calculator that takes required hedge/tree length → quantity, soil bags, labor estimate → instant estimate → WhatsApp link.  Uses existing `showBulkTable:true` and future `/admin` capability.

5. **Live In‑Stock Checker** – Simple stock flag per product (in `catalog.ts`).  Visitor sees “In stock / Low / Ask WhatsApp” and can tap to send a message.

6. **QR‑Enabled Care Cards** – Each product gets a digital care card with Urdu + English instructions.  QR codes are printed on packs and link to `/products#id`.

7. **Wedding / Event Green Decor Packages** – Fixed packages (e.g., 20 ft green wall, 10 entry pots).  Date picker → WhatsApp booking.  Use existing video gallery as proof‑point.

8. **Bonsai & Collectors Club** – Gated page offering exclusive styling demos, a pay‑per‑month subscription.  No cart – WhatsApp quote.

9. **Home Garden Setup Booking** – “We come, we plant” service: choose location, view plants, slot booking → quote via WhatsApp.  Uses map embed in `site.ts`.

10. **Sialkot Gardens Showcase + Reviews** – User‑submitted photo gallery from harvested plants.  Admin approves → public gallery, SEO boost.

---

**Next Steps** – Prioritize #5 + #4 for immediate ROI (in‑stock visibility & bulk quotes).  Then #2/#3 build retention.  All rely solely on existing tech stack, no WP migration.
