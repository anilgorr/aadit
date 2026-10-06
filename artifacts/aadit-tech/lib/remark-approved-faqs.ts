import path from "node:path"
import suppliedFaqs from "../content/approved-blog-faqs.json"

interface MarkdownNode {
  type: string
  depth?: number
  value?: string
  children?: MarkdownNode[]
}

const approved: Record<string, { question: string; answer: string }[]> = suppliedFaqs
const nodeText = (node: MarkdownNode): string =>
  node.value ?? node.children?.map(nodeText).join("") ?? ""

/** Owner-approved October pack replaces old FAQ copy at MDX compile time. */
export function remarkApprovedFaqs() {
  return (tree: MarkdownNode, file: { path?: string; history?: string[] }) => {
    const filename = file.path ?? file.history?.[0] ?? ""
    if (!filename.replaceAll("\\", "/").includes("/posts/")) return
    const faqs = approved[path.basename(filename, ".mdx")]
    if (!faqs) return
    let faqDepth: number | undefined
    const body: MarkdownNode[] = []
    for (const node of tree.children ?? []) {
      if (node.type === "heading" && /frequently asked questions|f\.?a\.?q\.?s?\b/i.test(nodeText(node))) {
        faqDepth = node.depth
        continue
      }
      if (faqDepth !== undefined) {
        if (node.type === "heading" && (node.depth ?? 6) <= faqDepth) faqDepth = undefined
        else continue
      }
      body.push(node)
    }
    body.push({ type: "heading", depth: 2, children: [{ type: "text", value: "Frequently asked questions" }] })
    for (const faq of faqs) {
      body.push(
        { type: "heading", depth: 3, children: [{ type: "text", value: faq.question }] },
        { type: "paragraph", children: [{ type: "text", value: faq.answer }] },
      )
    }
    tree.children = body
  }
}
