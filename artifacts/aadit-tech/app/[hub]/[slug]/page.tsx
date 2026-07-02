import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { services } from "@/.velite"
import { getService, getRelated } from "@/lib/services"
import { ServicePageTemplate } from "@/components/service-page-template"

interface PageParams {
  params: Promise<{ hub: string; slug: string }>
}

export function generateStaticParams() {
  return services.map((service) => ({ hub: service.hub, slug: service.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { hub, slug } = await params
  const service = getService(hub, slug)
  if (!service) return {}
  return {
    title: `${service.title} | Aadit Technologies`,
    description: service.metaDescription,
  }
}

export default async function ServiceChildPage({ params }: PageParams) {
  const { hub, slug } = await params
  const service = getService(hub, slug)
  if (!service) notFound()

  return (
    <ServicePageTemplate service={service} related={getRelated(service.related)} />
  )
}
