import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Section } from "@/components/ui/section"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buildMetadata, webPageSchema } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/case-studies",
  title: "Client Case Studies",
  description:
    "Learn how Aadit Technologies approaches cybersecurity, compliance, and managed IT engagements while protecting client confidentiality.",
})

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd
          data={webPageSchema({
            path: "/case-studies",
            name: "Client Case Studies",
            description:
              "Aadit Technologies' approach to client confidentiality, cybersecurity, compliance, and managed IT engagements.",
            type: "CollectionPage",
          })}
        />
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Client Case Studies", href: "/case-studies" },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Client Case Studies
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Security work often involves sensitive systems, findings, and operational details.
              We protect that information and publish client stories only with clear permission.
            </p>
          </div>
        </Section>
        <Section>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Relevant experience, discussed responsibly</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you are evaluating a cybersecurity, compliance, or managed IT engagement, we can
              discuss relevant approaches, scope considerations, and references where appropriate and
              permitted. We do not publish client outcomes, testimonials, or security details without
              written approval.
            </p>
            <Link href="/contact" className="mt-7 inline-block font-semibold text-primary hover:underline">
              Ask about a comparable engagement
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}