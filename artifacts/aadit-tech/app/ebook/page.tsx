import type { Metadata } from "next"
import { BookOpen } from "lucide-react"
import { ResourceListing } from "@/components/resource-listing"
import { getResources } from "@/lib/resources"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/ebook",
  title: "eBooks",
  description:
    "Browse eBooks and guides from Aadit Technologies on building secure, compliant, and resilient IT systems, with practical guidance for organisations.",
})

export default function EbookPage() {
  return (
    <ResourceListing
      title="eBooks"
      tagline="Practical, in-depth guides to help you build secure, compliant, and resilient systems."
      href="/ebook"
      icon={BookOpen}
      resources={getResources("ebook")}
    />
  )
}
