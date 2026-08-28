# AEO/GEO Remediation Summary

Completed: 28 August 2026

## Scope and safeguards

- Preserved the Next.js App Router, Velite content model, public route names, and existing visual direction.
- Added no invented statistics, citations, credentials, certifications, coordinates, pricing, testimonials, ratings, or social profiles.
- Kept all eight priority-post title and description values unchanged pending explicit approval.
- Used `https://aadit.net` as the sole canonical origin.

## Phase 1 — Crawler access and AI discovery

### Reviewed or changed

- `app/robots.ts` — audited; existing disallow rules were preserved and the required AI/search fetchers are explicitly allowed.
- `public/llms.txt` — retained verified company and route information and added the full-export discovery link.
- `scripts/generate-llms-full.mjs` — now records the canonical site/sitemap, includes post author/date metadata when available, and excludes redirected noncanonical posts.
- `public/llms-full.txt` — regenerated from current Velite source content after article remediation.

### Results

- `/robots.txt`, `/llms.txt`, and `/llms-full.txt` return HTTP 200.
- Both `.txt` files return `text/plain`.
- Generated content URLs use the absolute `https://aadit.net/` origin.
- The removed TCS stock-price artifact and both redirected post slugs are absent from `llms-full.txt`.

## Phase 2 — Structured data

### Changed

- `lib/seo.ts`
- `app/page.tsx`
- `app/[hub]/page.tsx`
- `app/about/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/careers/page.tsx`
- `app/case-studies/page.tsx`
- `app/compare/soc-2-vs-iso-27001/page.tsx`
- `app/contact/page.tsx`
- `app/glossary/page.tsx`
- `app/glossary/[slug]/page.tsx`
- `app/industries/page.tsx`
- `app/industries/[slug]/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/team/page.tsx`
- `components/blog-index.tsx`
- `components/resource-listing.tsx`

### Results

- Intended indexable sitemap routes emit server-rendered WebPage-derived schema.
- Blog detail pages emit linked WebPage and BlogPosting objects with stable IDs, canonical URL, dates, image, word count, language, free-access status, author, reviewer, publisher, tags, and section values derived from page content.
- Existing Organization, WebSite, office, Service, FAQPage, BreadcrumbList, Person, ProfilePage, and DefinedTerm schemas remain server-rendered.
- FAQ schema remains limited to routes that visibly render the same FAQ content.
- Breadcrumb schema remains coupled to visible breadcrumb components; none was fabricated for pages without visible breadcrumbs.
- Paginated blog routes intentionally omit page schema because they are `noindex` and canonicalize to `/blog`.

### Validation

The final route crawl parsed 747 JSON-LD scripts across 82 canonical sitemap routes with no JSON parse failures. It observed these schema types:

- Organization
- ProfessionalService
- WebSite
- OfferCatalog
- WebPage / AboutPage / CollectionPage / ProfilePage
- BreadcrumbList
- FAQPage
- Person
- Service
- DefinedTerm
- BlogPosting

All recursively checked URL-like JSON-LD fields were absolute.

## Phase 3 — Answer-first priority content

### Changed

- `content/posts/cloud-migration-services-in-india-strategy-benefits-best-practices.mdx`
- `content/posts/cyber-security-companies-bangalore.mdx`
- `content/posts/top-soc-service-providers-in-india-secure-your-business.mdx`
- `content/posts/cross-domain-attacks-threats-mitigation.mdx`
- `content/posts/top-cyber-security-companies-in-india-safeguarding-digital-future.mdx`
- `content/posts/cyber-security-in-india-trends-challenges-growth.mdx`
- `content/posts/soc-2-compliance-services-india.mdx`
- `content/posts/best-vapt-tools-for-security-testing-aadit-technologies.mdx`

### Results

- Each specified post opens with a self-contained answer derived only from its existing body.
- Each has a `Key takeaways` section containing three to five standalone bullets.
- Suitable headings were converted to questions without changing URLs or frontmatter metadata.
- No priority article lacked enough existing source material to complete this structural rewrite.

## Phase 4 — Content integrity

### Changed

- Removed `Long-Term Partners Share price: TCS ₹83.95, NSE 29-10-2021` from the SOC-provider article.
- Added `reports/unsourced-stats.md`.

### Findings

