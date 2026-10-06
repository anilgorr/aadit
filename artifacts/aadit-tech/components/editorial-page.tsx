import Link from "next/link"
import type { ResourcePage } from "@/.velite"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { MDXContent } from "@/components/mdx-content"
import { definedTermSchema, faqSchema, webPageSchema, ORGANIZATION_ID } from "@/lib/seo"
import { absoluteUrl, SITE_NAME } from "@/lib/site"

const components = {
  h2: (props: Record<string, unknown>) => <h2 className="mt-12 mb-5 text-2xl font-bold tracking-tight md:text-3xl" {...props} />,
  h3: (props: Record<string, unknown>) => <h3 className="mt-8 mb-3 text-xl font-semibold" {...props} />,
  p: (props: Record<string, unknown>) => <p className="my-5 leading-relaxed text-muted-foreground" {...props} />,
  ul: (props: Record<string, unknown>) => <ul className="my-6 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground" {...props} />,
  ol: (props: Record<string, unknown>) => <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-muted-foreground" {...props} />,
  a: (props: Record<string, unknown>) => <Link className="font-medium text-primary underline underline-offset-4" {...props} href={String(props.href ?? "")} />,
  table: (props: Record<string, unknown>) => <div className="my-8 overflow-x-auto rounded-xl border"><table className="w-full min-w-[640px] text-left text-sm" {...props} /></div>,
  th: (props: Record<string, unknown>) => <th scope="col" className="border-b bg-muted p-4 font-semibold" {...props} />,
  td: (props: Record<string, unknown>) => <td className="border-b p-4 align-top leading-relaxed text-muted-foreground" {...props} />,
}

export function EditorialPage({ page }: { page: ResourcePage }) {
  const isTerm = page.schemaType === "DefinedTerm"
  const pageSchema = webPageSchema({ path: page.permalink, name: page.title, description: page.metaDescription })
  const subjectSchema = isTerm
    ? definedTermSchema({ term: "Managed IT services", definition: page.definition!, path: page.permalink })
    : {
        "@context": "https://schema.org", "@type": "Article",
        "@id": absoluteUrl(`${page.permalink}#article`), url: absoluteUrl(page.permalink),
        headline: page.title, description: page.metaDescription,
        datePublished: page.publishedAt, dateModified: page.updatedAt ?? page.publishedAt,
        author: { "@type": "Organization", "@id": ORGANIZATION_ID, name: SITE_NAME },
        publisher: { "@id": ORGANIZATION_ID }, mainEntityOfPage: { "@id": absoluteUrl(`${page.permalink}#webpage`) },
        image: absoluteUrl("/opengraph.jpg"), inLanguage: "en", isAccessibleForFree: true,
      }
  const parents = isTerm
    ? [{ label: "Glossary", href: "/glossary" }]
    : [{ label: "Compliance & Audits", href: "/compliance" }, { label: "SOC 2 readiness", href: "/compliance/soc2" }]
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={[pageSchema, subjectSchema, faqSchema(page.faqs)]} />
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, ...parents, { label: page.title, href: page.permalink }]} />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{isTerm ? "Managed IT glossary" : "Compliance resource"}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{page.title}</h1>
          </div>
        </Section>
        <Section>
          <article className="mx-auto max-w-3xl">
            <MDXContent code={page.content} components={components} />
          </article>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
