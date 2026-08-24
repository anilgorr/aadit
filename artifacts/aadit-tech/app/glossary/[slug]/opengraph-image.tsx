import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"
import { GLOSSARY, getTerm } from "@/lib/glossary"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return GLOSSARY.map((term) => ({ slug: term.slug }))
}

export default async function GlossaryOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const term = getTerm(slug)

  return renderOgImage({
    eyebrow: "Security & Compliance Glossary",
    title: term ? `${term.term}: ${term.fullForm ?? "Definition"}` : "Security & Compliance Glossary",
  })
}