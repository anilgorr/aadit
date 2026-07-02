import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt = "Aadit Technologies — Cybersecurity, Compliance & IT Managed Services"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Security · Compliance · IT",
    title: "Cybersecurity, Compliance & IT Managed Services",
  })
}
