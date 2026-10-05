import { notFound } from "next/navigation"
import { HUB_GUIDES, SERVICE_NOTES } from "@/lib/hub-guides"
import { EditorialSections } from "@/components/editorial-sections"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { HUB_ORDER, HUBS, isHub, getServicesByHub } from "@/lib/services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo"

interface PageParams {
  params: Promise<{ hub: string }>
}

export function generateStaticParams() {
  return HUB_ORDER.map((hub) => ({ hub }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { hub } = await params
  if (!isHub(hub)) return {}
  const meta = HUBS[hub]
  return buildMetadata({
    path: `/${hub}`,
    title: meta.title,
    description: meta.metaDescription,
    images: [
      {
        url: `/${hub}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${meta.title} from Aadit Technologies`,
      },
    ],
  })
}

export default async function HubPage({ params }: PageParams) {
  const { hub } = await params
  if (!isHub(hub)) notFound()

  const meta = HUBS[hub]
  const children = getServicesByHub(hub)
  const faqs = [...meta.buyerGuide.faqs, ...children.flatMap((service) => service.faqs)]
    .filter((item, index, items) => items.findIndex((other) => other.question === item.question) === index)
    .slice(0, 6)
  const structuredData = [
    webPageSchema({
      path: `/${hub}`,
      name: meta.title,
      description: meta.intro,
      type: "CollectionPage",
    }),
    faqSchema(faqs),
  ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={structuredData} />
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: meta.title, href: `/${hub}` },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {meta.intro}
            </p>
          </div>
        </Section>

        <Section>
          {children.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {children.map((service) => (
                <Link key={service.slug} href={service.permalink} className="group">
                  <Card className="flex h-full flex-col p-8 transition-colors hover:border-primary/50">
                    <h2 className="mb-3 text-xl font-bold">{service.title}</h2>
                    <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                      {SERVICE_NOTES[service.slug] ?? service.metaDescription}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                      Explore {service.title}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Detailed pages for this area are coming soon.
            </p>
          )}
        </Section>

        <Section background="muted">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Buyer guidance
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{meta.buyerGuide.title}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {meta.buyerGuide.description}
              </p>
            </div>
            <ol className="space-y-5">
              {meta.buyerGuide.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Step {index + 1}: </span>
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section>
          <EditorialSections sections={HUB_GUIDES[hub]} />
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold">Common Questions</h2>
            <Accordion items={faqs} />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
