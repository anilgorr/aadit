import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, RefreshCw } from "lucide-react"
import { posts } from "@/.velite"
import { getPost, getRelatedPosts, formatDate } from "@/lib/blog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { MDXContent } from "@/components/mdx-content"
import { TableOfContents } from "@/components/table-of-contents"
import { BlogCard } from "@/components/blog-card"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata, articleSchema } from "@/lib/seo"

interface PageParams {
  params: Promise<{ slug: string }>
}

const proseComponents = {
  h2: (props: Record<string, unknown>) => (
    <h2
      className="mb-4 mt-12 scroll-mt-28 text-2xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props: Record<string, unknown>) => (
    <h3
      className="mb-3 mt-8 scroll-mt-28 text-xl font-bold text-foreground"
      {...props}
    />
  ),
  h4: (props: Record<string, unknown>) => (
    <h4
      className="mb-2 mt-6 scroll-mt-28 text-lg font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props: Record<string, unknown>) => (
    <p className="mb-5 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props: Record<string, unknown>) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  ol: (props: Record<string, unknown>) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  li: (props: Record<string, unknown>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: Record<string, unknown>) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      {...props}
    />
  ),
  strong: (props: Record<string, unknown>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  blockquote: (props: Record<string, unknown>) => (
    <blockquote
      className="my-6 border-l-4 border-primary/40 pl-5 italic text-muted-foreground"
      {...props}
    />
  ),
  code: (props: Record<string, unknown>) => (
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm" {...props} />
  ),
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return buildMetadata({
    path: post.permalink,
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    authors: [post.author.name],
    ...(post.cover ? { images: [{ url: post.cover.src }] } : {}),
  })
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)
  const readingTime = Math.max(1, Math.ceil(post.metadata.readingTime))

  const schema = articleSchema({
    title: post.title,
    description: post.description,
    path: post.permalink,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    authorName: post.author.name,
    image: post.cover?.src,
  })

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={schema} />

        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title, href: post.permalink },
              ]}
            />
            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  {post.author.role && <p className="text-xs">{post.author.role}</p>}
                </div>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              {post.updatedAt && (
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4" />
                  Updated {formatDate(post.updatedAt)}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readingTime} min read
              </span>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_16rem]">
            <article className="mx-auto w-full max-w-3xl">
              <MDXContent code={post.content} components={proseComponents} />
            </article>
            {post.toc.length >= 3 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <TableOfContents toc={post.toc} />
                </div>
              </aside>
            )}
          </div>
        </Section>

        {related.length > 0 && (
          <Section background="muted">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
          </Section>
        )}
      </main>
      <Footer />
    </div>
  )
}
