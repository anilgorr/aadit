import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HUB_ORDER, HUBS, isHub, getServicesByHub } from "@/lib/services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

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
  return {
    title: `${meta.title} | Aadit Technologies`,
    description: meta.metaDescription,
  }
}

export default async function HubPage({ params }: PageParams) {
  const { hub } = await params
  if (!isHub(hub)) notFound()

  const meta = HUBS[hub]
  const children = getServicesByHub(hub)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
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
                      {service.metaDescription}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                      Learn more
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
      </main>
      <Footer />
    </div>
  )
}
