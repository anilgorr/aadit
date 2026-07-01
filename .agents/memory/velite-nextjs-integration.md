---
name: Velite + Next.js integration
description: How to wire Velite content builds into a Next.js 15 project without breaking next.config.ts
---

# Velite + Next.js 15 Integration

**Rule:** Run Velite via npm scripts, not inside `next.config.ts`.

**Why:** The top-level-await approach in Velite's official Next.js docs breaks on Next.js 15 / Node 24 because Next.js loads config via `require()`. See `nextjs-config-toplevel-await.md`.

**How to apply:**

```json
"scripts": {
  "dev": "velite build && next dev --turbopack",
  "build": "velite build && next build",
  "velite": "velite build"
}
```

Velite outputs to `.velite/` (gitignored). Content changes during dev require manually re-running `pnpm velite` (or adding `concurrently` with `velite build --watch` + `next dev` for live reloading).

**Project location:** `artifacts/aadit-tech/velite.config.ts` defines `services` and `posts` collections.
