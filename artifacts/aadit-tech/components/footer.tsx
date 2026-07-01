import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: "Cybersecurity",
    links: ["Penetration Testing", "Vulnerability Assessment", "Security Architecture", "Incident Response"],
  },
  {
    heading: "Compliance & Audits",
    links: ["ISO 27001", "SOC 2", "HIPAA", "PCI-DSS", "RBI Guidelines"],
  },
  {
    heading: "IT Managed Services",
    links: ["Infrastructure Management", "Cloud Operations", "Help Desk"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Glossary", "Whitepapers", "EBooks"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
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
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-primary/50 hover:bg-primary/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-white/70">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="transition-colors hover:text-primary">
                      {link}
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
