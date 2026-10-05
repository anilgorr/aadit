# On-page and technical fixes — 5 October 2026

Implementation of `attached_assets/Aadit_OnPage_&_Technical_Fixes_1791190252311.docx`.
These are workspace changes, not confirmation that Netlify has deployed them.

## Implemented

- **A1:** Application middleware combines HTTP, www, trailing-slash and legacy-path canonicalisation. Added the corresponding Netlify HTTP-www rule. Direct application verification returns one 301 to HTTPS apex, preserving query parameters.
- **A2:** Attachment paths return 410 before canonicalisation or legacy redirects. Both listed attachment paths were checked through the preview and return 410 without a Location header.
- **A3:** Added India, United States and United Arab Emirates to Organization.areaServed. Included verified Crunchbase, DesignRush, Sortlist and G2 profiles. No manually maintained aggregateRating.
- **A4:** Removed the unrelated ISO-pricing FAQ from the vulnerability-scanning post. Replacement questions are awaiting the required query evidence; no invented replacement FAQ/schema was published.
- **A5:** Added Suman KV's author profile, Person schema and direct legacy-author redirect. All three authors are in the sitemap. No placeholder LinkedIn URL was added.
- **A6:** The provider comparison and managed-SOC guide redirect directly to `/cybersecurity/managed-soc`; the SOC 2 article redirects directly to `/compliance/soc2`. Incorporated useful buying and readiness guidance at those destinations. Older aliases also point directly to services. Redirected articles are excluded from blog/author lists and static page generation.
- **A7:** Both AI exports derive their URL inventory from the built sitemap and their content from each rendered canonical page. The existing company identity and disambiguation facts are preserved in both exports. All three inventories contain the same 79 URLs.
- **B1–B3:** Applied the supplied title replacements to 11 surviving pages and the supplied descriptions to four surviving posts. Redirected posts are not retained as indexable duplicates. Absolute titles avoid the inherited brand suffix. Visible H1s remain unchanged. Reworked the cybersecurity-company article around selection criteria rather than unsupported rankings, promotional competitor descriptions or market forecasts.
- **B4:** Expanded the hubs, eight glossary entries, glossary index, three industries, industry index, comparison page and cross-domain article. Added a 150-word blog introduction, descriptive internal links, practical guidance and six visible/schema-matched FAQs per hub.

## Measured main-content words

| Page group | Words |
| --- | --- |
| Cybersecurity / Compliance / Managed IT hubs | 1,527 / 1,434 / 1,247 |
| Eight glossary entries | 811–869 each |
| Glossary index | 820 |
| Startups / Healthcare-BFSI / E-commerce-Fintech | 837 / 813 / 816 |
| Industry index | 650 |
| SOC 2 vs ISO 27001 | 1,257 |

Counts include main-page headings, links and existing FAQs, but exclude header, footer and structured-data scripts.

## Pending evidence or external action

- **A4 and B5/B6:** Supply Search Console Queries exports with the individual Page filter applied for the listed blogs. Separate Pages and Queries exports and the keyword-mapping workbook do not provide the required page/question association.
- **A3/A5:** Supply the genuine Google Business profile/Place ID and Suman's verified LinkedIn profile. The supplied Ensun search URL returned 404 and was not used.
- **B4 supporting assets:** Approved real case studies and whitepaper/PDF assets were not supplied. No customer outcomes, documents or new figures were invented.
- **A1 production:** Push the changes through Git to trigger the existing Netlify deployment, then check the complete live HTTP-www sequence. Hosting-level HTTPS handling occurs outside application middleware and may still need Netlify configuration.

## Verification

- Production build and TypeScript check passed.
- `pnpm run verify:seo` passed for all 79 canonical pages: exact metadata replacements, one H1, canonical URLs, parseable schema, author Person data, content targets, six hub FAQs, removal of redirected internal links, and matching sitemap/AI inventories.
- Preview requests verified the three new 301s, the author 301, both attachment 410s, and 200 responses for the author, sitemap and AI exports.
- Desktop cybersecurity and mobile VAPT screenshots render correctly. The screenshot-only localhost HMR warning does not affect the rendered pages; the actual preview browser logs show normal refreshes.
- No production publish was performed.
