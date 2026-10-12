import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import path from "node:path"

const built = path.join(process.cwd(), ".next/server/app")
const pages = JSON.parse(await readFile(".velite/resourcePages.json", "utf8"))
const routes = ["/resources/vapt-report-sample", "/compliance/iso-27001/india", "/compliance/iso-27001/cost"]
const xml = await readFile(path.join(built, "sitemap.xml.body"), "utf8")
const llms = await readFile("public/llms.txt", "utf8")
const full = await readFile("public/llms-full.txt", "utf8")
const inventory = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
assert.equal(new Set(inventory).size, inventory.length, "Sitemap must not contain duplicate URLs")

function plain(html) {
  return html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"').replace(/\s+/g, " ").trim()
}
function schemas(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => {
      const value = JSON.parse(match[1])
      return Array.isArray(value) ? value : value["@graph"] ?? [value]
    })
}
for (const route of routes) {
  const page = pages.find((item) => item.permalink === route)
  assert.ok(page, `${route}: editorial content missing`)
  const html = await readFile(path.join(built, `${route.slice(1)}.html`), "utf8")
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]
  assert.ok(main, `${route}: main missing`)
  const text = plain(main)
  assert.ok(text.split(/\s+/).length >= 900, `${route}: incomplete guide`)
  assert.equal((main.match(/<h1\b/g) ?? []).length, 1)
  assert.equal(plain(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? ""), page.seoTitle)
  assert.ok(page.seoTitle.length <= 60)
  assert.equal(plain(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ""), page.metaDescription)
  assert.ok(page.metaDescription.length >= 120 && page.metaDescription.length <= 160)
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]
  assert.ok(canonical?.endsWith(route))
  const meta = (name) => html.match(new RegExp(`<meta (?:property|name)="${name}" content="([^"]*)"`))?.[1]
  assert.equal(meta("og:title"), page.seoTitle)
  assert.equal(meta("og:description"), page.metaDescription)
  assert.equal(meta("og:url"), canonical)
  assert.equal(meta("og:type"), "article")
  assert.equal(meta("twitter:title"), page.seoTitle)
  assert.equal(meta("twitter:description"), page.metaDescription)
  assert.equal(meta("twitter:card"), "summary_large_image")
  assert.ok(meta("og:image") && meta("twitter:image"))
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html))

  const data = schemas(html)
  const article = data.find((item) => item["@type"] === "Article")
  const webPage = data.find((item) => item["@type"] === "WebPage")
  const faq = data.filter((item) => item["@type"] === "FAQPage")
  assert.ok(article && webPage)
  assert.equal(article.url, canonical)
  for (const item of [article, webPage]) {
    assert.equal(item.datePublished, page.publishedAt)
    assert.equal(item.dateModified, page.updatedAt ?? page.publishedAt)
  }
  assert.ok(text.includes("Last updated: 12 October 2026"))
  assert.equal(faq.length, 1)
  assert.deepEqual(faq[0].mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })), page.faqs)
  for (const item of page.faqs) {
    assert.ok(text.includes(item.question) && text.includes(item.answer))
    assert.ok([...main.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].some((match) => plain(match[1]) === item.question))
  }
  const breadcrumbs = data.find((item) => item["@type"] === "BreadcrumbList")
  assert.ok(breadcrumbs)
  assert.deepEqual(breadcrumbs.itemListElement.map((item) => item.name), ["Home", ...page.breadcrumbs.map((item) => item.label), page.title])
  assert.equal(breadcrumbs.itemListElement.at(-1).item, canonical)
  const entry = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].find((match) => match[1].includes(`<loc>${canonical}</loc>`))?.[1]
  assert.ok(entry?.includes(`<lastmod>${page.updatedAt ?? page.publishedAt}</lastmod>`))
  assert.ok(llms.includes(`](${canonical})`))
  const exported = full.split(`URL: ${canonical}\n`)[1]?.split("\n\n## ")[0]
  assert.ok(exported?.includes(page.faqs[0].answer))
  for (const match of main.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = match[1]
    assert.ok(inventory.some((url) => new URL(url).pathname === href), `${route}: broken internal link ${href}`)
  }
  assert.ok(main.includes('href="/contact"'))
  if (route.includes("vapt")) {
    assert.ok(text.includes("Illustrative example only.") && text.includes("not a redacted client report"))
    assert.ok(exported.includes("Illustrative example only."))
    assert.ok(!main.includes("download="), "Do not claim a client report download")
  } else if (route.endsWith("/cost")) {
    assert.ok(text.includes("No universal price or unverified price range is quoted here."))
    assert.ok(!/₹|\bINR\s*\d|Rs\.?\s*\d/.test(text), "No unapproved price claims")
  }
  console.log(`${route}: metadata, FAQs, breadcrumbs, dates, links and AI export passed`)
}
for (const [route, targets] of [
  ["/cybersecurity/vapt", [routes[0]]],
  ["/compliance/iso-27001", [routes[1], routes[2]]],
]) {
  const html = await readFile(path.join(built, `${route.slice(1)}.html`), "utf8")
  for (const target of targets) assert.ok(html.includes(`href="${target}"`), `${route}: missing link to ${target}`)
}
console.log("Passed: all three new guides and their existing parent routes.")
