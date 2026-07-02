import type { Metadata } from "next"
import { BlogIndex } from "@/components/blog-index"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  title: "Insights & Blog",
  description:
    "Practical perspectives on cybersecurity, compliance, and managed IT from the Aadit Technologies team.",
})

export default function BlogPage() {
  return <BlogIndex page={1} />
}
