import { readdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const CONTENT_ROOT = path.join(ROOT, "content")
const SITE_URL = "https://aadit.net"

function parseFrontmatter(source) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
  if (!match) return { attributes: {}, body: source }

  const attributes = Object.fromEntries(
    match[1]
      .split("\n")
      .filter((line) => /^[a-zA-Z][\w-]*:\s+/.test(line))
      .map((line) => {
        const [key, ...rest] = line.split(":")
        return [key, rest.join(":").trim().replace(/^["']|["']$/g, "")]
      }),
  )

  return { attributes, body: source.slice(match[0].length) }
}

function toPlainText(source) {
  return source
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_`>#-]/g, " ")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

async function buildSection(directory, kind) {
  const files = (await readdir(directory)).filter((file) => file.endsWith(".mdx")).sort()
  const parts = []

  for (const file of files) {
    const { attributes, body } = parseFrontmatter(await readFile(path.join(directory, file), "utf8"))
    const slug = attributes.slug ?? file.replace(/\.mdx$/, "")
    const url =
      kind === "service"
        ? `${SITE_URL}/${attributes.hub}/${slug}`
        : `${SITE_URL}/blog/${slug}`
    const heading = attributes.title ?? slug
    parts.push(`## ${heading}\nURL: ${url}\n\n${toPlainText(body)}`)
  }

  return parts
}

const [services, posts] = await Promise.all([
  buildSection(path.join(CONTENT_ROOT, "services"), "service"),
  buildSection(path.join(CONTENT_ROOT, "posts"), "post"),
])

const document = [
  "# Aadit Technologies — Full Content Export",
  "",
  "> Aadit Technologies Pvt. Ltd. is a cybersecurity, compliance, and IT managed-services company based in Bengaluru, India.",
  "",
  ...services,
  ...posts,
].join("\n\n")

await writeFile(path.join(ROOT, "public", "llms-full.txt"), `${document}\n`)