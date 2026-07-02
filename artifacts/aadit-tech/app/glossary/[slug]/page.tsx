import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GLOSSARY, getTerm, getRelatedTerms } from "@/lib/glossary"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buttonVariants } from "@/components/ui/button"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata, definedTermSchema } from "@/lib/seo"

interface PageParams {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return GLOSSARY.map((term) => ({ slug: term.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const term = getTerm(slug)
  if (!term) return {}
  const label = term.fullForm ? `${term.term} — ${term.fullForm}` : term.term
  return buildMetadata({
    path: `/glossary/${term.slug}`,
    absoluteTitle: `${label} | Aadit Technologies Glossary`,
    description: term.definition,
  })
}

export default async function GlossaryTermPage({ params }: PageParams) {
  const { slug } = await params
  const term = getTerm(slug)
  if (!term) notFound()

  const related = getRelatedTerms(term.relatedTerms)

  const schema = definedTermSchema({
    term: term.term,
    fullForm: term.fullForm,
    definition: term.definition,
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
                { label: "Glossary", href: "/glossary" },
                { label: term.term, href: `/glossary/${term.slug}` },
              ]}
            />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {term.term}
              </h1>
              <Badge variant="muted">{term.category}</Badge>
            </div>
            {term.fullForm && (
              <p className="mt-3 text-lg font-medium text-muted-foreground">
                {term.fullForm}
              </p>
            )}
            {/* Definition-first: the single clear definition is the first content on the page. */}
            <p className="mt-6 text-xl leading-relaxed text-foreground md:text-2xl md:leading-relaxed">
              {term.definition}
            </p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {term.detail.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href={term.relatedService.href}
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                {term.relatedService.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        {related.length > 0 && (
          <Section background="muted">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold">Related Terms</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/glossary/${item.slug}`}
                    className="group"
                  >
                    <Card className="flex h-full flex-col p-6 transition-colors hover:border-primary/50">
                      <h3 className="mb-2 text-lg font-bold group-hover:text-primary">
                        {item.term}
                      </h3>
                      {item.fullForm && (
                        <p className="text-xs font-medium text-muted-foreground">
                          {item.fullForm}
                        </p>
                      )}
                    </Card>
                  </Link>
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
