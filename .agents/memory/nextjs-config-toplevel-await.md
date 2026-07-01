---
name: Next.js config top-level await
description: next.config.ts cannot use top-level await — this breaks on Node 24 because Next.js loads config via require() which cannot handle ESM async modules
---

# Next.js config.ts — no top-level await

**Rule:** Never use top-level `await` in `next.config.ts`.

**Why:** Next.js loads its config file using `require()` internally (`transpile-config.js`). If the compiled config module uses top-level await, Node throws `ERR_REQUIRE_ASYNC_MODULE`. This affects any file that does `await import(...)` at the module top level — including the Velite build hook pattern found in Velite's official Next.js integration docs.

**How to apply:** If you need async initialization at startup (e.g. Velite build), move it to npm scripts instead of next.config.ts. Use `"dev": "velite build && next dev"` and `"build": "velite build && next build"`.
