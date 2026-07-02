import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Users, GraduationCap } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buttonVariants } from "@/components/ui/button"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/careers",
  title: "Careers",
  description:
    "Build your career in cybersecurity with Aadit Technologies. We don't have any open roles right now, but we're always keen to hear from talented security and IT professionals.",
})

const WHY_JOIN = [
  {
    icon: Shield,
    title: "Meaningful Work",
    description:
      "Protect real organisations from real threats. Every day you help keep Indian businesses secure and resilient.",
  },
  {
    icon: Users,
    title: "One Accountable Team",
    description:
      "Work alongside certified professionals across SOC, VAPT, cloud, and compliance — with a client-first culture and no silos.",
  },
  {
    icon: GraduationCap,
    title: "Grow Your Expertise",
    description:
      "Sharpen your skills across the full security lifecycle and gain exposure to leading tools, certifications, and industries.",
  },
]

export default function CareersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Careers", href: "/careers" },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Careers at Aadit Technologies
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              We build the team that protects India&apos;s enterprises. If cybersecurity, cloud, and
              solving hard problems for real clients excite you, we&apos;d love to hear from you.
            </p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {WHY_JOIN.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="p-8">
                    <div className="mb-4 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-3 text-lg font-bold text-foreground">{item.title}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </Section>

        <Section background="muted">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Current Openings</h2>
            <p className="mt-4 text-muted-foreground">
              We don&apos;t have any open positions at the moment. However, we&apos;re always
              interested in connecting with talented cybersecurity and IT professionals. Send us your
              details and we&apos;ll reach out when a suitable role opens up.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
                Send a General Application
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
