---
name: Aadit blog migration & de-duplication
description: How legacy blog posts were migrated to MDX, which near-duplicate clusters were collapsed, and where redirects/resources live.
---

# Aadit blog migration (legacy → MDX)

Source: `content-source/blog-posts-part1.md` + `part2.md` (regular blocks: `## URL (preserve exact slug):`, `## Title:`, `## Meta description:`, optional `Published: | Author: | Est. reading time:`, then `# H1` + body). 49 legacy URLs = 47 blog + 1 whitepaper + 1 ebook → 32 surviving MDX posts + 15 blog 301s (welcome post pre-existing = 33 files).

## Durable decisions
- **De-dup = keep one canonical per topic, 301 the rest** into `next.config.ts` `redirects()` (`permanent:true` → Next emits 308, SEO-safe). Never delete a legacy slug — always redirect so indexed URLs/backlinks survive.
- Canonical picks: VAPT cluster → `vapt-full-form-...` (chosen for the high-impression "vapt full form" GSC query, not just word count); Managed SOC → `managed-soc-services-in-india`; Bangalore → `cyber-security-companies-bangalore`; India listicle → `top-cyber-security-companies-in-india-safeguarding-digital-future`; SOC2 → `soc-2-compliance-services-india`; cloud-cost → `cloud-cost-optimization-indian-businesses`.
- **Special case**: `iso-27001-consulting-india` had an ISO-27001 title but generic managed-IT body → redirected to the real service page `/compliance/iso-27001` (do NOT publish mismatched title/body).
- **Part2 source had NO publish dates** → assigned staggered 2025 `publishedAt` (part1 used real source dates). `updatedAt` = migration date (honest refresh). **These assigned dates are placeholders the client can correct.**
  **Why:** source simply lacked the data; documented so a future edit doesn't mistake them for authoritative.
- Read time + TOC are auto-computed by Velite (`s.metadata()`, `s.toc()`); related posts auto-computed by shared tags in `lib/blog.ts`. So MDX only needs frontmatter + clean body (strip the H1 — template renders title).
- **Body cleaning rules**: strip editorial `NOTE:`/`NOTE FOR MIGRATION:` lines, strip lone `---` boundaries, remove the CERT-In placeholder parenthetical, normalize "FAQ ... about VAPT" headings on non-VAPT posts. No markdown tables allowed in MDX (the only source table sat in a redirected post).

## Whitepaper / ebook
- Resources use `lib/resources.ts` (listing model: title/description/gated/fileUrl — **no article-body detail page**). Whitepaper + ebook added as `gated:true` because **real PDF assets were missing** (ebook's live download link was empty). Gated card → "Request Access" → /contact instead of a broken link. When client supplies PDFs, set `fileUrl` (+ `gated:false` if ungated).
