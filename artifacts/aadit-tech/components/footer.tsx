import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Cybersecurity",
    links: [
      { label: "Penetration Testing", href: "#" },
      { label: "Vulnerability Assessment", href: "#" },
      { label: "Security Architecture", href: "#" },
      { label: "Incident Response", href: "#" },
    ],
  },
  {
    heading: "Compliance & Audits",
    links: [
      { label: "ISO 27001", href: "#" },
      { label: "SOC 2", href: "#" },
      { label: "HIPAA", href: "#" },
      { label: "PCI-DSS", href: "#" },
      { label: "RBI Guidelines", href: "#" },
    ],
  },
  {
    heading: "IT Managed Services",
    links: [
      { label: "Infrastructure Management", href: "#" },
      { label: "Cloud Operations", href: "#" },
      { label: "Help Desk", href: "#" },
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
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-midnight-foreground">
      <div className="grid-lines mask-radial pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="glow-blob absolute -left-20 top-0 h-64 w-64 opacity-25"
        style={{ background: "oklch(0.53 0.22 262)" }}
      />
      <div className="container relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-5 inline-flex items-center">
              <Image
                src="/logo-white.png"
                alt="Aadit Technologies"
                width={222}
                height={90}
                className="h-9 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              The security partner you trust before regulators knock. Cybersecurity, compliance &
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

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-sm font-semibold text-white">{col.heading}</h3>
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/70 md:flex-row">
          <p>© 2025 Aadit Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Systems operational · Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  )
}
