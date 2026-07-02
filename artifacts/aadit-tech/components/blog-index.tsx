import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { BlogCard } from "@/components/blog-card"
import { buttonVariants } from "@/components/ui/button"
import { getPostsPage, getTotalPages } from "@/lib/blog"

function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`
}

export function BlogIndex({ page }: { page: number }) {
  const totalPages = getTotalPages()
  if (page < 1 || page > totalPages) notFound()

  const posts = getPostsPage(page)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Insights &amp; Blog
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Practical perspectives on cybersecurity, compliance, and managed IT from the
              Aadit Technologies team.
            </p>
          </div>
        </Section>

        <Section>
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} titleAs="h2" />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-16 flex items-center justify-between">
                  {page > 1 ? (
                    <Link
                      href={pageHref(page - 1)}
                      className={buttonVariants({ variant: "secondary", size: "md" })}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </Link>
                  ) : (
                    <span />
                  )}
                  <span className="text-sm text-muted-foreground">
                    Page {page} of {totalPages}
                  </span>
                  {page < totalPages ? (
                    <Link
                      href={pageHref(page + 1)}
                      className={buttonVariants({ variant: "secondary", size: "md" })}
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span />
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold">No articles yet</h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                We&apos;re working on our first articles. Check back soon for insights on
                security, compliance, and managed IT.
              </p>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </div>
  )
}
