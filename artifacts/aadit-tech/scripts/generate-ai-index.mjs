import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"

// The built sitemap is the only URL inventory. Read rendered <main> content so
// new authors, glossary entries and editorial sections cannot drift from it.
const root = process.cwd()
const output = path.join(root, process.env.NEXT_DIST_DIR ?? ".next", "server", "app")
const xml = await readFile(path.join(output, "sitemap.xml.body"), "utf8")
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
if (!urls.length) throw new Error("The sitemap contains no URLs; refusing an empty AI index.")
function decode(text) {
  return text.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&quot;/g, '"').replace(/&#x27;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
}
function plain(html) {
  return decode(html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<\/(?:p|li|h[1-6]|section|div|tr)>/gi, "\n")
    .replace(/<[^>]+>/g, " ").replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n").trim())
}
// Preserve the existing, approved entity disambiguation independently of the
// automatically discovered inventory. Both exports use the same identity facts.
const identity = (await readFile(path.join(root, "content/company-identity.md"), "utf8")).trim()
const index = [identity, "", "Full plain-text content: /llms-full.txt", "", "## Canonical pages"]
const full = [identity.replace(/^# Aadit Technologies/, "# Aadit Technologies — Full Content Export"), "", "> Canonical page inventory and rendered content from the same build as sitemap.xml.", ""]
for (const url of urls) {
  const pathname = new URL(url).pathname
  const file = pathname === "/" ? "index.html" : `${decodeURIComponent(pathname).slice(1)}.html`
  const html = await readFile(path.join(output, file), "utf8")
  const title = plain(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? pathname)
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]
  if (!main) throw new Error(`No rendered main content found for ${url}`)
  index.push(`- [${title}](${url})`)
  full.push(`## ${title}`, `URL: ${url}`, "", plain(main), "")
}
await Promise.all([
  writeFile(path.join(root, "public/llms.txt"), `${index.join("\n")}\n`),
  writeFile(path.join(root, "public/llms-full.txt"), `${full.join("\n\n")}\n`),
])
console.log(`Generated both AI exports from ${urls.length} canonical sitemap pages.`)
