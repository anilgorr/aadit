import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { resourcePages } from "@/.velite"
import { EditorialPage } from "@/components/editorial-page"
import { buildMetadata } from "@/lib/seo"

interface PageParams {
  params: Promise<{ hub: string; slug: string; topic: string }>
}

// Keep the existing hub and service routes authoritative. Only explicitly
// authored ISO 27001 guides can resolve at this additional nesting level.
const pages = resourcePages.filter((page) => page.permalink.startsWith("/compliance/iso-27001/"))

export function generateStaticParams() {
  return pages.map((page) => ({ hub: "compliance", slug: "iso-27001", topic: page.slug }))
}

async function findPage(params: PageParams["params"]) {
  const { hub, slug, topic } = await params
  return pages.find((page) => page.permalink === `/${hub}/${slug}/${topic}`)
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const page = await findPage(params)
  return page ? buildMetadata({
    path: page.permalink, absoluteTitle: page.seoTitle,
    description: page.metaDescription, type: "article",
    publishedTime: page.publishedAt, modifiedTime: page.updatedAt ?? page.publishedAt,
  }) : {}
}

export default async function ComplianceGuidePage({ params }: PageParams) {
  const page = await findPage(params)
  if (!page) notFound()
  return <EditorialPage page={page} />
}
