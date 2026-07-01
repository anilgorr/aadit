import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { StatBlock } from "@/components/ui/stat-block"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShieldCheck, FileCheck, Server, ArrowRight } from "lucide-react"
import { LogoCloud } from "@/components/logo-cloud"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      
      <main className="flex-1 w-full">
        <Section className="py-24 md:py-32 text-center md:text-left relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:3rem_3rem] pointer-events-none" />
          <div className="max-w-4xl mx-auto md:mx-0 relative z-10">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8">
              New: Comprehensive DPDP Act Compliance Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              The security partner you trust before regulators knock.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Technically precise, clean, and trustworthy cybersecurity, compliance, and IT managed services for the modern enterprise.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" variant="primary">Get a Free Assessment</Button>
              <Button size="lg" variant="secondary">Explore Services</Button>
            </div>
          </div>
        </Section>

        <LogoCloud />

        <Section background="muted" className="border-b">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            <StatBlock stat="50+" label="Organizations Protected" subtext="Across healthcare, BFSI & fintech" />
            <StatBlock stat="99.9%" label="Uptime SLA" subtext="Guaranteed reliability" />
            <StatBlock stat="100%" label="Compliance Readiness" subtext="ISO 27001, SOC 2, HIPAA" />
          </div>
        </Section>

        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Comprehensive Protection</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Everything you need to secure your infrastructure, pass audits, and manage IT operations smoothly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 flex flex-col gap-4 group">
              <ShieldCheck className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold">Cybersecurity</h3>
              <p className="text-muted-foreground flex-1 leading-relaxed">
                Penetration testing, vulnerability assessments, and 24/7 incident response to keep your data secure against evolving threats.
              </p>
              <Link href="/services/cybersecurity" className="flex items-center text-primary font-medium mt-4">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
            <Card className="p-8 flex flex-col gap-4 group">
              <FileCheck className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold">Compliance</h3>
              <p className="text-muted-foreground flex-1 leading-relaxed">
                Streamlined certification processes for ISO 27001, SOC 2, HIPAA, PCI-DSS, and regional frameworks like the DPDP Act.
              </p>
              <Link href="/services/compliance" className="flex items-center text-primary font-medium mt-4">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
            <Card className="p-8 flex flex-col gap-4 group">
              <Server className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold">IT Managed Services</h3>
              <p className="text-muted-foreground flex-1 leading-relaxed">
                Cloud operations, help desk support, disaster recovery, and proactive infrastructure management for growing organizations.
              </p>
              <Link href="/services/managed-it" className="flex items-center text-primary font-medium mt-4">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          </div>
        </Section>

        <Section background="muted" className="border-y">
          <TestimonialCarousel />
        </Section>

        <Section className="bg-primary/5 border-b border-primary/10">
          <div className="text-center max-w-3xl mx-auto py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to secure your business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Speak with one of our certified security architects today to discuss your compliance and cybersecurity needs.
            </p>
            <Button size="lg" variant="primary">Book a Free Consultation</Button>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}