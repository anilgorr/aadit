import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { INDUSTRIES } from "@/lib/industries"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "Industries We Serve | Aadit Technologies",
  description:
    "Tailored cybersecurity and compliance for startups, healthcare & BFSI, and e-commerce & fintech — mapped to the regulations each industry must meet.",
}

export default function IndustriesPage() {
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
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Every sector faces its own regulations and threats. We tailor security and
              compliance to the specific obligations and risks your industry lives with.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <Card className="flex h-full flex-col p-8 transition-colors hover:border-primary/50">
                  <h2 className="mb-2 text-xl font-bold">{industry.title}</h2>
                  <p className="mb-4 text-sm font-medium text-primary">
                    {industry.tagline}
                  </p>
                  <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                    {industry.metaDescription}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                    Explore
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
