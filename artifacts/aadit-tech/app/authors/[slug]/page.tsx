import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { posts } from "@/.velite"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { BlogCard } from "@/components/blog-card"
import { AUTHORS, authorSchema, getAuthor, getAuthorForPost } from "@/lib/authors"
import { buildMetadata, webPageSchema } from "@/lib/seo"

interface PageParams {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return AUTHORS.map((author) => ({ slug: author.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) return {}

  return buildMetadata({
    path: `/authors/${author.slug}`,
    title: `${author.name}, ${author.jobTitle}`,
    description: author.description,
  })
}

export default async function AuthorPage({ params }: PageParams) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) notFound()

  const articles = posts.filter((post) => getAuthorForPost(post).slug === author.slug)
  const schemas = [
    authorSchema(author),
    webPageSchema({
      path: `/authors/${author.slug}`,
      name: author.name,
      description: author.description,
      type: "ProfilePage",
    }),
  ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={schemas} />
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Our Team", href: "/team" },
                { label: author.name, href: `/authors/${author.slug}` },
              ]}
            />
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                {author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {author.jobTitle}
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {author.name}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  {author.description}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_18rem]">
            <div>
              <h2 className="text-2xl font-bold text-foreground">About {author.name.split(" ")[0]}</h2>
              {author.bio.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <Card className="h-fit p-6">
              <h2 className="font-bold text-foreground">Areas of expertise</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {author.expertise.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Contact Aadit Technologies
              </Link>
            </Card>
          </div>
        </Section>

        <Section background="muted">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground">Articles by {author.name}</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}