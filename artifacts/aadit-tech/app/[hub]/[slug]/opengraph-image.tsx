import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"
import { getService, HUBS } from "@/lib/services"
import { services } from "@/.velite"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return services.map((service) => ({ hub: service.hub, slug: service.slug }))
}

export default async function ServiceOpengraphImage({
  params,
}: {
  params: Promise<{ hub: string; slug: string }>
}) {
  const { hub, slug } = await params
  const service = getService(hub, slug)

  if (!service) {
    return renderOgImage({ eyebrow: "Aadit Technologies", title: "Cybersecurity, Compliance & IT" })
  }

  return renderOgImage({
    eyebrow: HUBS[service.hub].title,
    title: service.heading ?? service.title,
  })
}