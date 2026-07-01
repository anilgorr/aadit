import React from "react"

export function StatBlock({ stat, label, subtext }: { stat: string; label: string; subtext?: string }) {
  return (
    <div className="flex flex-col gap-1 p-6 text-center md:text-left">
      <div className="text-4xl font-bold tracking-tighter text-foreground">{stat}</div>
      <div className="text-lg font-medium text-foreground">{label}</div>
      {subtext && <div className="text-sm text-muted-foreground mt-2">{subtext}</div>}
    </div>
  )
}