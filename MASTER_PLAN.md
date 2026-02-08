git# MASTER_PLAN — Portfolio Next Iteration

## Project Goal

Build the next iteration of the Bogdan Bărbulescu portfolio: a polished, accessible, and content-ready single-page application that showcases projects, learning resources, and blog articles for a network engineer and security enthusiast. The app remains a static SPA deployable to GitHub Pages (React + Vite + HashRouter + Tailwind).

## User Personas

1. **Recruiters / hiring managers** — Need quick scan of skills, certifications, and projects; clear contact and professional links.
2. **Peers (infosec, networking)** — Interested in blog and learning resources; expect clear navigation and readable technical content.
3. **Learners** — Use the Learning hub by topic; expect consistent structure and empty states that set expectations.

## UI/UX Guidelines

- **Color palette:** Accent `#c9a227` (gold), accent-hover `#d4af37`. Surface light `#fafafa`, surface dark `#0a0a0a`. Card light `#ffffff`, card dark `#141414`. Use gray scale for text and borders. Learning layout may keep slate/emerald for differentiation.
- **Typography:** Display/headings: DM Sans. Body: Inter. Code/technical: JetBrains Mono. Preserve existing scale (display-lg/md/sm, section, card-title, body, small, eyebrow).
- **Layout:** Container `container mx-auto px-4`; sections `py-16 md:py-20`; content max-width `max-w-prose` / `max-w-3xl` where appropriate. Grids: 1 col mobile, 2–3 cols from md up. New components (toasts, forms) must use accent for primary actions and existing focus ring tokens.
- **Motion:** Prefer existing `fade-in-up` / `fade-in`; respect `prefers-reduced-motion` for any new motion.
- **Accessibility:** Maintain skip link, focus management, and aria attributes. New feedback (toasts, errors) must be announced (live regions or equivalent).

**Design tokens reference:** See [docs/design-tokens.md](docs/design-tokens.md) for the full token list (colors, typography, spacing, buttons). Implementation: `tailwind.config.js` and `src/components/ui/tokens.ts`.

## Roadmap (by Agent)

### Agent UI (The Designer)
- [x] Document design tokens (colors, fonts, spacing) in one place (e.g. tailwind.config.js + short README or MASTER_PLAN section).
- [x] Ensure all pages share the same Section/Card/button patterns; fix any layout outliers.
- [x] Add or define a toast/notification container (structure only; UX/Dev will wire).
- [x] Review responsive breakpoints (navbar, grids, Learning layout) and fix overflow or touch targets.

### Agent UX (The Flow Master)
- [x] Add scroll-to-top on route change (e.g. in Layout or a small effect).
- [x] Introduce a minimal error boundary at app or layout level with fallback UI and optional retry.
- [x] Add optional toast or inline feedback for errors (e.g. fetch failure) where appropriate.
- [x] Consider breadcrumbs for Blog (Blog → Article) and Learning (Projects → Topic → Resource).
- [x] Optional: add "Learning" to main nav (or keep single entry via Projects; document decision).

### Agent Content (The Copywriter)
- [x] Audit and tighten Home hero and About intro; ensure tone is consistent.
- [x] Differentiate blog entry descriptions in blog-data.json (no generic duplicates).
- [x] Write short empty-state copy for Learning topics that have no resources yet.
- [x] Propose meta descriptions for main pages (Home, About, Projects, Blog) for SEO.

### Agent Dev (The Builder)
- [x] Implement scroll-to-top and error boundary.
- [x] Wire toast/feedback component and use for fetch errors or retry success.
- [x] Add per-page meta (description, optional OG) via React Helmet or similar, or document in index + route meta.
- [x] Implement breadcrumbs (if in scope) and any nav change from UX.
- [x] Optional: add a simple contact form or mailto/contact link and ensure Contact section is consistent.
- [x] Run build and fix any regressions; confirm deploy workflow still works.
