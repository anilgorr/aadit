# VAPT and ISO 27001 editorial guides

## Content authority

The attached October packs reference earlier full copy for these three URLs,
but the attached Word documents and original content exports do not contain
that page copy. The user explicitly approved writing new drafts and relevant
FAQs instead.

- `/resources/vapt-report-sample`: fictional educational sample, not a real or
  redacted client report, certificate, engagement claim or downloadable asset.
- `/compliance/iso-27001/india`: implementation and independent certification
  guide, with scope, evidence, audit stages and India-specific considerations.
- `/compliance/iso-27001/cost`: scope-based budgeting guide with no unapproved
  numerical prices, rate card, deadline or certification guarantee.

The FAQs are newly authored under that permission, not represented as Search
Console-derived questions. Each visible answer matches its structured data.

## Integration

All three use the existing resource MDX collection and editorial template.
The content validator permits only the two specified nested ISO guide paths;
the new three-segment route resolves only authored ISO guide entries. It does
not replace existing hub or service routes.

Each guide has metadata, article and FAQ schema, contextual breadcrumbs,
internal links and a visible content date. Existing ISO 27001 and VAPT service
pages link to the guides, and their editorial modification dates reflect those
additions. The sitemap supplies the inventory for both generated AI exports.

## Verification

- `pnpm --filter @workspace/aadit-tech run build`
- `pnpm --filter @workspace/aadit-tech run verify:seo`
- `pnpm --filter @workspace/aadit-tech run typecheck`
- Production-mode requests for the three guides, existing parents, existing
  editorial pages and the parent Open Graph image.
- Real 404 responses for unknown resources and unrecognised nested guides.
- Preview screenshot of the VAPT resource and workflow startup checks.

The guide-specific SEO verification checks rendered titles, descriptions,
canonical/OG/Twitter metadata, article and WebPage dates, matching FAQ text,
breadcrumb structure, sitemap freshness, internal links and AI exports.

No Git push, Netlify publish, DNS change, live Search Console submission or
production indexing claim is part of this work.
