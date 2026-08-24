import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { AUTHORS, authorSchema } from "@/lib/authors"
import { buildMetadata, webPageSchema } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/team",
  title: "Our Team",
  description:
    "Meet the leadership team behind Aadit Technologies and the people who guide our cybersecurity, compliance, and managed IT work.",
})

export default function TeamPage() {
  const schema = [
    webPageSchema({
      path: "/team",
      name: "The Team Behind Aadit Technologies",
      description:
        "Leadership team guiding Aadit Technologies' cybersecurity, compliance, and managed IT work.",
      type: "ProfilePage",
    }),
    ...AUTHORS.map(authorSchema),
  ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={schema} />
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Team", href: "/team" }]} />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              The Team Behind Aadit
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Experienced leaders helping organisations make practical progress on cybersecurity,
              compliance, and resilient technology operations.
            </p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-foreground">Leadership</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {AUTHORS.map((author) => (
                <Card key={author.slug} className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {author.jobTitle}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{author.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{author.description}</p>
                  <Link
                    href={`/authors/${author.slug}`}
                    className="mt-5 inline-block font-semibold text-primary hover:underline"
                  >
                    View profile
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section background="muted">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-foreground">Our foundation</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Aadit Technologies was founded by Guruprasad N. Joshi in 2017. His vision of
              dependable, business-focused technology services continues to guide our work.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Our wider delivery team brings together security, compliance, cloud, and managed IT
              disciplines. We publish only verifiable leadership information here; when you need
              specifics for an engagement, our team can walk you through the relevant experience and
              delivery approach.
            </p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Work with our team</h2>
            <p className="mt-4 text-muted-foreground">
              Tell us what you need to secure, certify, or operate more reliably.
            </p>
            <Link href="/contact" className="mt-6 inline-block font-semibold text-primary hover:underline">
              Start a conversation
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}