---
name: Aadit Technologies project
description: Key facts about the aadit-tech Next.js app — location, workflow, stack, and Replit artifact status
---

# Aadit Technologies — Project Facts

**Location:** `artifacts/aadit-tech/`
**Package name:** `@workspace/aadit-tech`
**Workflow name:** `Aadit Technologies` (port 3000)
**Replit artifact status:** NOT registered as a Replit artifact (no artifact.toml with ID) — `createArtifact` doesn't support Next.js type; `verifyAndReplaceArtifactToml` requires an existing file to replace.

**Stack:**
- Next.js 15, App Router, TypeScript 5.9
- Tailwind CSS v4 (PostCSS via `@tailwindcss/postcss`)
- shadcn/ui (components.json configured, `pnpm dlx shadcn@latest add` ready)
- Velite 0.2.x for MDX collections (`services` and `posts`)
- ESLint 9 flat config, Prettier with tailwindcss plugin

**Design system components built:**
- `components/header.tsx` — mega-menu, keyboard accessible, mobile hamburger
- `components/footer.tsx` — 6-column layout
- `components/logo-cloud.tsx` — auto-scrolling
- `components/testimonial-carousel.tsx`
- `components/service-page-template.tsx` — reusable layout for all service pages
- `components/ui/button.tsx`, `card.tsx`, `section.tsx`, `breadcrumbs.tsx`, `badge.tsx`, `stat-block.tsx`, `accordion.tsx`

**Color scheme:** Electric blue accent (`#2563EB`) + `cyan` highlight, on a mix of light (`#F8FAFC`/white) and dark **`midnight`** sections. All tokens are OKLCH CSS variables in `styles/globals.css` (`--color-midnight`, `--color-midnight-2`, `--color-cyan`, radius `0.75rem`), plus utilities: `grid-lines`, `mask-radial`, `glow-blob`, `text-gradient`, `btn-glow`, `card-lift`, `radar-ring`, and keyframes drift/fade-up/pulse-ring/marquee.

**Design direction (IMPORTANT — reverses earlier constraint):** The site now uses dark "command-center" sections (hero, CTA, footer) with a glass Threat-Monitor console, alternating with light content sections. The earlier "all-light / no dark backgrounds" rule is **obsolete** — depth/contrast is now wanted.

**Brand assets:** real logo added at `public/logo.png` (blue, transparent, for light bg — used in header), `public/logo-white.png` (for dark footer), `public/favicon.png`, and `app/icon.png` (Next.js auto favicon). Use `next/image` with `h-9 w-auto`; keep width/height props at true ratios (logo.png 2.25:1, logo-white.png 2.46:1) to avoid distortion.

**Accessibility notes:** header dropdowns are keyboard-accessible (click toggle + `onFocus` open + group `onBlur` close + `Escape`); all class-based animations (incl. `radar-ring`, `animate-marquee`) are disabled under `prefers-reduced-motion`; dark-section body text uses `white/70`+ for AA contrast. Button primitive has NO `asChild` (plain `<button>`). Lighthouse a11y was 86 — fixed by: every icon-only control (carousel arrows/dots, footer social links) needs an `aria-label`; repeated links with identical text ("Learn More") need per-item `aria-label` to disambiguate; touch targets need ≥24px hit area (dots wrap an 8px span in an h-6 w-6 button). Keep these conventions when adding new icon controls.

**Dev config:** `next.config.ts` sets `allowedDevOrigins: ['*.replit.dev', '*.repl.co']` (silences Replit proxy cross-origin dev warning). Must NOT use top-level await (see `nextjs-config-toplevel-await.md`).

**Velite integration:** `velite build` runs before `next dev` and `next build` via npm scripts (see `velite-nextjs-integration.md`).
