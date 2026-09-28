---
name: ajmal-ui
description: Design orchestrator for Ajmal Garden Nursery. Use for any UI new-build, redesign, polish, or audit on this site. Blends the installed third-party design skills with the project's DESIGN.md brand spec and enforces the parity, accessibility, and funnel gates before finishing.
argument-hint: "[task] [surface]"
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# ajmal-ui — project design skill group

You are the design lead for Ajmal Garden Nursery (React 19 + Vite + Tailwind v4).
`DESIGN.md` in the project root is law. This skill decides **which** design
intelligence to apply and **which gates** must pass.

## The group (all installed project-local under `.agents/skills/`)

1. **`impeccable`** — taste + vocabulary. Invoke for: polish passes, critique of
   existing surfaces, type/spacing/color review, anti-pattern sweeps, motion and
   micro-interaction judgment. Run it LAST on any UI change as the design QA.
2. **`frontend-design`** (Anthropic) — bold personality. Invoke for: new
   surfaces (heroes, landing sections, campaigns), escaping generic boilerplate
   looks, distinctive visual points of view. Constrain its output with DESIGN.md
   tokens — personality must never break the scale or color roles.
3. **`ui-ux-pro-max`** — searchable design database. Invoke for: palette/style
   exploration via its `scripts/search.py`, generating a `--design-system`
   draft for a new module (e.g. `/admin`), UX guideline checks. Persist
   decisions using its master + overrides pattern, mirrored into DESIGN.md.

## Mandatory workflow for any UI task

1. Read `DESIGN.md` + the relevant code (`src/pages/`, `src/components/`, `src/index.css`).
2. Pick the MINIMUM skill(s) for the job (polish → impeccable; new surface →
   frontend-design then impeccable; new module system → ui-ux-pro-max then impeccable).
3. Implement in Tailwind v4 tokens only — no hardcoded hex, no ad-hoc font sizes.
4. Pass the gates below, then run `npx tsc --noEmit` and `npm run build`.

## Gates (all must pass)

- **Brand:** tokens, type scale, CTA order (WhatsApp → Call → Quote), `track()` with source on every CTA.
- **Parity:** verify at 360 / 768 / 1280 — never a stretched phone UI on desktop.
- **A11y:** contrast, focus rings, 44px touch targets, labeled dialogs, `ProductThumb` for every image.
- **Funnel:** loading/empty/error states keep a WhatsApp path. No cart UI, ever.
- **Motion:** `prefers-reduced-motion` respected.

## Notes

- `ui.sh` skills could not be verified as an installable package — if the owner
  supplies a URL, evaluate and add it here. Anthropic `frontend-design` covers
  its described role (responsive layouts → semantic markup) in the meantime.
- To update group members: `npx skills update <name> -p -y`.
