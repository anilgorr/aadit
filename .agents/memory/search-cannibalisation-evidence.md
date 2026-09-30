---
name: Search cannibalisation evidence
description: Evidence standard for deciding whether to consolidate live Aadit search URLs.
---

Do not treat separately aggregated Search Console Pages and Queries exports as a query-to-URL mapping. Request a combined `query` + `page` export for the same date range, or filter a priority query and export its Pages tab, before attributing a query to a specific URL or proposing broad consolidation.

**Why:** The owner supplied aggregate exports in response to a request for cannibalisation evidence. They showed meaningful SOC impressions on several live URLs, but no shared query/page dimension. Redirecting high-exposure pages from those totals alone could lose distinct search intent or useful URLs.

**How to apply:** For SOC and other competing-page decisions, preserve pages with distinct intent unless a source-supported overlap and explicit owner approval justify a targeted 301. Keep one-hop redirects and check the sitemap, internal links and content exports when a URL becomes noncanonical.