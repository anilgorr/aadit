import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "muted"
}

export function Section({ className, background = "white", children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", background === "muted" ? "bg-muted" : "bg-background", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  )
}