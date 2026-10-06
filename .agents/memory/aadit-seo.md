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
- Use explicitly supplied, owner-approved blog FAQ copy when available. For newly authored questions, use page-filtered Search Console queries; visible answers must match structured data.
- **Why:** the 2026-10-06 implementation pack supplies approved FAQ copy and supersedes the previous evidence blocker for those questions. It does not establish that the supplied copy came from Search Console.
- **How to apply:** implement supplied approved copy without demanding another query export. Do not invent other questions or misrepresent their provenance. Separate aggregate exports still cannot map questions to pages.

## Hosted redirects
- Netlify enforces HTTP-to-HTTPS on the same host before primary-domain redirects. Site rules or Next middleware cannot override that platform sequence.
- **Why:** Netlify's support explanation explicitly requires this ordering; the live HTTP-www request still shows two redirects even with the combined rule first.
- **How to apply:** verify production rather than reporting development middleware as a live fix. A one-hop requirement needs a separately approved HTTP edge/hosting change; do not downgrade HTTPS or change DNS without informed consent.

## next/og images
- Shared renderer in `lib/og.tsx`. **satori (next/og) does not support `oklch()`** — the site's Tailwind tokens are OKLCH, so OG images use hand-picked hex approximations of the midnight/cyan palette. No remote fonts (keeps build fast/safe).
