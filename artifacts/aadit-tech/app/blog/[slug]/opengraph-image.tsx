import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"
import { getPost, getAllPosts } from "@/lib/blog"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)

  return renderOgImage({
    eyebrow: "Aadit Technologies Insights",
    title: post?.title ?? "Cybersecurity, Compliance & IT Insights",
  })
}