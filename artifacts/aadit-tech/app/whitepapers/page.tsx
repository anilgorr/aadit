import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { ResourceListing } from "@/components/resource-listing"
import { getResources } from "@/lib/resources"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/whitepapers",
  title: "Whitepapers",
  description:
    "Read in-depth whitepapers from Aadit Technologies on cybersecurity, compliance, and managed IT, with technical guidance for secure and compliant systems.",
})

export default function WhitepapersPage() {
  return (
    <ResourceListing
      title="Whitepapers"
      tagline="In-depth research and technical guidance on cybersecurity, compliance, and managed IT."
      href="/whitepapers"
      icon={FileText}
      resources={getResources("whitepaper")}
    />
  )
}
