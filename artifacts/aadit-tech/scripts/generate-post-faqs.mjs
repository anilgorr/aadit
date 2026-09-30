import { readdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const directory = path.join(root, "content", "posts")

// This article's FAQ is about ISO consulting prices, not vulnerability scanning.
// Do not amplify that mismatched content in structured data.
const excluded = new Set([
  "vulnerability-scanning-tools-fix-security-gaps-before-hackers-do",
  // These two old posts redirect elsewhere and are not rendered as articles.
  "services-vapt-network-vapt",
  "understanding-the-digital-personal-data-protection-act-dpdp-act-in-india",
  "soc-services-in-india",
])

function plain(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function extractFaqs(source) {
  const lines = source.split(/\r?\n/)
  const faqs = []
  let inFaq = false
  let current = null

  function flush() {
    if (current?.question && current.answer.length) {
      const answer = plain(current.answer.join(" "))
      if (answer) faqs.push({ question: plain(current.question), answer })
    }
    current = null
  }

  for (const line of lines) {
    const heading = line.match(/^(#{2,6})\s+(.+)$/)
    if (heading && /(?:frequently asked questions|f\.?a\.?q\.?s?\b)/i.test(heading[2])) {
      flush()
      inFaq = true
      continue
    }
    if (!inFaq) continue

    const headingQuestion = heading?.[2].replace(/^(?:Q?\d+[.:]\s*)/i, "").trim()
    const boldQuestion = line.match(/^\*\*(?:Q\d*[:.]\s*)?([^*]+\?)\*\*\s*$/i)
    const question = headingQuestion?.endsWith("?") ? headingQuestion : boldQuestion?.[1]
    if (question) {
      flush()
      current = { question, answer: [] }
      continue
    }
    if (heading) {
      // A non-question heading ends this FAQ block, even when it is nested.
      flush()
      inFaq = false
      continue
    }
    if (current && line.trim()) {
      current.answer.push(line.replace(/^(?:\*\*A:\*\*|A:)\s*/i, "").trim())
    }
  }
  flush()
  return faqs
}

const results = {}
for (const file of (await readdir(directory)).filter((name) => name.endsWith(".mdx")).sort()) {
  const slug = file.slice(0, -4)
  if (excluded.has(slug)) continue
  const faqs = extractFaqs(await readFile(path.join(directory, file), "utf8"))
  if (faqs.length) results[slug] = faqs
}

await writeFile(path.join(root, "content", "post-faqs.json"), `${JSON.stringify(results, null, 2)}\n`)
console.log(`Generated FAQ schema data for ${Object.keys(results).length} blog posts`)