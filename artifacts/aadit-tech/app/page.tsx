import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata, websiteSchema } from "@/lib/seo"
import { Section } from "@/components/ui/section"
import { StatBlock } from "@/components/ui/stat-block"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ShieldCheck,
  FileCheck,
  Server,
  ArrowRight,
  Lock,
  Activity,
  Radar,
} from "lucide-react"
import { LogoCloud } from "@/components/logo-cloud"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Penetration testing, vulnerability assessments, and 24/7 incident response to keep your data secure against evolving threats.",
    href: "/cybersecurity",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    desc: "Streamlined certification for ISO 27001, SOC 2, HIPAA, PCI-DSS, and regional frameworks like the DPDP Act.",
    href: "/compliance",
  },
  {
    icon: Server,
    title: "IT Managed Services",
    desc: "Cloud operations, help desk support, disaster recovery, and proactive infrastructure management for growing organizations.",
    href: "/it-managed-services",
  },
]

export const metadata: Metadata = buildMetadata({
  path: "/",
  absoluteTitle: "Aadit Technologies | Cybersecurity, Compliance & IT Services",
  description:
    "Aadit Technologies delivers cybersecurity, compliance, and IT managed services — VAPT, ISO 27001, SOC 2, HIPAA & PCI DSS — for regulated businesses. Book a free assessment.",
})

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <JsonLd data={websiteSchema()} />
      <Header />

      <main className="w-full flex-1">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-midnight text-midnight-foreground">
          {/* ambient glow */}
          <div
            className="glow-blob animate-drift-slow absolute -left-32 -top-24 h-96 w-96 opacity-40"
            style={{ background: "oklch(0.53 0.22 262)" }}
          />
          <div
            className="glow-blob animate-drift absolute -right-24 top-32 h-80 w-80 opacity-30"
            style={{ background: "oklch(0.72 0.15 220)" }}
          />
          {/* security grid */}
          <div className="grid-lines mask-radial pointer-events-none absolute inset-0" />

          <div className="container relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-32">
            <div className="animate-fade-up text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                New: Comprehensive DPDP Act Compliance Services
              </div>

              <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                The security partner you{" "}
                <span className="text-gradient">trust before</span> regulators knock.
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65 md:mx-0 md:text-xl">
                Technically precise, clean, and trustworthy cybersecurity, compliance, and IT managed
                services for the modern enterprise.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Link href="/contact">
                  <Button size="lg" variant="light" className="w-full sm:w-auto">
                    Get a Free Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cybersecurity">
                  <Button size="lg" variant="outlineLight" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70 md:justify-start">
                <span className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-cyan" /> ISO 27001 certified
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-cyan" /> SOC 2 aligned
                </span>
                <span className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-cyan" /> 24/7 SOC monitoring
                </span>
              </div>
            </div>

            {/* Hero visual: glass security console */}
            <div className="animate-fade-up relative mx-auto w-full max-w-md [animation-delay:120ms] md:mx-0">
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Radar className="h-5 w-5 text-cyan" /> Threat Monitor
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    Secure
                  </span>
                </div>

                {/* concentric radar rings */}
                <div className="relative mx-auto mb-6 flex h-40 w-40 items-center justify-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="radar-ring absolute rounded-full border border-cyan/30"
                      style={{
                        width: `${(i + 1) * 33}%`,
                        height: `${(i + 1) * 33}%`,
                        animationDelay: `${i}s`,
                      }}
                    />
                  ))}
                  <ShieldCheck className="h-12 w-12 text-cyan" />
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Endpoints protected", value: "1,284" },
                    { label: "Threats blocked (24h)", value: "37" },
                    { label: "Compliance score", value: "98%" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm"
                    >
                      <span className="text-white/60">{row.label}</span>
                      <span className="font-semibold text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoCloud />

        {/* ---------- STATS ---------- */}
        <Section background="muted" className="border-b border-border">
          <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            <StatBlock stat="50+" label="Organizations Protected" subtext="Across healthcare, BFSI & fintech" />
            <StatBlock stat="99.9%" label="Uptime SLA" subtext="Guaranteed reliability" />
            <StatBlock stat="100%" label="Compliance Readiness" subtext="ISO 27001, SOC 2, HIPAA" />
          </div>
        </Section>

        {/* ---------- SERVICES ---------- */}
        <Section>
          <div className="relative">
            <div className="grid-lines-light mask-radial pointer-events-none absolute inset-0 -z-10 opacity-70" />
            <div className="mx-auto mb-16 max-w-2xl text-center reveal">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What we do
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Comprehensive protection, end to end
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to secure your infrastructure, pass audits, and run IT
                operations smoothly.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {SERVICES.map((service) => (
                <Card key={service.title} className="group reveal flex flex-col gap-5 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.62_0.2_262)] text-white shadow-lg shadow-primary/25">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="flex-1 leading-relaxed text-muted-foreground">{service.desc}</p>
                  <Link
                    href={service.href}
                    className="mt-2 flex items-center font-semibold text-primary"
                  >
                    Learn More
                    <span className="sr-only"> about {service.title}</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* ---------- TESTIMONIALS ---------- */}
        <Section background="muted" className="border-y border-border">
          <TestimonialCarousel />
        </Section>

        {/* ---------- CTA ---------- */}
        <section className="relative overflow-hidden bg-midnight text-midnight-foreground">
          <div className="grid-lines mask-radial pointer-events-none absolute inset-0" />
          <div
            className="glow-blob animate-drift absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 opacity-40"
            style={{ background: "oklch(0.53 0.22 262)" }}
          />
          <div className="container relative mx-auto max-w-3xl px-4 py-24 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Ready to secure your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
              Speak with one of our certified security architects today to discuss your compliance
              and cybersecurity needs.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className={buttonVariants({ variant: "light", size: "lg" })}>
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outlineLight", size: "lg" })}
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
