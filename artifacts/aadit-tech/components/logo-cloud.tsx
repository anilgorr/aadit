import React from "react"
import { ShieldCheck } from "lucide-react"

const FRAMEWORKS = [
  "ISO 27001",
  "SOC 2",
  "HIPAA",
  "PCI-DSS",
  "GDPR",
  "DPDP Act",
]

export function LogoCloud() {
  return (
    <div className="flex w-full flex-col items-center border-b border-border bg-background py-12">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Security &amp; compliance frameworks we work with
      </p>
      <div className="flex max-w-5xl flex-wrap items-center justify-center gap-3 px-4 md:gap-4">
        {FRAMEWORKS.map((name) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ShieldCheck className="h-4 w-4 text-primary/70" />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
