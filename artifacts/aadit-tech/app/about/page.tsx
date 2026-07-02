import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buttonVariants } from "@/components/ui/button"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/about",
  title: "About Us",
  description:
    "Aadit Technologies is a Bangalore-based cybersecurity and cloud services company protecting Indian enterprises since 2017 — Managed SOC, VAPT, cloud security, ISO 27001, GRC, and SOC 2.",
})

const STATS = [
  { value: "2017", label: "Year Founded" },
  { value: "50+", label: "Organisations Secured" },
  { value: "24/7", label: "Managed SOC Coverage" },
]

const VALUES = [
  {
    tag: "Trust",
    title: "Client-First Trust",
    description:
      "We treat your security posture as our own. No upselling, no jargon, no shortcuts.",
  },
  {
    tag: "Expertise",
    title: "Technical Excellence",
    description:
      "Every engagement is led by certified professionals with real-world attack and defence experience.",
  },
  {
    tag: "Accountability",
    title: "Local Accountability",
    description:
      "One point of contact. Fast response. A partner who knows your environment.",
  },
]

const LEADERSHIP = [
  {
    name: "Anil Gorraladaku",
    role: "Chief Executive Officer",
    bio: "Anil leads Aadit Technologies as CEO, bringing a blend of executive leadership, digital marketing strategy, and business development expertise. Since taking the helm in 2022, he has focused on scaling Aadit's managed security and cloud services across India's enterprise and mid-market segments.",
    previously: "Digipuush (CEO); Lakshmi Infotech — Aptech Franchise (Head of Sales, Marketing & Digital Marketing)",
  },
  {
    name: "Srinivas Gadicherla",
    role: "Chief Technology Officer",
    bio: "Srinivas drives Aadit's technology vision as CTO, with over 15 years of experience at the intersection of cybersecurity, cloud infrastructure, and enterprise IT. He leads technical delivery across Managed SOC, SIEM, cloud security, and VAPT services, with expertise spanning Microsoft Azure, VMware, Citrix, and enterprise Windows environments.",
    previously: "NTT Ltd.; IBM; Altisource",
  },
  {
    name: "Guruprasad N. Joshi",
    role: "Founder & Managing Director (In Memoriam)",
    bio: "Guruprasad founded Aadit Technologies in January 2017 with a clear mission: to give Indian organisations a cybersecurity partner that truly understood their world. His leadership shaped the company's culture, service philosophy, and client-first values, and his vision continues to guide Aadit Technologies.",
    previously: "HARMAN International; Aditi Technologies · B.Tech, Computer Science — RVD University (2007–2010)",
  },
]

const WHAT_WE_DO = [
  {
    title: "Managed Security Operations Centre (SOC)",
    description:
      "24/7 continuous threat monitoring, detection, and response powered by advanced SIEM technology. We act as your always-on security team.",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description:
      "Identify and remediate security weaknesses before attackers can exploit them, across network, application, cloud, and API.",
  },
  {
    title: "ISO 27001 Consulting & Compliance",
    description:
      "End-to-end ISO 27001 implementation, gap analysis, audit preparation, and certification support for your information management systems.",
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    description:
      "Comprehensive GRC frameworks tailored to Indian regulatory requirements — helping you manage risk and demonstrate compliance.",
  },
  {
    title: "SOC 2 Compliance",
    description:
      "Readiness assessments and audit preparation for SOC 2 Type I and Type II, helping SaaS and cloud-native companies meet global trust requirements.",
  },
  {
    title: "Cloud Security & Migration",
    description:
      "Secure cloud migration, cloud infrastructure hardening, and ongoing cloud cost optimisation — protecting your cloud from day one.",
  },
]

const INDUSTRIES = [
  "Fintech & Banking — protecting financial data, transactions, and customer trust",
  "Healthcare & Pharma — securing patient records, clinical systems, and sensitive medical data",
  "E-Commerce & Retail — defending customer data, payment infrastructure, and supply chains",
  "IT & SaaS Companies — embedding security into development pipelines and cloud environments",
  "Manufacturing & Industry — safeguarding operational technology and intellectual property",
  "Education & EdTech — protecting student data and digital learning platforms",
]

