# SOC URL and search-intent review

Reviewed 30 September 2026 using the user-provided Google Search Console exports in `attached_assets/` (`Pages_1790761769065.csv`, `Queries_1790761769066.csv`, `Filters_1790761769065.csv`), the later `Aadit_Keyword_to_Page_Mapping_1790770620999.xlsx` workbook, and the site's current article copy. The separate CSVs are aggregate page and query exports (Web search, last three months), **not** a query-by-page table. The workbook supplies compiled query-to-page examples for 20 queries, including SOC; its stated date range is 20 June–17 September 2026. The workbook's 113-query total is not independently auditable from its 20 displayed examples. Neither source proves that a 301 will improve rankings. Impressions across URLs are not unique searches.

| URL / intent | Exported clicks | Exported impressions | Decision |
| --- | ---: | ---: | --- |
| `/cybersecurity/managed-soc` — commercial service | 0 | 43 | Keep as the commercial destination. |
| `/blog/managed-soc-services-in-india` — managed-SOC explainer | 0 | 1,170 | Keep as the informational managed-SOC guide. Three already-redirected older posts continue to point here. |
| `/blog/soc-services-in-india` (including trailing slash) — sales-style SOC offering | 0 | 1,176 | Owner approved one direct 301 to `/cybersecurity/managed-soc` after the consequences were explained. It is excluded from listings, sitemap and AI export; its original MDX source remains for recovery. |
| `/blog/top-soc-service-providers-in-india-secure-your-business` (including trailing slash) — provider selection/comparison | 2 | 4,285 | Keep. This is the strongest exposed SOC article in the export, with a distinct comparison intent. |
| `/blog/soc-as-a-service-for-indian-organizations` — delivery-model explainer | 0 | 69 | Keep; the separate SOC-as-a-Service service page remains live. |
| `/glossary/soc` — definition | 0 | 49 | Keep as a definitional page. |

For context, the later aggregate query CSV includes `soc service providers in india` (463 impressions), `managed soc services in india` (278), and `soc services in india` (218), all with zero clicks. **Do not join these CSV query totals to individual URL totals**: those exports have no shared query/page dimension. The workbook's different, fixed date range likely explains some difference from the rolling "last three months" CSV totals; do not combine them as if they were the same measurement.

### What the newly supplied query-to-page examples show

| Workbook query | Workbook total impressions | Named URLs and impressions (slash variants counted separately) | Reading |
| --- | ---: | --- | --- |
| `soc service providers in india` | 650 | Provider-comparison post 219 + slash 74; managed-SOC guide 161; sales-style SOC post 155 + slash 41 | Three distinct canonical articles received impressions, not five distinct articles. The already-approved sales-style 301 addresses one of them; the provider-comparison page is the clearest match to this query. |
| `managed soc services in india` | 572 | Managed-SOC guide 218; provider-comparison post 136 + slash 50; sales-style SOC post 127 + slash 39 | The surviving guide is the strongest listed individual URL. Its operating-model intent still differs from a provider comparison. The listed figures total 570, two fewer than the workbook total, so the row is not a complete reconciliation. |
| `soc services companies in india` | 487 | Provider-comparison post 171 + slash 38; managed-SOC guide 135; sales-style SOC post 117 + slash 26 | The provider comparison is again the leading listed article. |

The workbook's `Cannibalisation` tab names competing URLs and positions, but shows only its 20 selected examples, not raw Search Console query×page rows for all 113 claimed queries. Its `Fix First` text describes five URLs for the first SOC query because it counts two slash variants separately; three underlying article URLs appear in the row. Site-wide slash normalization and the one approved article redirect already address those variants in the current workspace. **Recommendation: no additional SOC 301s from this workbook.** Keep the provider comparison for vendor-selection searches and the managed-SOC guide for operating-model searches, with descriptive links to the commercial service page. Publishing and subsequent search measurement are separate steps.

The surviving managed-SOC explainer and provider-selection post now both link to the commercial service page with descriptive anchor text. Existing retired root SOC paths keep their direct service redirects. No SOC 2 compliance, glossary, provider-comparison, or SOC-as-a-Service URL was redirected.

## Local verification

- Typecheck and production build passed; development workflow restarted cleanly.
- `/blog/soc-services-in-india`, its slash variant and its query-string variant each return one-hop HTTP 301 to the service URL (preserving query parameters); the old root `/soc-services-in-india` also returns a direct 301.
- The service, managed-SOC guide and provider-comparison article return HTTP 200. Both retained articles link to the service. The redirected blog article is absent from the sitemap, blog listing/pagination, and generated full AI content export.

## Follow-up evidence

For any broader consolidation, obtain the full Search Console API export with both `query` and `page` dimensions (or filter each priority query in Search Console, then export its **Pages** tab) for the same date range. The workbook provides enough examples to confirm some historical SOC overlap, but not the complete 113-query claim, clicks by URL/query pair, or post-change outcomes. Compare intent and links as well as impressions; seek explicit approval for each additional live-URL redirect and monitor indexing and query/page performance after publishing. The redirect checked here is a local workspace change, not proof of a production ranking gain.