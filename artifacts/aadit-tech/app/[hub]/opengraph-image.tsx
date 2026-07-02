import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"
import { HUBS, HUB_ORDER, isHub } from "@/lib/services"

export const alt = "Aadit Technologies"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return HUB_ORDER.map((hub) => ({ hub }))
}

export default async function HubOpengraphImage({
  params,
}: {
  params: Promise<{ hub: string }>
}) {
  const { hub } = await params
  const title = isHub(hub) ? HUBS[hub].title : "Aadit Technologies"
  return renderOgImage({ eyebrow: "Aadit Technologies", title })
}
