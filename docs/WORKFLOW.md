# Team Workflow — Reino Natural Landing

This document defines how the two developers on this project work together: branch model,
task ownership, and collaboration rules. It is the single source of truth for process.

## Project References

- `Alcance Técnico - Versión Profesional (Reino Natural).pdf` — client-signed technical
  scope (19 modules, Professional package).
- `especificacion_landing_senderismo_thalex.md` — original technical specification.

> **Pending decision:** the PDF lists a standard contact form as in-scope, but the owner
> later decided on WhatsApp-only contact (form, email field, and validation were already
> removed from `Contact.astro`). The owner must confirm which one rules before the
> contact module is touched.

## Branch Model (Simplified Git Flow)

| Branch   | Role                                                                 |
| -------- | -------------------------------------------------------------------- |
| `main`   | Production. Only updated via PR from `develop` + version tag `v*`.   |
| `develop`| Integration. All day-to-day work lands here.                         |
| `feat/*` | New work. Always branch off `develop`, die into `develop` via PR.    |
| `fix/*`  | Small fixes. Same lifecycle as `feat/*`.                             |
| `hotfix/*`| Branch off `main`, tag `v*`, then back-merge into `develop`.        |

Rules:

1. Never push directly to `main`. Production releases are tags on `main` (`v1.0.0`, …).
2. Never branch new work off `main` — everything new comes out of `develop`.
3. Merge into `develop` only via PR reviewed by the other developer. Always.
4. `develop` → `main` promotion happens as a deliberate release PR with a version tag.

## Work Split (By Section Ownership)

We split vertically (full ownership of sections), not by layer. Nobody "does all the
markup" or "all the animations" — that maximizes merge conflicts and minimizes ownership.

### Dev 1 — Base + Route Catalog

- Navbar with anchor links, Hero + CTAs (conversion-oriented hierarchy)
- Destinations / mountains catalog, detailed mountain view
- Routes by level (4 categories), Explored routes
- Global design tokens and base styles (first PR: `global.css`, palette, typography)

### Dev 2 — Institutional + Contact + Media

- About + values, Track record, Activities, Places visited
- Staff (group presentation — no per-person animation, per the scope PDF)
- Gear rental, WhatsApp + social links, Galleries
- Contact module (blocked on the pending form-vs-WhatsApp decision)

## Collaboration Rules

1. **Design tokens are frozen after the first base PR.** Changes to `global.css`,
   palette, or typography require a heads-up in the PR description, not a silent edit.
2. **Small PRs.** One section per `feat/*` branch, two related sections maximum.
3. **The other developer reviews every PR before merge.** No self-merges.
4. **Client material placeholder convention.** Until photos/texts arrive, use the
   existing `PhotoPlaceholder` component with agreed aspect ratios. Do not invent
   per-section placeholder styles.
5. **Package manager: `pnpm` only.** `npm` is prohibited in this project.
6. **Section files are the ownership boundary.** If you need to edit a component owned
   by the other dev, ask in the PR or open an issue — do not quietly fork their layout.

## Definition of Done (per section)

- Responsive: desktop, tablet, mobile
- Anchor link from navbar works (if applicable)
- Subtle animations only (no advanced microinteractions — per scope)
- Placeholder content ready to be swapped for client material
- Reviewed and merged to `develop` by the other developer
