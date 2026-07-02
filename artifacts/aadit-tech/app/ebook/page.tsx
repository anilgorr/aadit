import type { Metadata } from "next"
import { BookOpen } from "lucide-react"
import { ResourceListing } from "@/components/resource-listing"
import { getResources } from "@/lib/resources"

export const metadata: Metadata = {
  title: "eBooks | Aadit Technologies",
  description:
    "Practical eBooks and guides on building secure, compliant, and resilient IT from the Aadit Technologies team.",
}

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
