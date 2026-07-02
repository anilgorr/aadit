import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Cybersecurity",
    links: [
      { label: "Managed SOC Services", href: "/cybersecurity/managed-soc" },
      { label: "SOC as a Service", href: "/cybersecurity/soc-as-a-service" },
      { label: "VAPT Services", href: "/cybersecurity/vapt" },
      { label: "Endpoint Security", href: "/cybersecurity/endpoint-security" },
      { label: "Firewall & Network Security", href: "/cybersecurity/firewall-network-security" },
      { label: "Email Security", href: "/cybersecurity/email-security" },
      { label: "Cybersecurity Consulting", href: "/cybersecurity/consulting" },
    ],
  },
  {
    heading: "Compliance & Audits",
    links: [
      { label: "ISO 27001", href: "/compliance/iso-27001" },
      { label: "ISO 42001 (AI)", href: "/compliance/iso-42001" },
      { label: "ISO 9001", href: "/compliance/iso-9001" },
      { label: "SOC 2", href: "/compliance/soc2" },
      { label: "HIPAA", href: "/compliance/hipaa" },
      { label: "GDPR", href: "/compliance/gdpr" },
      { label: "PCI DSS", href: "/compliance/pci-dss" },
    ],
  },
  {
    heading: "IT Managed Services",
    links: [
      { label: "Managed IT Services", href: "/it-managed-services/managed-it-services" },
      { label: "Help Desk & Support", href: "/it-managed-services/helpdesk-support" },
      { label: "Cloud Infrastructure", href: "/it-managed-services/cloud-infrastructure" },
      { label: "Cloud Migration", href: "/it-managed-services/cloud-migration" },
      { label: "Cloud Optimization", href: "/it-managed-services/cloud-optimization" },
      { label: "Backup & Disaster Recovery", href: "/it-managed-services/backup-disaster-recovery" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Whitepapers", href: "/whitepapers" },
      { label: "eBooks", href: "/ebook" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Startups & Scaleups", href: "/industries/startups" },
      { label: "Healthcare & BFSI", href: "/industries/healthcare-bfsi" },
      { label: "E-commerce & Fintech", href: "/industries/ecommerce-fintech" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-midnight text-midnight-foreground">
      <div className="grid-lines mask-radial pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="glow-blob absolute -left-20 top-0 h-64 w-64 opacity-25"
        style={{ background: "oklch(0.53 0.22 262)" }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        {/* Main footer body: brand left, nav columns right */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">

          {/* Brand column */}
          <div className="shrink-0 lg:w-56">
            <Link href="/" className="mb-5 inline-flex items-center">
              <Image
                src="/logo-white.png"
                alt="Aadit Technologies"
                width={222}
                height={90}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/75">
              The security partner you trust before regulators knock. Cybersecurity, compliance &amp;
              managed IT for the modern enterprise.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={`Aadit Technologies on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-primary/50 hover:bg-primary/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns — all 6 in one row on desktop */}
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h2 className="mb-4 text-sm font-semibold text-white">{col.heading}</h2>
                <ul className="flex flex-col gap-1 text-sm text-white/70">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-block py-1 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/70 md:flex-row">
          <p>© {year} Aadit Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Systems operational · Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  )
}
