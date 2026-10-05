import { readFile } from "node:fs/promises"
import path from "node:path"
import assert from "node:assert/strict"
import redirectedPosts from "../lib/redirected-posts.json" with { type: "json" }

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
}
const descriptions = {
  "blog/cloud-migration-services-in-india-strategy-benefits-best-practices": "How cloud migration works for Indian businesses: planning, cost control, performance, and the practices that keep downtime low during a move.",
  "blog/best-vapt-tools-for-security-testing-aadit-technologies": "A practical comparison of the VAPT tools security teams actually use, what each one finds, where automated scanning stops, and how to choose.",
  "blog/cyber-security-in-india-trends-challenges-growth": "Cyber security in India: the threat trends shaping the market, the challenges organisations face, and where demand is growing fastest.",
  "blog/top-cyber-security-companies-in-india-safeguarding-digital-future": "How to choose a cyber security company in India: what to check on capability, certifications, response times and reporting before you shortlist.",
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
console.log(`Passed: ${checked} canonical pages, metadata replacements, schema, word targets, internal links and matching AI inventories.`)
