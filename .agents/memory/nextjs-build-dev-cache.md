---
name: Next.js build-to-dev cache
description: Avoid a Turbopack development-server failure after a production build.
---

When switching from a production `next build` back to the Aadit Technologies Turbopack development workflow, clear the generated `.next` directory before restarting the workflow. The development output uses `.next-dev`; if new page sections are missing from the HTML even though updated shared data is visible, clear `.next-dev` before restarting too.

**Why:** In this environment, a generated prerender manifest can be left in a state that Turbopack fails to parse. The preview then returns 500 responses for dynamic pages, sitemap, and image routes even though the production build succeeded. Tracked development build output may also contain stale compiled page components while newer data imports appear updated, masking the problem with a 200 response.

**How to apply:** After a production build that is followed by a development-workflow restart, remove only generated `.next`, then restart the existing Next.js workflow. If a route renders stale page structure, clear generated `.next-dev` and restart once. Compare the HTML, not just HTTP status. Do not commit dev-cache churn; restore generated tracked files once source verification is done.