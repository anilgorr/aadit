import React from "react"

export function StatBlock({
  stat,
  label,
  subtext,
}: {
  stat: string
  label: string
  subtext?: string
}) {
  return (
    <div className="flex flex-col gap-1 p-6 text-center md:text-left">
      <div className="text-gradient text-5xl font-bold tracking-tighter">{stat}</div>
      <div className="mt-1 text-lg font-semibold text-foreground">{label}</div>
      {subtext && <div className="mt-1 text-sm text-muted-foreground">{subtext}</div>}
    </div>
  )
}
