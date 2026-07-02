---
name: Netlify Forms in a Next.js App Router site
description: How the /contact form is wired for Netlify Forms, and why it can't be tested on localhost.
---

# Netlify Forms + Next.js (App Router)

The contact form uses Netlify Forms, which needs two parts:

1. A **static HTML detection form** at `public/__forms.html` — Netlify scans deployed
   HTML at build time to register the form. It must declare `name="contact"`,
   `data-netlify="true"`, `netlify-honeypot="bot-field"`, and an `<input>` for every
   field name (including a hidden `form-name` and the `bot-field` honeypot).
2. A **client React form** (`components/contact-form.tsx`) that submits via `fetch`
   POST to `/__forms.html`, `Content-Type: application/x-www-form-urlencoded`, body
   built from `FormData` and **must include `form-name=contact`**. Field names must
   stay in sync with `__forms.html`.

**Why this split:** React-rendered forms aren't visible to Netlify's static build-time
scanner, so a separate static form is required for detection; the live form just needs
to POST a matching payload.

## How to apply / gotchas
- **Submission only works on the deployed Netlify site.** On localhost/`next dev`,
  POST to `/__forms.html` 404s → the form lands in its error state. That's expected;
  don't treat it as a bug. Verify a real submission post-deploy.
- After first deploy, the site owner must open the Netlify dashboard → Forms and set
  the **notification email** (recipient: anilgorraladaku@gmail.com). Code can't set this.
- Keep a mailto fallback in the UI so users aren't stranded if the POST fails.
