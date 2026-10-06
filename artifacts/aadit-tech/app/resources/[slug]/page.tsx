import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { resourcePages } from "@/.velite"
import { EditorialPage } from "@/components/editorial-page"
import { buildMetadata } from "@/lib/seo"

interface PageParams { params: Promise<{ slug: string }> }
const pages = resourcePages.filter((page) => page.permalink.startsWith("/resources/"))

export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })) }
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const page = pages.find((item) => item.slug === slug)
  return page ? buildMetadata({ path: page.permalink, title: page.title, absoluteTitle: page.seoTitle, description: page.metaDescription, type: "article", publishedTime: page.publishedAt, modifiedTime: page.updatedAt ?? page.publishedAt }) : {}
}
export default async function ResourcePage({ params }: PageParams) {
  const { slug } = await params
  const page = pages.find((item) => item.slug === slug)
  if (!page) notFound()
  return <EditorialPage page={page} />
}
