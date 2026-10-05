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
- Verify profile URLs identify this company before adding them. Do not substitute placeholders or a similarly named company. Do not publish manually maintained ratings.
- **Why:** the owner's on-page fixes permit omitting ratings without automatic synchronisation and include profile placeholders that are not usable URLs.
- **How to apply:** confirm identity and a working profile; leave unverified links and ratings out.
- New blog FAQ questions must come from page-filtered Search Console queries, and visible answers must match structured data.
- **Why:** the owner's fix document explicitly prohibits invented blog questions. Separate aggregate exports cannot associate a question with a particular URL.
- **How to apply:** obtain queries exported with the individual Page filter before adding new blog FAQs. Do not block unrelated fixes while waiting for that evidence.

## Hosted redirects
- Verify host and protocol redirect behaviour after the Netlify deployment, not solely in the development server.
- **Why:** hosting-level HTTPS handling can occur before application middleware and introduce an extra redirect.
- **How to apply:** distinguish a tested application-level one-hop redirect from an unverified production hosting sequence.

## next/og images
- Shared renderer in `lib/og.tsx`. **satori (next/og) does not support `oklch()`** — the site's Tailwind tokens are OKLCH, so OG images use hand-picked hex approximations of the midnight/cyan palette. No remote fonts (keeps build fast/safe).
