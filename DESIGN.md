# XB Website Design System

## 1. Visual theme and atmosphere

XB uses a monochrome editorial product language built on shadcn/ui. The site should feel precise, calm, and distinctly software-native: white or near-black canvas, sharp typography, purposeful dividers, real product screenshots, and no decorative gradients, glow, glassmorphism, or cyber motifs.

The visual signature is a large `xb` wordmark paired with cropped product frames and animated typographic rhythm. Art direction comes from composition and motion, not texture or ornamental color.

## 2. Color palette and roles

All colors use shadcn semantic tokens and OKLCH values.

| Token                | Light              | Dark                 | Role                   |
| -------------------- | ------------------ | -------------------- | ---------------------- |
| `--background`       | `oklch(0.99 0 0)`  | `oklch(0.145 0 0)`   | Page canvas            |
| `--foreground`       | `oklch(0.145 0 0)` | `oklch(0.985 0 0)`   | Primary text           |
| `--card`             | `oklch(1 0 0)`     | `oklch(0.205 0 0)`   | Elevated product frame |
| `--muted`            | `oklch(0.97 0 0)`  | `oklch(0.269 0 0)`   | Quiet surface          |
| `--muted-foreground` | `oklch(0.50 0 0)`  | `oklch(0.86 0 0)`    | Secondary text         |
| `--border`           | `oklch(0.90 0 0)`  | `oklch(1 0 0 / 10%)` | Hairline dividers      |
| `--primary`          | `oklch(0.145 0 0)` | `oklch(0.985 0 0)`   | Primary action         |

Color is reserved for semantic errors only. Product screenshots may contain their native colors.

## 3. Typography rules

- Typeface: Geist for Latin UI, followed by PingFang SC and Noto Sans SC for Chinese.
- Display: 56px to 96px, weight 650 to 800, line-height 0.94 to 1.02, tracking `-0.045em` for Latin only.
- Section title: 36px to 56px, weight 650, line-height 1.05.
- Body: 16px to 18px, weight 400, Chinese line-height 1.75.
- Label: 12px to 13px, weight 550, normal case, no terminal-style tracking.
- Dynamic numbers use tabular figures.

## 4. Component styling

- Buttons: shadcn solid primary, outline secondary, 10px radius, 40px minimum height, `scale(0.96)` on press.
- Navigation: solid canvas, one hairline divider after scroll, no blur surface.
- Product frames: 12px radius, one standard border, subtle luminance elevation, no glow.
- Feature rows: cardless content separated with generous spacing; use dividers only for dense repeated rows. Media may sit in a bordered frame.
- FAQ: native disclosure rows with keyboard focus, rotating chevron, and quiet hover fill.
- Theme toggle: icon button with explicit accessible label and light/dark icon crossfade.

## 5. Layout principles

- Container width: 1200px maximum, 24px mobile gutters, 32px desktop gutters.
- Hero: asymmetric two-column composition, copy left and real interface right.
- Section spacing: 96px mobile and 144px desktop, reduced to 72px for compact utility pages.
- Content follows a 12-column desktop grid and a single mobile column.
- Each section has one job and uses whitespace instead of nested cards.

## 6. Depth and elevation

- Level 0: page canvas.
- Level 1: muted background step for grouped information.
- Level 2: product frame using `--card`, one border, and a restrained `0 16px 60px` shadow in light mode.
- Dark mode uses background lightness steps, not dark drop shadows.

## 7. Do and do not

- Do use real XB screenshots as the primary visual evidence.
- Do keep all interactive targets at least 40px.
- Do honor `prefers-reduced-motion`.
- Do use semantic shadcn tokens in every component.
- Do keep the product recognizable within the first viewport.
- Do not use gradients, glow, grid backgrounds, glass blur, or gradient text.
- Do not use terminal comments such as `// feature` as decoration.
- Do not use repeating three-card marketing grids.
- Do not invent screenshots or testimonials.

## 8. Responsive behavior

- Breakpoints follow Tailwind defaults.
- The hero becomes a single column below `lg`, with copy first and product frame second.
- Feature rows become text followed by media on mobile, regardless of desktop alternation.
- Navigation collapses below `md` into an inline disclosure panel.
- Verify at 1280px, 375px, and 320px. Buttons must not overflow or shrink below 40px.

## 9. Agent prompt guide

- Hero: `bg-background`, up to 96px desktop headline at weight 700 and line-height 0.96, `text-foreground`, left aligned, primary button `bg-primary text-primary-foreground`, 10px radius, product frame on the right with `border-border`.
- Feature row: 12-column grid, copy spans 4 columns, media spans 7 columns, 1 column gap, `py-24`, no card around copy, screenshot frame radius 12px.
- Theme toggle: 40px square ghost button, `text-muted-foreground`, hover `bg-muted text-foreground`, sun and moon crossfade with 200ms ease-out.
- Changelog row: border-top only, `py-6`, version and date aligned with tabular figures, body `text-muted-foreground`, no card shadow.
- CTA: monochrome high-contrast block, one primary install action and two quiet secondary links, no gradient background.
