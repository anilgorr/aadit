---
name: Running Lighthouse in the Replit container
description: How to get Lighthouse working here and how to read its scores
---

# Running Lighthouse in the Replit container

The bare Puppeteer-downloaded Chrome (under `chrome/…/chrome-linux64/chrome`) is missing its
entire system-library chain (glib, nss, atk, cairo, pango, X11, …) and fails with "error while
loading shared libraries" / "Unable to connect to Chrome". Do not try to install those libs
individually. Keep the `chrome/` download out of version control (it is ~hundreds of MB) — it is
local tooling, not product code.

**Working setup:** install self-contained system Chromium via the package-management skill
(`installSystemDependencies(["chromium"])`), then point Lighthouse at that binary. Launch one
headless Chromium with `--remote-debugging-port=NNNN --user-data-dir=/tmp/…` and run several
audits with `lighthouse … --port=NNNN` to reuse the instance (faster than relaunching per page).
The dbus "Failed to connect to the bus" launch errors are harmless.
Flags: `--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage`. Desktop = `--preset=desktop`.

**Always audit a FRESH prod build**, not a stale `.next`. `next start` serves whatever `.next`
exists, so a build that predates your edits makes Lighthouse report old HTML. Rebuild
(`rm -rf .next && build`) before auditing.

**Server lifetime:** a backgrounded `next start` only survives within the same bash call — it is
killed when the tool call returns. Start the prod server and run the audits in one bash call. Any
package install reboots workflows and also kills an ad-hoc prod server.

**Reading scores:** A11y, Best-Practices, SEO, and desktop Perf are stable and trustworthy here.
Mobile Perf is NOT reliable on this shared container — it is TBT/CPU-bound (React hydration under
Lighthouse's 4× CPU throttle) and swings widely with container CPU contention. Treat localhost
mobile Perf as a noisy lower bound; real CDN + real devices score higher.

**`link-text` audit ignores `aria-label`** in this Lighthouse version — it flags the visible text,
so a generic visible "Learn More" fails even with a descriptive `aria-label`. Fix by putting the
descriptive context in the DOM as an `sr-only` span inside the link, so both Lighthouse and screen
readers get a descriptive accessible name.
