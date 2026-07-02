import React from "react"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MDXContent } from "@/components/mdx-content"
import { JsonLd } from "@/components/json-ld"
import { faqSchema } from "@/lib/seo"
import { HUBS, type Hub, type RelatedLink } from "@/lib/services"
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Lock,
  Search,
  Cloud,
  Server,
  FileCheck,
  Activity,
  Network,
  LifeBuoy,
  HardDrive,
  type LucideIcon,
} from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  shield: Shield,
  lock: Lock,
  search: Search,
  cloud: Cloud,
  server: Server,
  file: FileCheck,
  activity: Activity,
  network: Network,
  support: LifeBuoy,
  backup: HardDrive,
  check: CheckCircle2,
}

const mdxComponents = {
  p: (props: Record<string, unknown>) => (
    <p className="mb-4 text-lg leading-relaxed text-muted-foreground" {...props} />
  ),
  a: (props: Record<string, unknown>) => (
    <a className="font-medium text-primary hover:underline" {...props} />
  ),
  strong: (props: Record<string, unknown>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  ul: (props: Record<string, unknown>) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  ol: (props: Record<string, unknown>) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  li: (props: Record<string, unknown>) => <li className="leading-relaxed" {...props} />,
  h2: (props: Record<string, unknown>) => (
    <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground" {...props} />
  ),
  h3: (props: Record<string, unknown>) => (
    <h3 className="mb-3 mt-6 text-xl font-bold text-foreground" {...props} />
  ),
}

export interface ServicePageData {
  title: string
  slug: string
  metaDescription: string
  hub: Hub
  content: string
  features: { title: string; description: string; icon?: string }[]
  benefits: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export function ServicePageTemplate({
  service,
  related,
}: {
  service: ServicePageData
  related: RelatedLink[]
}) {
  const hub = HUBS[service.hub]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}
      <main className="flex-1">
        {/* 1. Hero */}
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: hub.title, href: `/${service.hub}` },
                { label: service.title, href: `/${service.hub}/${service.slug}` },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {service.metaDescription}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Get a Free Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${service.hub}`}
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                All {hub.title}
              </Link>
            </div>
          </div>
        </Section>

        {/* 2. Definition opener (from MDX body) */}
        {service.content && (
          <Section>
            <div className="mx-auto max-w-3xl">
              <MDXContent code={service.content} components={mdxComponents} />
            </div>
          </Section>
        )}

        {/* 3. What's Included */}
        {service.features.length > 0 && (
          <Section background="muted">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold">What&apos;s Included</h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive coverage for your organization.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, i) => {
                const Icon = ICONS[feature.icon ?? "check"] ?? CheckCircle2
                return (
                  <Card key={i} className="p-8">
                    <div className="mb-4 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                )
              })}
            </div>
          </Section>
        )}

        {/* 4. Benefits */}
        {service.benefits.length > 0 && (
          <Section>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold">Key Benefits</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* 5. FAQ */}
        {service.faqs.length > 0 && (
          <Section background="muted">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <Accordion items={service.faqs} />
            </div>
          </Section>
        )}

        {/* 6. Related Services */}
        {related.length > 0 && (
          <Section>
            <h2 className="mb-8 text-2xl font-bold">Related Services</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="group">
                  <Card className="flex h-full flex-col p-6 transition-colors hover:border-primary/50">
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="mb-6 flex-1 text-sm text-muted-foreground">
                      {item.metaDescription}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* 7. Closing CTA */}
        <Section background="dark">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to strengthen your {hub.title.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Speak with one of our certified specialists to discuss your specific
              requirements.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "light", size: "lg" })}
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
