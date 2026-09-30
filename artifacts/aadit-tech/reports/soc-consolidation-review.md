# SOC URL and search-intent review

Reviewed 30 September 2026 using the user-provided Google Search Console exports in `attached_assets/` (`Pages_1790761769065.csv`, `Queries_1790761769066.csv`, `Filters_1790761769065.csv`) and the site's current article copy. Filter: Web search, last three months. These are **separate aggregate page and query exports**, not a query-by-page table. They cannot show which URLs appeared for the same query, establish the workbook's "113 competing queries" count, or prove that a particular 301 will improve rankings. Impressions across URLs are not unique searches.

| URL / intent | Exported clicks | Exported impressions | Decision |
| --- | ---: | ---: | --- |
| `/cybersecurity/managed-soc` — commercial service | 0 | 43 | Keep as the commercial destination. |
| `/blog/managed-soc-services-in-india` — managed-SOC explainer | 0 | 1,170 | Keep as the informational managed-SOC guide. Three already-redirected older posts continue to point here. |
| `/blog/soc-services-in-india` (including trailing slash) — sales-style SOC offering | 0 | 1,176 | Owner approved one direct 301 to `/cybersecurity/managed-soc` after the consequences were explained. It is excluded from listings, sitemap and AI export; its original MDX source remains for recovery. |
| `/blog/top-soc-service-providers-in-india-secure-your-business` (including trailing slash) — provider selection/comparison | 2 | 4,285 | Keep. This is the strongest exposed SOC article in the export, with a distinct comparison intent. |
| `/blog/soc-as-a-service-for-indian-organizations` — delivery-model explainer | 0 | 69 | Keep; the separate SOC-as-a-Service service page remains live. |
| `/glossary/soc` — definition | 0 | 49 | Keep as a definitional page. |

For context, the query export includes `soc service providers in india` (463 impressions), `managed soc services in india` (278), and `soc services in india` (218), all with zero clicks. **Do not join these query totals to individual URL totals**: the exports have no shared query/page dimension. The earlier cannibalisation workbook was not supplied.

The surviving managed-SOC explainer and provider-selection post now both link to the commercial service page with descriptive anchor text. Existing retired root SOC paths keep their direct service redirects. No SOC 2 compliance, glossary, provider-comparison, or SOC-as-a-Service URL was redirected.

## Local verification

- Typecheck and production build passed; development workflow restarted cleanly.
- `/blog/soc-services-in-india`, its slash variant and its query-string variant each return one-hop HTTP 301 to the service URL (preserving query parameters); the old root `/soc-services-in-india` also returns a direct 301.
- The service, managed-SOC guide and provider-comparison article return HTTP 200. Both retained articles link to the service. The redirected blog article is absent from the sitemap, blog listing/pagination, and generated full AI content export.

## Follow-up evidence

For any broader consolidation, obtain a Search Console API export with both `query` and `page` dimensions (or filter each priority query in Search Console, then export its **Pages** tab). Compare which URLs actually share impressions for each search, clicks, intent, external links, and the same date range. Seek explicit approval for every proposed live-URL redirect and monitor indexing and query/page performance after publishing. The redirect checked here is a local workspace change, not proof of a production ranking gain.