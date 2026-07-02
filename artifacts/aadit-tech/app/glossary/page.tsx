import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GLOSSARY } from "@/lib/glossary"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/glossary",
  title: "Cybersecurity & Compliance Glossary",
  description:
    "Plain-English definitions of key cybersecurity and compliance terms — VAPT, SOC, SIEM, ISO 27001, GDPR, HIPAA, PCI DSS, and SOC 2.",
})

export default function GlossaryPage() {
  const terms = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term))

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Glossary", href: "/glossary" },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Security &amp; Compliance Glossary
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Clear, jargon-free definitions of the cybersecurity and compliance terms
              you&apos;ll encounter when securing and certifying your organisation.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {terms.map((term) => (
              <Link key={term.slug} href={`/glossary/${term.slug}`} className="group">
                <Card className="flex h-full flex-col p-6 transition-colors hover:border-primary/50">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold group-hover:text-primary">
                      {term.term}
                    </h2>
                    <Badge variant="muted">{term.category}</Badge>
                  </div>
                  {term.fullForm && (
                    <p className="mb-3 text-xs font-medium text-muted-foreground">
                      {term.fullForm}
                    </p>
                  )}
                  <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {term.definition}
                  </p>
                  <div className="mt-5 flex items-center text-sm font-semibold text-primary">
                    Read definition
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
