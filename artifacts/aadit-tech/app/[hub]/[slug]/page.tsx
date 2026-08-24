import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { services } from "@/.velite"
import { getService, getRelated } from "@/lib/services"
import { ServicePageTemplate } from "@/components/service-page-template"
import { buildMetadata } from "@/lib/seo"

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
  return buildMetadata({
    path: service.permalink,
    title: service.heading ?? service.title,
    description: service.metaDescription,
    images: [
      {
        url: `${service.permalink}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${service.heading ?? service.title} from Aadit Technologies`,
      },
    ],
  })
}

export default async function ServiceChildPage({ params }: PageParams) {
  const { hub, slug } = await params
  const service = getService(hub, slug)
  if (!service) notFound()

  return (
    <ServicePageTemplate service={service} related={getRelated(service.related)} />
  )
}
