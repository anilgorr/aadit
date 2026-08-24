---
name: Next.js build-to-dev cache
description: Avoid a Turbopack development-server failure after a production build.
---

When switching from a production `next build` back to the Aadit Technologies Turbopack development workflow, clear the generated `.next` directory before restarting the workflow.

**Why:** In this environment, a generated prerender manifest can be left in a state that Turbopack fails to parse. The preview then returns 500 responses for dynamic pages, sitemap, and image routes even though the production build succeeded.

**How to apply:** After a production build that is followed by a development-workflow restart, remove only the generated `.next` cache, then restart the existing Next.js workflow. Do not treat the resulting 500s as source-code failures until the cache has been refreshed.