const WHY_CHOOSE = [
  {
    title: "One Team. Full Coverage.",
    description:
      "SOC, VAPT, cloud security, and compliance — all delivered by a single accountable team. No coordination overhead, no finger-pointing between vendors.",
  },
  {
    title: "India-First Approach",
    description:
      "We understand Indian compliance frameworks, data protection obligations, and the real security challenges facing Indian enterprises — not adapted global playbooks.",
  },
  {
    title: "Always-On Protection",
    description:
      "Our Managed SOC operates 24 hours a day, 7 days a week — monitoring, detecting, and responding so your team never has to watch the clock.",
  },
  {
    title: "Certified Professionals",
    description:
      "Our team holds certifications including CISSP, CEH, CISM, CISA, OSCP, CompTIA Security+, ISO 27001 Lead Auditor, and AWS Security Specialty.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ]}
            />
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">
              About Aadit Technologies
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              India&apos;s Trusted Cybersecurity Partner
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Built to Protect. Designed to Last. Rooted in Bangalore. Established January 2017
              &middot; CIN: U72900KA2017PTC099151
            </p>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Aadit Technologies Pvt. Ltd. is a Bangalore-based cybersecurity and cloud services
              company dedicated to protecting Indian enterprises from evolving cyber threats. Since
              our founding on 12 January 2017, we have combined the rigour of a global security firm
              with the responsiveness and accountability of a local partner — delivering Managed SOC,
              VAPT, Cloud Security, ISO 27001 Consulting, GRC, and SOC 2 Compliance under one roof.
            </p>
          </div>
        </Section>

        {/* Stats */}
        <Section>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Our Story */}
        <Section background="muted">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                India&apos;s businesses were facing world-class cyber threats but struggling to find
                a partner who truly understood them — one that combined global-grade expertise with
                local accountability and reasonable cost.
              </p>
              <p>
                It was this gap that Guruprasad N. Joshi set out to close. A technology professional
                with deep roots in IT infrastructure — having worked at HARMAN International and Aditi
                Technologies — Guruprasad founded Aadit Technologies in Bangalore on 12 January 2017.
                His vision was straightforward but powerful: build a cybersecurity company that treats
                every client&apos;s security posture as if it were its own.
              </p>
              <p>
                Under his founding leadership, Aadit grew from a small Bangalore team into a
                full-spectrum security partner protecting over 50 organisations across India&apos;s
                most digitally active sectors — from fintech and healthcare to e-commerce and
                enterprise IT.
              </p>
              <p>
                Today, Aadit Technologies continues to honour that founding mission, led by a
                leadership team committed to the same values Guruprasad instilled: integrity,
                technical excellence, and relentless focus on the client.
              </p>
            </div>

            <Card className="mt-10 border-primary/20 bg-primary/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                In Loving Memory
              </p>
              <h3 className="mt-2 text-xl font-bold text-foreground">Guruprasad N. Joshi</h3>
              <p className="text-sm text-muted-foreground">
                Founder &amp; Managing Director, Aadit Technologies
              </p>
              <div className="mt-4 space-y-4 italic leading-relaxed text-muted-foreground">
                <p>
                  Guruprasad Joshi was the heart and mind behind Aadit Technologies. A Computer
                  Science graduate of RVD University (2007–2010), he brought years of experience from
                  HARMAN International and Aditi Technologies before channelling everything he had
                  learned into building a cybersecurity company that would genuinely serve Indian
                  businesses. His belief that no organisation should be left defenceless against cyber
                  threats became the DNA of Aadit.
                </p>
                <p>
                  His legacy lives on in every client we protect, every analyst we train, and every
                  threat we stop. We carry his vision forward every day.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* Mission, Vision & Values */}
        <Section>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To make enterprise-grade cybersecurity accessible, affordable, and actionable for
                  every Indian organisation — combining global expertise with the accountability of a
                  trusted local partner.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To be India&apos;s most trusted cybersecurity partner — the company organisations
                  turn to first when their digital future is at stake, knowing they will get honesty,
                  expertise, and results.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {VALUES.map((value) => (
                <Card key={value.title} className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {value.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Leadership */}
        <Section background="muted">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground">Leadership Team</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Our leadership team brings together decades of combined experience in cybersecurity,
              cloud infrastructure, enterprise technology, and business leadership.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {LEADERSHIP.map((person) => (
                <Card key={person.name} className="flex h-full flex-col p-8">
                  <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
                  <p className="text-sm font-medium text-primary">{person.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {person.bio}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Previously:</span>{" "}
                    {person.previously}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* What We Do */}
        <Section>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground">What We Do</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Aadit Technologies delivers full-spectrum cybersecurity and cloud services under one
              roof — so you work with one trusted team instead of juggling multiple vendors.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_DO.map((item) => (
                <Card key={item.title} className="p-8">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Industries */}
        <Section background="muted">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground">Industries We Serve</h2>
            <p className="mt-4 text-muted-foreground">
              Cyber threats don&apos;t stay in one industry. Neither do we. Aadit Technologies
              protects organisations across India&apos;s most regulated and rapidly digitising
              sectors.
            </p>
            <ul className="mt-8 space-y-3">
              {INDUSTRIES.map((industry) => (
                <li key={industry} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Why Choose */}
        <Section>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground">Why Companies Choose Aadit</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {WHY_CHOOSE.map((item) => (
                <Card key={item.title} className="p-8">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="dark">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to work with us?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Talk to our team about how we can protect your organisation with security and IT
              services built around your needs.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "light", size: "lg" })}
              >
                Get in Touch
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
