import type { Metadata } from "next"
import { BlogIndex } from "@/components/blog-index"

export const metadata: Metadata = {
  title: "Insights & Blog | Aadit Technologies",
  description:
    "Practical perspectives on cybersecurity, compliance, and managed IT from the Aadit Technologies team.",
}

export default function BlogPage() {
  return <BlogIndex page={1} />
}
