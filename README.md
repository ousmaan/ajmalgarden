# Ajmal Garden Nursery website

A lightweight, responsive multi-page showcase site for **Ajmal Garden Nursery, Sialkot**. It intentionally has no cart, checkout, payments, delivery claims, or online order flow: all enquiries lead to a direct call or WhatsApp conversation.

## Run locally

```bash
npm run dev
```

The site is static and will be available at `http://localhost:5173`.

## Pages

- `index.html` — home, plant category preview, local vlogger video gallery, map preview
- `about.html` — legacy story and specialist knowledge
- `products.html` — seven-category living catalogue
- `contact.html` — map, two direct phone contacts, directions and a WhatsApp enquiry helper

## Launch hand-off

### Official logo

The header/footer currently use `assets/images/logo-placeholder.svg` as a clearly marked temporary brand mark. Once the official logo is uploaded, either:

1. replace that file while keeping its filename, or
2. update the `src="assets/images/logo-placeholder.svg"` references in the four HTML pages.

### Photography

All current imagery is local, high-quality placeholder imagery in `assets/images/`. Every `<img>` in the HTML has a `<!-- PLACEHOLDER: ... -->` comment directly above it so real Ajmal Garden photography can be swapped in easily.

### Maps and videos

- Every **Get directions** link uses the owner-provided Google Maps pin: `https://maps.app.goo.gl/j2sW11SwMc1kwFyA6`
- The map iframes use a readable address search query. If a Google Maps Embed URL is later generated from the exact pin, it can replace the iframe `src` values in `index.html` and `contact.html`.
- YouTube embeds are all `loading="lazy"`. Add, remove, or reorder the four video cards in the Home/About pages when the selected vlogger list changes.

## Business contact details in use

- **Main / WhatsApp:** Malik Imran — `0300 612 1225`
- **Also available:** Malik Afzaal — `0300 712 3618`
- **Hours:** 6:00 AM – 8:00 PM, 7 days a week
- **Socials:** Facebook and Instagram links supplied by the nursery owner
