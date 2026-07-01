"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const MENUS: Record<
  string,
  { label: string; items: { title: string; desc?: string }[] }
> = {
  cyber: {
    label: "Cybersecurity",
    items: [
      { title: "Penetration Testing", desc: "Identify and fix vulnerabilities before attackers do." },
      { title: "Vulnerability Assessment", desc: "Continuous scanning and security monitoring." },
      { title: "Security Architecture", desc: "Design resilient infrastructure from the ground up." },
      { title: "Incident Response", desc: "24/7 rapid response to security breaches." },
    ],
  },
  compliance: {
    label: "Compliance",
    items: [
      { title: "ISO 27001", desc: "Information security management standard." },
      { title: "SOC 2", desc: "Trust services criteria for service organizations." },
      { title: "HIPAA", desc: "Healthcare data privacy and security." },
      { title: "DPDP Act", desc: "India Digital Personal Data Protection readiness." },
    ],
  },
  it: {
    label: "IT Managed Services",
    items: [
      { title: "Infrastructure Management", desc: "Proactive monitoring and maintenance." },
      { title: "Cloud Operations", desc: "AWS, Azure, and GCP management." },
      { title: "Help Desk", desc: "24/7 technical support." },
      { title: "Backup & DR", desc: "Business continuity and disaster recovery." },
    ],
  },
  industries: {
    label: "Industries",
    items: [
      { title: "Healthcare" },
      { title: "BFSI" },
      { title: "Fintech" },
      { title: "SaaS" },
      { title: "Enterprise" },
    ],
  },
  resources: {
    label: "Resources",
    items: [{ title: "Blog" }, { title: "Glossary" }, { title: "Whitepapers" }, { title: "EBooks" }],
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
                          href="#"
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

          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button variant="primary">Book a Call</Button>
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
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="py-2"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/about"
              className="border-t border-border py-2 font-bold"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <div className="border-t border-border pt-4">
              <Button variant="primary" className="w-full" size="lg">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
