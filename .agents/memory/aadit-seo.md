---
name: Aadit Technologies SEO foundation
description: Durable decisions/constraints for the technical SEO/AEO/GEO layer on the aadit-tech site
---

# Aadit Technologies SEO/AEO/GEO

## Canonical domain
- Production canonical domain is the **apex `https://aadit.net`** (set in `lib/site.ts`, overridable via `NEXT_PUBLIC_SITE_URL`). An earlier build had a stray hardcoded `aadit.tech` in the glossary DefinedTerm — that was wrong; always use the central `SITE_URL`/`absoluteUrl()`.
- **Why:** the redirect requirement specifies apex `aadit.net`; mixed domains split ranking signals.

## Title template double-suffix trap
- The root layout sets `title.template = "%s | Aadit Technologies"`. Page metadata must return a **bare** title (no manual " | Aadit Technologies") or the suffix doubles. For custom trailing labels (e.g. glossary "… | Aadit Technologies Glossary") use `buildMetadata({ absoluteTitle })` which emits `title: { absolute }` to bypass the template.
- **Why:** several pages previously appended the brand manually AND inherited the template → "Foo | Aadit Technologies | Aadit Technologies".

## No-invention constraints that shape structured data
- Organization `sameAs` is emitted **only** when `NEXT_PUBLIC_SOCIAL_PROFILES` is set — no real social URLs exist, and inventing them mislinks the brand entity. Same reasoning omits `contactPoint` (no public phone/email).
- WebSite schema has **no** SearchAction/sitelinks-searchbox: there is no on-site search page and Google deprecated the feature.
- FAQPage is emitted only where real Q&A exists (service pages with `faqs`). Glossary keeps DefinedTerm (no Q&A to fabricate). The lone service MDX (`consulting.mdx`) has no `faqs`, so it correctly shows no FAQPage.

## Redirects
- Only `www → apex` (301, host-matched) is implemented in `next.config.ts`; HTTP→HTTPS is automatic on Netlify. **No legacy→new path 301 map exists** because the old site's URL inventory was never provided — add entries to `next.config.ts` `redirects()` when available.

## next/og images
- Shared renderer in `lib/og.tsx`. **satori (next/og) does not support `oklch()`** — the site's Tailwind tokens are OKLCH, so OG images use hand-picked hex approximations of the midnight/cyan palette. No remote fonts (keeps build fast/safe).
