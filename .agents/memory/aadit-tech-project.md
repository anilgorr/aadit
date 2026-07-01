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

**Color scheme:** Electric blue accent (`#2563EB`), white/`#F8FAFC` backgrounds, slate headings — defined via OKLCH CSS variables in `styles/globals.css`.

**Velite integration:** `velite build` runs before `next dev` and `next build` via npm scripts (see `velite-nextjs-integration.md`).
