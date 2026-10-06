import { readFile } from "node:fs/promises"
import path from "node:path"
import assert from "node:assert/strict"
import redirectedPosts from "../lib/redirected-posts.json" with { type: "json" }
import approvedFaqs from "../content/approved-blog-faqs.json" with { type: "json" }

const root = process.cwd()
const built = path.join(root, ".next/server/app")
const text = (value) => value.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
  .replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'")
  .replace(/&quot;/g, '"').replace(/\s+/g, " ").trim()
const xml = await readFile(path.join(built, "sitemap.xml.body"), "utf8")
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const llms = await readFile("public/llms.txt", "utf8")
const full = await readFile("public/llms-full.txt", "utf8")
const sorted = (items) => [...new Set(items)].sort()
assert.deepEqual(sorted(urls), sorted([...llms.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((m) => m[1])))
assert.deepEqual(sorted(urls), sorted([...full.matchAll(/^URL: (.+)$/gm)].map((m) => m[1])))

const titles = {
  "blog/cloud-migration-services-in-india-strategy-benefits-best-practices": "Cloud Migration Services in India: A Practical Guide",
  "blog/common-computer-attacks-guide": "Common Computer Attacks and How to Prevent Them",
  "blog/cross-domain-attacks-threats-mitigation": "Cross-Domain Attacks: Threats and Mitigation | Aadit",
  "blog/cscrf-cybersecurity-and-cyber-resilience-framework-india": "CSCRF Explained: SEBI Cyber Resilience Rules | Aadit",
  "blog/cyber-security-in-india-trends-challenges-growth": "Cyber Security in India: Trends and Challenges",
  "blog/cybersecurity-compliance-next-gen-soc-2025": "Cybersecurity Compliance and SOC Monitoring | Aadit",
  "blog/iso-42001-certification-consulting-india": "ISO 42001 Certification Consulting in India | Aadit",
  "blog/soc-as-a-service-for-indian-organizations": "SOC as a Service for Indian Businesses | Aadit",
  "blog/top-10-cybersecurity-strategies-to-strengthen-your-enterprise-security": "10 Cybersecurity Strategies for Enterprises | Aadit",
  "blog/top-cyber-security-companies-in-india-safeguarding-digital-future": "Top Cyber Security Companies in India | Aadit",
  "compare/soc-2-vs-iso-27001": "SOC 2 vs ISO 27001: Which Comes First? | Aadit",
  "glossary/managed-it-services": "What Are Managed IT Services? | Aadit Technologies",
  "resources/soc-2-checklist": "SOC 2 Readiness Checklist | Aadit Technologies",
}
const descriptions = {
  "blog/cloud-migration-services-in-india-strategy-benefits-best-practices": "How cloud migration works for Indian businesses: planning, cost control, performance, and the practices that keep downtime low during a move.",
  "blog/best-vapt-tools-for-security-testing-aadit-technologies": "A practical comparison of the VAPT tools security teams actually use, what each one finds, where automated scanning stops, and how to choose.",
  "blog/cyber-security-in-india-trends-challenges-growth": "Cyber security in India: the threat trends shaping the market, the challenges organisations face, and where demand is growing fastest.",
  "blog/top-cyber-security-companies-in-india-safeguarding-digital-future": "How to choose a cyber security company in India: what to check on capability, certifications, response times and reporting before you shortlist.",
  "glossary/managed-it-services": "Managed IT services explained: what is included, how pricing works, how it differs from break-fix support, and when outsourcing IT makes sense.",
  "resources/soc-2-checklist": "A practical SOC 2 readiness checklist: the controls auditors examine, the evidence you need to collect, and the sequence that avoids a failed audit.",
}
const minima = {
  cybersecurity: 1200, compliance: 1200, "it-managed-services": 1200,
  glossary: 800, industries: 600, "compare/soc-2-vs-iso-27001": 1200,
  "industries/startups": 800, "industries/healthcare-bfsi": 800, "industries/ecommerce-fintech": 800,
  ...Object.fromEntries(["vapt", "soc", "siem", "iso-27001", "gdpr", "pci-dss", "hipaa", "soc-2"].map((s) => [`glossary/${s}`, 800])),
}
function schemas(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((m) => { const value = JSON.parse(m[1]); return Array.isArray(value) ? value : value["@graph"] ?? [value] })
}
let checked = 0
for (const url of urls) {
  const route = new URL(url).pathname.slice(1)
  const html = await readFile(path.join(built, `${route || "index"}.html`), "utf8")
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: must have one H1`)
  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*>/)?.[0].match(/href="([^"]+)"/)?.[1]
  assert.ok(canonical, `${route}: missing canonical`)
  assert.equal(new URL(canonical).href, new URL(url).href, `${route}: canonical`)
  const data = schemas(html)
  for (const slug of redirectedPosts) assert.ok(!html.includes(`href="/blog/${slug}"`), `${route}: link to redirected ${slug}`)
  if (titles[route]) {
    const actual = text(html.match(/<title>(.*?)<\/title>/s)[1])
    assert.equal(actual, titles[route])
    assert.ok(actual.length <= 60)
    assert.ok(html.includes(`property="og:title" content="${actual.replaceAll("&", "&amp;").replaceAll('"', "&quot;")}"`), `${route}: OG title`)
  }
  if (descriptions[route]) assert.equal(text(html.match(/<meta name="description" content="([^"]*)"/)[1]), descriptions[route])
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1]
  const supplied = approvedFaqs[route.replace(/^blog\//, "")]
  if (route.startsWith("blog/") && supplied) {
    const blocks = data.filter((s) => s["@type"] === "FAQPage")
    assert.equal(blocks.length, 1, `${route}: must have one FAQPage block`)
    assert.deepEqual(blocks[0].mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })), supplied)
    assert.equal((main.match(/<h2[^>]*>Frequently asked questions<\/h2>/g) ?? []).length, 1, `${route}: duplicated FAQ heading`)
    for (const faq of supplied) {
      assert.ok(text(main).includes(faq.question), `${route}: question not visible`)
      assert.ok(text(main).includes(faq.answer.replace(/\s+/g, " ").trim()), `${route}: answer not visible`)
      assert.ok([...main.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].some((m) => text(m[1]) === faq.question), `${route}: question must be an H3`)
    }
  }
  if (route === "glossary/managed-it-services" || route === "resources/soc-2-checklist") {
    const count = route.startsWith("glossary/") ? 5 : 6
    assert.equal(data.find((s) => s["@type"] === "FAQPage")?.mainEntity.length, count)
    assert.ok(data.some((s) => s["@type"] === (route.startsWith("glossary/") ? "DefinedTerm" : "Article")))
    assert.ok(data.some((s) => s["@type"] === "BreadcrumbList"))
    assert.ok(main.includes("<table"), `${route}: comparison or sequence table missing`)
    assert.ok(full.includes(`URL: ${url}`))
  }
  const count = text(main).split(/\s+/).length
  if (minima[route]) {
    assert.ok(count >= minima[route], `${route}: ${count} words, needs ${minima[route]}`)
    console.log(`${route}: ${count} words`)
  }
  if (["cybersecurity", "compliance", "it-managed-services"].includes(route)) {
    assert.equal(data.find((s) => s["@type"] === "FAQPage").mainEntity.length, 6)
  }
  if (route.startsWith("authors/")) assert.ok(data.some((s) => s["@type"] === "Person" && s.url === url))
  const org = data.find((s) => [].concat(s["@type"]).includes("Organization"))
  assert.ok(org && org.areaServed.length === 3)
  assert.ok(org.sameAs.includes("https://www.crunchbase.com/organization/aadit-technologies"))
  assert.ok(!org.sameAs.some((u) => /PLACE_ID|LINKEDIN_PROFILE|ensun.io\/search/.test(u)))
  assert.ok(!org.aggregateRating, "Do not publish a manually maintained review rating.")
  checked++
}
for (const slug of redirectedPosts) {
  const url = `/blog/${slug}`
  assert.ok(!xml.includes(url) && !llms.includes(url) && !full.includes(`URL: https://aadit.net${url}\n`))
}
for (const slug of Object.keys(approvedFaqs)) {
  assert.ok(urls.some((url) => new URL(url).pathname === `/blog/${slug}`), `Approved FAQ post missing from sitemap: ${slug}`)
}
const serviceParent = await readFile(path.join(built, "compliance/soc2.html"), "utf8")
const itParent = await readFile(path.join(built, "it-managed-services/managed-it-services.html"), "utf8")
const glossaryIndex = await readFile(path.join(built, "glossary.html"), "utf8")
assert.ok(serviceParent.includes('href="/resources/soc-2-checklist"'))
assert.ok(itParent.includes('href="/glossary/managed-it-services"'))
assert.ok(glossaryIndex.includes('href="/glossary/managed-it-services"'))
assert.ok(llms.includes("## Common questions") && llms.includes("What are managed IT services?") && llms.includes("What do we need for SOC 2?"))
const authorPage = await readFile(path.join(built, "authors/suman-kv.html"), "utf8")
assert.ok(text(authorPage.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1]).includes("where security programmes decay once the auditor leaves"))
assert.ok(!authorPage.includes("LINKEDIN_PROFILE"))
console.log(`Passed: ${Object.keys(approvedFaqs).length} approved FAQ posts (${Object.values(approvedFaqs).flat().length} questions), both new pages, parent links and expanded author copy.`)
console.log(`Passed: ${checked} canonical pages, metadata replacements, schema, word targets, internal links and matching AI inventories.`)
