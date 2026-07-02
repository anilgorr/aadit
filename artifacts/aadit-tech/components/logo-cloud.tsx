import React from "react"
import { BadgeCheck, ShieldCheck, Radar, Globe } from "lucide-react"

type Credential = {
  icon: React.ComponentType<{ className?: string }>
  label: string
  sublabel?: string
}

const CREDENTIALS: Credential[] = [
  { icon: BadgeCheck, label: "ISO 27001 Certified" },
  { icon: ShieldCheck, label: "SOC 2 Aligned" },
  { icon: Radar, label: "24/7 SOC Monitoring" },
  {
    icon: Globe,
    label: "3 Global Offices",
    sublabel: "Bengaluru · Bellevue, WA · Dubai",
  },
]

export function LogoCloud() {
  return (
    <div className="flex w-full flex-col items-center border-b border-border bg-background py-12">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Certified expertise, around-the-clock coverage
      </p>
      <div className="flex max-w-5xl flex-wrap items-center justify-center gap-3 px-4 md:gap-4">
        {CREDENTIALS.map(({ icon: Icon, label, sublabel }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Icon className="h-4 w-4 text-primary/70" />
            <span className="flex flex-col leading-tight">
              {label}
              {sublabel ? (
                <span className="text-xs font-medium text-muted-foreground">
                  {sublabel}
                </span>
              ) : null}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
