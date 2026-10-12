import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import home from '../content/homepage.json' with { type: 'json' }

const html = await readFile('.next/server/app/index.html', 'utf8')
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]
assert.ok(main, 'Homepage must have a main landmark')
const normalize = (value) => value
  .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&#x27;|&apos;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .replace(/\s+([.,;:!?])/g, '$1').trim()
const text = normalize(main)
assert.equal((main.match(/<h1\b/g) ?? []).length, 1)
assert.ok(text.includes(home.heading))
assert.ok(text.includes(normalize(home.intro)))
assert.ok(text.split(/\s+/).length >= 1100, 'Homepage must have 1,100+ visible words')
const nodes = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
  .flatMap((match) => {
    const value = JSON.parse(match[1])
    return Array.isArray(value) ? value : value['@graph'] ?? [value]
  })
const faq = nodes.find((node) => node['@type'] === 'FAQPage')
assert.ok(faq, 'Homepage must have FAQPage schema')
assert.equal(faq.mainEntity.length, 6)
for (const [i, item] of home.faqs.entries()) {
  assert.equal(faq.mainEntity[i].name, item.question)
  assert.equal(faq.mainEntity[i].acceptedAnswer.text, item.answer)
  assert.ok(text.includes(normalize(item.question)))
  assert.ok(text.includes(normalize(item.answer)))
}
for (const [heading, paragraphs] of Object.entries(home.sections)) {
  assert.ok(text.includes(heading), `Missing editorial heading: ${heading}`)
  for (const paragraph of paragraphs.filter((value) => !value.endsWith('→'))) {
    const visibleCopy = heading === 'Who we work with' ? paragraph.replace(' — ', ' ') : paragraph
    assert.ok(text.includes(normalize(visibleCopy)), `Missing approved copy: ${paragraph}`)
  }
}
for (const [url, anchor] of [
  ['/resources/soc-2-checklist', 'SOC 2 readiness checklist'],
  ['/compliance/dpdp-act', 'DPDP Act'],
  ['/compliance/iso-9001', 'ISO 9001'],
  ['/cybersecurity/email-security', 'email security'],
]) {
  assert.ok(main.includes(`href="${url}"`), `Missing homepage link: ${url}`)
  const links = [...main.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
  assert.ok(links.some((match) => match[1] === url && normalize(match[2]) === anchor), `Wrong link anchor: ${anchor}`)
}
assert.ok(main.includes('aria-labelledby="homepage-takeaways-heading"'))
assert.ok(main.includes(`dateTime="${home.updatedAt}"`) || main.includes(`datetime="${home.updatedAt}"`))
assert.equal(nodes.find((node) => node['@type'] === 'WebPage').dateModified, home.updatedAt)
const sitemap = await readFile('.next/server/app/sitemap.xml.body', 'utf8')
const homepageLastmod = sitemap.match(/<url>\s*<loc>https:\/\/aadit\.net\/?<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/)?.[1]
assert.equal(homepageLastmod?.slice(0, 10), home.updatedAt)
const exportText = await readFile('public/llms-full.txt', 'utf8')
assert.ok(exportText.includes(home.heading))
assert.ok(exportText.includes(home.faqs[2].question))
console.log(`Passed homepage: ${text.split(/\s+/).length} words, all approved copy, 6 matching FAQs, required anchors, takeaways, editorial dates and AI export.`)