- All 33 posts were scanned.
- Post source files contain no inline HTTP(S) source links.
- The report inventories exact substantive numeric, statistical, financial, pricing, salary, incident-volume, and time-sensitive regulatory claims with named-source and link status.
- Stale 2023/2025 framing, conflicting market forecasts, the DPDP Rules status, and the bulk migration update date remain explicitly flagged for human review.
- No citation was invented.

## Phase 5 — Canonical and redirect hygiene

### Changed or reviewed

- `middleware.ts` — emits 410 for four retired sitemap endpoints and direct 301 canonical-host redirects.
- `next.config.ts` — existing redirect map and canonical-host rule retained; the live Replit preview origin is allowed during development, and development output is isolated in `.next-dev` so concurrent production validation cannot corrupt `.next`.
- `app/sitemap.ts` — audited; no content change was required.

### Observed local production status codes

| Request | Result |
| --- | --- |
| `/sitemap.xml` | 200 |
| `/robots.txt` | 200 |
| `/llms.txt` | 200 |
| `/llms-full.txt` | 200 |
| `/sitemap_index.xml` | 410 |
| `/wp-sitemap.xml` | 410 |
| `/post-sitemap.xml` | 410 |
| `/page-sitemap.xml` | 410 |
| Random nonexistent route | 404 with custom page |
| `/ebook` | One-hop permanent redirect to `/whitepapers` |
| `www.aadit.net/*` | One-hop 301 to the same path on `https://aadit.net` |
| `aaditsoc.in/*` and `www.aaditsoc.in/*` | One-hop 301 to `https://aadit.net/compliance/soc2` |

The middleware covers both HTTP and HTTPS requests once those hosts reach this deployment, giving four retired `aaditsoc.in` scheme/host variants. DNS and hosting attachment for the retired domain are external deployment prerequisites and cannot be verified or changed from this repository.

### Crawl results

- 82 sitemap entries
- 82 successful HTTP 200 responses
- 82 matching self-canonical absolute URLs
- No duplicate or non-apex sitemap URLs
- Pagination routes are absent from the sitemap; `/blog/page/2` returns 200 with `noindex, follow` and canonical `/blog`
- Noncanonical VAPT and DPDP blog slugs are absent from the sitemap and full AI export

## Phase 6 — Metadata review gate

- Added `reports/metadata-review.md`.
- The report records before/after title and description proposals for all eight priority posts.
- No proposed title or description has been applied.
- Existing canonical, Open Graph, and Twitter metadata generation remains active sitewide.
- Human dependency: explicit approval is required before applying the proposed frontmatter metadata.

## Final verification

### Automated checks

- `pnpm run typecheck` — passed.
- Fresh `pnpm run build` — passed; 166 static/SSG outputs generated.
- Concurrent-preview reproducibility check — passed; a clean production build completed while the managed development workflow remained running, and the generated app-path manifest contains both `/_not-found` and `/[hub]/[slug]`.
- Production route/status crawl — passed for all 82 sitemap routes.
- JSON-LD parse and absolute-URL crawl — passed.
- `git diff --check` — passed.

### Lighthouse

Desktop homepage audit:

- Performance: 99
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Machine-readable output: `reports/lighthouse/home-desktop.json`.

### Browser regression

A fresh real-browser session verified:

- Styled homepage and navigation
- Blog index and pagination
- Priority cloud-migration article title, human author, answer-first opening, Key takeaways, body, breadcrumbs, table of contents, and related content
- Healthcare/BFSI industry page
- VAPT glossary page
- Branded custom 404

No application JavaScript errors or failed requests were observed. The browser correctly logged the expected HTTP 404 resource response on the intentional nonexistent-route check. No visible theme toggle exists in the desktop UI, so there was no user control to exercise; the default theme rendered normally.

## Intentionally flagged external or human dependencies

1. Approve or revise the eight metadata proposals before any title/description changes are applied.
2. Supply authoritative source URLs or approve removal/softening for claims listed in `reports/unsourced-stats.md`.
3. Ensure `aaditsoc.in` and `www.aaditsoc.in` DNS/hosting are attached to the deployment so repository-level one-hop redirects can execute.
4. Webmaster-console removal requests, external profile creation, publishing, and Git/Netlify deployment remain out of scope.