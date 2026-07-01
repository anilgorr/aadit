import React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NotFoundSearch } from "@/components/not-found-search"
import { ShieldCheck, FileCheck, Server, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Page not found",
}

const HUBS = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Penetration testing, VAPT, and 24/7 incident response.",
    href: "/services/cybersecurity",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audits",
    desc: "ISO 27001, SOC 2, HIPAA, and PCI-DSS readiness.",
    href: "/services/compliance",
  },
  {
    icon: Server,
    title: "IT Managed Services",
    desc: "Cloud operations, help desk, and disaster recovery.",
    href: "/services/managed-it",
  },
]

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="w-full flex-1">
        <section className="relative overflow-hidden bg-midnight text-midnight-foreground">
          <div
            className="glow-blob animate-drift-slow absolute -left-32 -top-24 h-96 w-96 opacity-40"
            style={{ background: "oklch(0.53 0.22 262)" }}
          />
          <div
            className="glow-blob animate-drift absolute -right-24 top-40 h-80 w-80 opacity-30"
            style={{ background: "oklch(0.72 0.15 220)" }}
          />
          <div className="grid-lines mask-radial pointer-events-none absolute inset-0" />

          <div className="container relative mx-auto max-w-4xl px-4 py-24 text-center md:px-6 md:py-32">
            <div className="animate-fade-up">
              <span className="text-gradient text-8xl font-bold tracking-tighter md:text-9xl">
                404
              </span>
              <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
                This page went off the grid.
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                The page you’re looking for may have moved or no longer exists. Search below or jump
                straight to one of our service hubs.
              </p>

              <div className="mt-10">
                <NotFoundSearch />
              </div>
            </div>

            <div className="mt-14 grid gap-4 text-left sm:grid-cols-3">
              {HUBS.map((hub) => (
                <Link
                  key={hub.title}
                  href={hub.href}
                  className="group card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-cyan/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.62_0.2_262)] text-white shadow-lg shadow-primary/25">
                    <hub.icon className="h-6 w-6" />
                  </div>
                  <h2 className="flex items-center gap-1 font-bold text-white">
                    {hub.title}
                    <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-cyan" />
                  </h2>
                  <p className="mt-1.5 text-sm text-white/60">{hub.desc}</p>
                </Link>
              ))}
            </div>

            <p className="mt-12 text-sm text-white/60">
              Still stuck?{" "}
              <Link href="/contact" className="font-semibold text-cyan hover:underline">
                Contact our team
              </Link>{" "}
              and we’ll point you in the right direction.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
