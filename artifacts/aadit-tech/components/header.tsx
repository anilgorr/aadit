"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "./ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const MENUS: Record<
  string,
  { label: string; items: { title: string; desc?: string; href?: string }[] }
> = {
  cyber: {
    label: "Cybersecurity",
    items: [
      { title: "Managed SOC Services", href: "/cybersecurity/managed-soc", desc: "24/7 threat monitoring, detection, and response." },
      { title: "SOC as a Service", href: "/cybersecurity/soc-as-a-service", desc: "Enterprise-grade SOC without the in-house cost." },
      { title: "VAPT Services", href: "/cybersecurity/vapt", desc: "Find and fix vulnerabilities before attackers do." },
      { title: "Endpoint Security", href: "/cybersecurity/endpoint-security", desc: "Protect every device across your organisation." },
      { title: "Firewall & Network Security", href: "/cybersecurity/firewall-network-security", desc: "Harden and defend your network perimeter." },
      { title: "Email Security", href: "/cybersecurity/email-security", desc: "Stop phishing, spoofing, and email-borne threats." },
      { title: "Cybersecurity Consulting", href: "/cybersecurity/consulting", desc: "Expert strategy and advisory for your security." },
    ],
  },
  compliance: {
    label: "Compliance",
    items: [
      { title: "ISO 27001", href: "/compliance/iso-27001", desc: "Information security management certification." },
      { title: "ISO 42001 (AI)", href: "/compliance/iso-42001", desc: "AI management systems certification." },
      { title: "ISO 9001", href: "/compliance/iso-9001", desc: "Quality management system certification." },
      { title: "GDPR", href: "/compliance/gdpr", desc: "EU/UK data protection compliance." },
      { title: "PCI DSS", href: "/compliance/pci-dss", desc: "Payment card data security compliance." },
      { title: "HIPAA", href: "/compliance/hipaa", desc: "Healthcare data privacy and security." },
      { title: "SOC 2", href: "/compliance/soc2", desc: "Trust services criteria for service providers." },
    ],
  },
  it: {
    label: "IT Managed Services",
    items: [
      { title: "Managed IT Services", href: "/it-managed-services/managed-it-services", desc: "End-to-end IT management and support." },
      { title: "Help Desk & Support", href: "/it-managed-services/helpdesk-support", desc: "Responsive helpdesk, remote and on-site." },
      { title: "Cloud Infrastructure", href: "/it-managed-services/cloud-infrastructure", desc: "Secure, scalable cloud foundations." },
      { title: "Cloud Migration", href: "/it-managed-services/cloud-migration", desc: "Move to the cloud securely, with minimal downtime." },
      { title: "Cloud Optimization", href: "/it-managed-services/cloud-optimization", desc: "Cut cloud costs and boost performance." },
      { title: "Backup & Disaster Recovery", href: "/it-managed-services/backup-disaster-recovery", desc: "Business continuity when it matters most." },
    ],
  },
  industries: {
    label: "Industries",
    items: [
      { title: "Startups & Scaleups", href: "/industries/startups", desc: "Security that closes enterprise deals." },
      { title: "Healthcare & BFSI", href: "/industries/healthcare-bfsi", desc: "Regulatory-grade security for regulated sectors." },
      { title: "E-commerce & Fintech", href: "/industries/ecommerce-fintech", desc: "Secure every transaction, at any scale." },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { title: "Blog", href: "/blog", desc: "Insights on security, compliance & IT." },
      { title: "Glossary", href: "/glossary", desc: "Plain-English security & compliance terms." },
      { title: "Whitepapers", href: "/whitepapers", desc: "In-depth research and guidance." },
      { title: "eBooks", href: "/ebook", desc: "Practical guides you can download." },
    ],
  },
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const toggleDropdown = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown((cur) => (cur === menu ? null : menu))
  }

  const handleGroupBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setActiveDropdown(null)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="relative z-50 flex items-center">
          <Image
            src="/logo.png"
            alt="Aadit Technologies"
            width={200}
            height={89}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 text-sm font-medium md:flex">
          {Object.entries(MENUS).map(([key, menu]) => (
            <div
              key={key}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              onBlur={handleGroupBlur}
              onKeyDown={(e) => {
                if (e.key === "Escape") setActiveDropdown(null)
              }}
            >
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                aria-expanded={activeDropdown === key}
                aria-haspopup="true"
                onClick={() => toggleDropdown(key)}
                onFocus={() => handleMouseEnter(key)}
              >
                {menu.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === key && (
                <div className="absolute left-0 top-full w-80 pb-4 pt-2">
                  <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-popover shadow-xl shadow-primary/5 animate-fade-up">
                    <div className="grid gap-1 p-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href ?? "#"}
                          className="group/link rounded-lg p-3 transition-colors hover:bg-accent"
                        >
                          <div className="font-semibold text-foreground group-hover/link:text-primary">
                            {item.title}
                          </div>
                          {item.desc && (
                            <div className="mt-0.5 text-xs text-muted-foreground">{item.desc}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

        </nav>

        <div className="hidden md:flex">
          <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
            Book a Call
          </Link>
        </div>

        <button
          className="relative z-50 p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-[4.5rem] overflow-y-auto border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-6 p-4 text-base">
            {Object.entries(MENUS).map(([key, menu]) => (
              <div key={key}>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {menu.label}
                </div>
                <div className="flex flex-col border-l border-border pl-4">
                  {menu.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href ?? "#"}
                      onClick={() => setMobileOpen(false)}
                      className="py-2"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-border pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={buttonVariants({ variant: "primary", size: "lg", className: "w-full" })}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
