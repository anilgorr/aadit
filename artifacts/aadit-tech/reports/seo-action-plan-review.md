# SEO action plan: implementation and outstanding decisions

Reviewed against `attached_assets/Aadit_SEO_Action_Plan_StepByStep_1790759419713.xlsx` on 30 September 2026. The workbook's "Not started" labels describe a prior snapshot, not the current site. Search-volume, ranking, click and AI-citation numbers in the workbook are **unverified historical baselines**; no current Search Console or Bing data was available.

## Phase 1 — technical fixes

| Workbook item | Result |
| --- | --- |
| 1–2. Broken title/description truncation | Fixed the shared metadata helper: it no longer adds ellipses, cuts mid-phrase, or pads descriptions. Rewrote the VAPT full-form post title and description from existing copy; its rendered title is now `VAPT Full Form: What Is VAPT? \| Aadit Technologies`. The eight priority-post snippets in `metadata-review.md` remain **proposals requiring approval**. A crawl before the FAQ changes found 32 titles over 65 characters, 40 descriptions over 160, and 10 descriptions under 120; these still need individually authored edits, not another automatic truncator. |
| 3. Duplicate trailing slashes | Canonicals already preferred no trailing slash. Changed routing to issue 301 to the no-slash path; a local `/cybersecurity/vapt/` request now returns 301 to `/cybersecurity/vapt`. The 15 examples claimed in the workbook were not enumerated, so the general rule covers them. |
| 4. Double redirects | All 66 known legacy rules now issue one-hop 301 responses for both slash and non-slash source URLs instead of an intermediate Next.js 308. Previously checked 132 source forms with zero failures. Rechecked wildcard `/category/`, `/tag/`, `/author/`, `/ebook/`, `/whitepaper/`, plus a migrated blog slug after correcting wildcard matching. Canonical host and retired-domain redirects also return 301 locally. |
| 5. Complete pre-migration inventory | **Open.** The repository has a partial redirect inventory, but the complete historical URL export (and the workbook's four confirmed traffic-bearing URLs) was not provided. Obtain it from the previous site/developer and compare against the redirect map and Search Console before claiming migration coverage. |

## Phase 2 — existing answer content

| Workbook item | Result |
| --- | --- |
| 6. VAPT article FAQ | Added FAQPage JSON-LD from the five questions and answers already visible in the VAPT full-form article. Locally verified one FAQPage with five questions in rendered HTML. |
| 7. Other FAQ sections | Existing service templates already render matching FAQ schema for their frontmatter FAQs; the SOC 2 comparison page and service hubs also have FAQ markup. Added build-time extraction for **14 active blog posts** with FAQ sections, so JSON-LD comes from the visible article source rather than separately invented answers. The vulnerability-scanning article's FAQ unexpectedly discusses ISO consulting prices and was excluded until that editorial mismatch is corrected. Redirected posts are excluded. Google may not show FAQ rich results merely because the markup exists. |
| 8. Answer-first openings | Glossary definitions are already the first body content; four service detail pages have a dedicated answer-first block, while all service detail pages show their summary immediately below the heading. The requested sentence-by-sentence editorial rewrite of the other service introductions is **not complete**. The eight previously prioritized blog posts already have answer-first openings and key takeaways (see `aeo-remediation-summary.md`). |

## Phases 3–5 — not silently applied

| Workbook item | Status / dependency |
| --- | --- |
| 9. SOC cluster consolidation | Existing duplicate managed-SOC posts already redirect to the surviving managed-SOC blog post. The workbook additionally proposes redirecting other **currently live** SOC posts to one service page and one informational post. Those are permanent public-URL/ranking changes; choose the exact survivors and destinations with the owner before making them. |
| 10. Other cannibalisation cases | Need the previous cannibalisation workbook or an updated query/URL export; the claimed 113 competing queries cannot be reconstructed from this workbook alone. |
| 11–12. Expand nine glossary entries | **Eight distinct existing entries expanded** (the workbook repeats VAPT). Each now has an accessible comparison, two visible FAQs with matching FAQPage markup, official reference links, and a contextual service link where an unambiguous service exists. VAPT, SIEM, SOC, ISO 27001, GDPR, HIPAA, PCI DSS and SOC 2 are covered. The SOC glossary retains a hub link until the separate SOC URL/intent decision is settled. These are concise, source-backed explanations, not a fabricated long-form report or duplicate glossary URL. |
| 13–14. Strengthen service pages and blog-to-service links | VAPT, ISO 27001, GDPR, HIPAA, PCI DSS and SOC 2 service pages now point to relevant glossary comparisons and external authorities; unsupported sample price bands were removed from VAPT, ISO 27001 and GDPR copy. SOC 2 is described as a CPA report, not a certification. **Still open:** blog-to-service cross-link inventory and any SOC service/blog mapping changes, pending the separate SOC intent decision. Do not direct additional links to competing SOC URLs meanwhile. |
| 15–18. Eight new pages | **Not published**: no approved VAPT sample report, actual numeric pricing guidance or confirmed location-specific service claims were provided. ISO costs are instead described as non-numeric factors on the existing service page. The UAE page remains conditional on confirmed market coverage. Adding any of these URLs before the SOC intent/URL mapping decision and supporting evidence would risk unsupported claims or cannibalisation. |
| 19. Remeasure | Needs access to Google Search Console and Bing Webmaster Tools 30 days after the completed Phase 2 changes reach production. Local preview metrics cannot establish an improvement. |

## Verification and immediate next decisions

- `pnpm run typecheck` and `pnpm run build` passed; the build generated 166 static/SSG outputs. The expanded glossary and service content was also built successfully, with the eight existing glossary routes retained.
- The managed Next.js preview restarted cleanly. Local curl checks returned one-hop 301 for wildcard legacy paths, blog migration and slash normalization, and 410 for a retired sitemap. Rendered VAPT and VAPT-tools article HTML each contained one FAQPage with five visible-source questions. The VAPT service page retained its existing FAQPage. After clearing a stale tracked development cache, the new glossary VAPT comparison, visible FAQs and NIST source were confirmed in rendered HTML; SOC 2 glossary FAQPage and comparison were also confirmed.
- These are **workspace changes only**, not a production publish. Production DNS/hosting, Google/Bing index changes and actual rankings have not been verified.
- Owner input needed: complete pre-migration URL list, previous cannibalisation workbook or query/URL export, decision on live SOC redirects, approval/revision of eight metadata proposals, and approval of a real sanitised VAPT report example, numeric pricing/rate-card guidance if desired, and precise India/UAE service-area claims. Revisit the requested new pages and SOC/blog cross-links only after those inputs are available.