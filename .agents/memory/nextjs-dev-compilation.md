---
name: Next.js development compilation in Replit
description: Distinguishing a ready listener from a working preview, and the verified default-bundler fallback.
---

Use Next.js's standard development bundler unless a Turbopack change is verified against the proxied homepage, not merely the console's Ready message.

**Why:** Turbopack reported Ready but stalled compiling the root route through two managed-workflow health-check deadlines. The production build passed, and default Webpack development subsequently served the homepage successfully on the same port.

**How to apply:** When logs stop at root compilation with no application error, investigate the development compiler before repeatedly increasing timeouts or changing port mappings. Reconsider after framework upgrades, but require a successful proxied page response.

The capture browser uses a local proxy hostname rather than the public development hostname.

**Why:** A successful screenshot still logged blocked HMR requests when the development origin allowlist omitted the local capture host.

**How to apply:** Include the specific local proxy hosts in the development-only allowlist; do not broaden production CORS or disable production origin checks.
