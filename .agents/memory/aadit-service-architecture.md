---
name: Aadit service-page architecture
description: How service hub + child pages are modeled, routed, and rendered from MDX
---

# Service pages (hubs + children)

**URL scheme:** hub-based `/{hub}/{slug}` — NOT `/services/...`. The Velite `services`
transform sets `permalink = /${hub}/${slug}`. Three hubs only: `cybersecurity`,
`compliance`, `it-managed-services`.
**Why:** the content spec defines top-level hub URLs; internal links + AI-search structure depend on it.

**Routing:** `app/[hub]/page.tsx` (hub listing) + `app/[hub]/[slug]/page.tsx` (child via
`ServicePageTemplate`). Both use `generateStaticParams` + `generateMetadata`. The root
`[hub]` segment catches any unknown single path → `notFound()`; that's fine because a
real static route (e.g. `app/about/page.tsx`) wins over the dynamic segment by Next
precedence. Next 15: `params` is a **Promise** — must `await`.

**Content model (decision):** each service is one `content/services/*.mdx` file.
- Frontmatter (validated in `velite.config.ts`): `title, metaDescription, slug, hub,
  publishedAt, updatedAt, order?` + optional structured arrays `features[]`,
  `benefits[]`, `faqs[]`, `related[]` (related = slugs of other services).
- MDX **body** = the definition-opener paragraph(s) only (no `#`/`##` headings — those
  sections live in frontmatter arrays).
- `ServicePageTemplate` renders each section **conditionally** (hidden when its array is
  empty), so partial pages are valid.
**Why:** keeps structured layout while letting prose be authored in the MDX body, and lets
pages ship incrementally without inventing FAQ/benefits copy.

**MDX rendering:** `components/mdx-content.tsx` compiles the Velite `content` code string
via `new Function(code)` + `react/jsx-runtime` (the standard Velite pattern) and accepts
a `components` map for styling (no `@tailwindcss/typography` installed, so the template
passes styled `p/ul/li/h2/...`).
**Trust boundary:** `new Function` is safe only because MDX is repo-authored. Never point
this render path at user/CMS-sourced content, and don't move these routes to Edge runtime
(eval may fail there).

**Hub metadata** (title, intro, metaDescription) lives in `lib/services.ts` `HUBS` map,
not in MDX. `getRelated()` resolves only services that exist, so `related` slugs pointing
at not-yet-built pages are silently omitted (no dead links). `related` is matched by slug
**globally** — this is safe only while service slugs stay globally unique across hubs.

**Content sourcing rule:** service page copy must come from the real exported source; do
NOT invent stats/testimonials/pricing. Flag placeholder testimonials/round-number pricing
instead of publishing them.
