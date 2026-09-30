import type { Metadata } from "next"
import { BlogIndex } from "@/components/blog-index"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  title: "Insights & Blog",
  description:
    "Read Aadit Technologies articles on cybersecurity, compliance and managed IT, including guidance on security operations, testing, standards, and technology.",
})

export default function BlogPage() {
  return <BlogIndex page={1} />
}
