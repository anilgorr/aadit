import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { INDUSTRIES, getIndustry } from "@/lib/industries"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buttonVariants } from "@/components/ui/button"

interface PageParams {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}
  return {
    title: `${industry.title} | Aadit Technologies`,
    description: industry.metaDescription,
  }
}

export default async function IndustryPage({ params }: PageParams) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: industry.title, href: `/industries/${industry.slug}` },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {industry.title}
            </h1>
            <p className="mt-4 text-lg font-medium text-primary md:text-xl">
              {industry.tagline}
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted-foreground">
              {industry.intro.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Talk to a Specialist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold">Security &amp; Compliance Concerns</h2>
            <p className="mt-4 text-muted-foreground">
              The challenges we help {industry.title.toLowerCase()} address.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industry.concerns.map((concern, i) => (
              <Card key={i} className="p-8">
                <div className="mb-4 text-primary">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold">{concern.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {concern.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section background="muted">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold">Related Services &amp; Resources</h2>
            <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
              {industry.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between p-5 transition-colors hover:bg-accent/40"
                >
                  <span className="font-medium">{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </Section>

        <Section background="dark">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Built for {industry.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Let&apos;s map your obligations and risks to a practical security and
              compliance plan.
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
