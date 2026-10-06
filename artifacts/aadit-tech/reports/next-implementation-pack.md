# Next implementation pack — status

## Implemented and verified

- 66 supplied questions and answers across all 16 targeted live blog posts.
- One visible FAQ section and one matching FAQPage block per targeted post,
  including the vulnerability-scanning post. The welcome post is unchanged.
- `/glossary/managed-it-services`: supplied copy, four-column comparison,
  five FAQs, exact metadata, DefinedTerm, FAQPage and BreadcrumbList.
- `/resources/soc-2-checklist`: supplied checklist, sequence table, six FAQs,
  exact metadata, Article, FAQPage and BreadcrumbList.
- Incoming links from the glossary index, SOC 2 service and managed IT service;
  requested outgoing service, comparison, glossary and contact links.
- Both new pages in the sitemap and full-content AI export. Requested Common
  questions entries added to llms.txt. All inventories contain the same 81 URLs.
- Suman KV's supplied biography, areas of focus and Bengaluru location.
  Articles are ordered newest first and restricted to confirmed attribution.
- Optional verified headshot and LinkedIn fields connect the author UI and
  Person schema when genuine assets are supplied.
- Explicit HTTP-www and HTTPS-www canonical rules precede application routes.
  **This is not a fix for Netlify's HTTP upgrade; see below.**

The approved blog FAQ source is `content/approved-blog-faqs.json`. The MDX
compiler replaces historical FAQ blocks with this copy, and the schema
generator uses the same source. Edit that source to revise these FAQs.
The two new editorial pages live in `content/resources/*.mdx`.

## Verification

- `pnpm --filter @workspace/aadit-tech run build` — passed.
- `pnpm --filter @workspace/aadit-tech run typecheck` — passed.
- `pnpm --filter @workspace/aadit-tech run verify:seo` — passed, including
  visible/schema FAQ equality, exact new metadata, tables and parent links.
- Managed Next.js workflow restarted successfully; new routes return 200.
- Desktop SOC 2 and mobile managed-IT screenshots checked.

## Not completed — dependencies or hosting limitation

### Single-hop HTTP-www redirect

The live request still follows:
`http://www.aadit.net/ → https://www.aadit.net/ → https://aadit.net/`.

This is not a rule-order error. Netlify performs the same-host HTTPS upgrade
before site redirects. Its explanation explicitly says site rules cannot
override this:
https://answers.netlify.com/t/how-to-group-https-and-www-redirects-to-one-redirect/117170/4

A single-hop requirement needs a separately approved HTTP edge/hosting change.
No DNS, hosting provider or HTTPS security setting was changed.

### Genuine identity assets

The pack contains placeholders, not a verified Google Maps Place ID or Bing
listing. Neither placeholder was inserted in sameAs. No genuine headshot or
confirmed LinkedIn identity for Suman KV was supplied. Search results for a
similarly named person are not sufficient to establish identity.

No active source posts currently have a confirmed Suman KV byline. The profile
does not invent an article list or reassign other authors' work.

### Three pages referenced from an earlier pack

The current pack does not contain their full copy, and that copy was not found
in the other attached documents:

- `/resources/vapt-report-sample`
- `/compliance/iso-27001/india`
- `/compliance/iso-27001/cost`

These pages were not fabricated, published as empty shells, or added to the sitemap.

### Publishing and search tools

The changes are available in the workspace preview, not the live Netlify build.
Push the changes to the connected Git repository to trigger the existing
Netlify publishing pipeline.

Search Console/Bing submissions and fresh measurements require the published
pages and access to those accounts. They have not been claimed as completed.
