"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Search, ArrowRight } from "lucide-react"

type Entry = { title: string; href: string; desc: string }

const INDEX: Entry[] = [
  {
    title: "Cybersecurity",
    href: "/cybersecurity",
    desc: "Penetration testing, vulnerability assessments, incident response",
  },
  {
    title: "Compliance & Audits",
    href: "/compliance",
    desc: "ISO 27001, SOC 2, HIPAA, PCI-DSS readiness",
  },
  {
    title: "IT Managed Services",
    href: "/it-managed-services",
    desc: "Cloud operations, help desk, backup & disaster recovery",
  },
  { title: "Contact", href: "/contact", desc: "Talk to a certified security architect" },
  { title: "Blog", href: "/blog", desc: "Security insights, guides, and updates" },
  { title: "Home", href: "/", desc: "Back to the homepage" },
]

export function NotFoundSearch() {
  const [q, setQ] = useState("")
  const query = q.trim().toLowerCase()
  const results = query
    ? INDEX.filter((i) => (i.title + " " + i.desc).toLowerCase().includes(query))
    : []

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search for a service or page…"
          aria-label="Search the site"
          className="h-14 w-full rounded-xl border border-white/15 bg-white/[0.06] pl-12 pr-4 text-base text-white placeholder:text-white/40 backdrop-blur-sm transition-colors focus:border-cyan/60 focus:outline-none focus:ring-2 focus:ring-cyan/30"
        />
      </div>

      {query && (
        <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-midnight-2/80 text-left backdrop-blur-md">
          {results.length > 0 ? (
            <ul className="divide-y divide-white/5">
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-white/5"
                  >
                    <span>
                      <span className="block font-semibold text-white">{r.title}</span>
                      <span className="block text-sm text-white/55">{r.desc}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-cyan" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-4 text-sm text-white/55">
              No matches for “{q}”. Try one of the service hubs below.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
