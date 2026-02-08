# Design Tokens

Single source of reference for colors, typography, and layout. Implementation lives in `tailwind.config.js` and `src/components/ui/tokens.ts`.

## Colors

| Token | Value | Usage |
|-------|--------|--------|
| `accent` | `#c9a227` | Primary actions, links, active states |
| `accent-hover` | `#d4af37` | Hover state for accent |
| `surface-light` | `#fafafa` | Page background (light) |
| `surface-dark` | `#0a0a0a` | Page background (dark) |
| `surface-card-light` | `#ffffff` | Card background (light) |
| `surface-card-dark` | `#141414` | Card background (dark) |

Use Tailwind gray scale for text and borders (`gray-900`, `gray-600`, etc.). Learning layout uses `slate-900` and `emerald-500` for differentiation.

## Typography

| Token | Font stack | Usage |
|-------|------------|--------|
| `font-display` | DM Sans, Inter, system-ui | Headings |
| `font-sans` | Inter, system-ui | Body text |
| `font-mono` | JetBrains Mono | Code, technical content |

### Font sizes (Tailwind)

- `text-display-lg` — 2.5rem, hero
- `text-display-md` — 2rem, page titles
- `text-display-sm` — 1.5rem
- `text-section` — 1.875rem, section titles
- `text-card-title` — 1.125rem, card titles
- `text-body` — 1rem
- `text-small` — 0.875rem
- `text-eyebrow` — 0.75rem, uppercase labels

## Spacing & layout

- **Container:** `container mx-auto px-4`
- **Section vertical:** `py-16 md:py-20`
- **Content max-width:** `max-w-prose` (text), `max-w-3xl` (articles), `max-w-4xl` / `max-w-5xl` (learning)
- **Grids:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for cards/lists

## Buttons (tokens.ts)

- `accentButtonClass` — primary filled button (gold)
- `outlineAccentButtonClass` — secondary outlined button

Both include focus ring (`focus-visible:ring-2 focus-visible:ring-accent`) and dark mode ring-offset.

## Motion

- `animate-fade-in-up` — 0.4s ease-out, translateY(12px) → 0
- `animate-fade-in` — 0.35s opacity
- Respect `prefers-reduced-motion` for any custom motion.
