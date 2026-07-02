import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogIndex } from "@/components/blog-index"
import { getTotalPages } from "@/lib/blog"
import { buildMetadata } from "@/lib/seo"

interface PageParams {
  params: Promise<{ page: string }>
}

export function generateStaticParams() {
  const total = getTotalPages()
  // Page 1 is served at /blog; generate 2..total here.
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { page } = await params
  return buildMetadata({
    path: `/blog/page/${page}`,
    title: `Insights & Blog — Page ${page}`,
    description:
      "Practical perspectives on cybersecurity, compliance, and managed IT from the Aadit Technologies team.",
  })
}

export default async function BlogPaginatedPage({ params }: PageParams) {
  const { page } = await params
  const pageNumber = Number(page)
  if (!Number.isInteger(pageNumber) || pageNumber < 2) notFound()
  return <BlogIndex page={pageNumber} />
}
