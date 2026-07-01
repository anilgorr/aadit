import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "muted" | "dark"
  containerClassName?: string
}

export function Section({
  className,
  background = "white",
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const bg =
    background === "muted"
      ? "bg-muted"
      : background === "dark"
        ? "bg-midnight text-midnight-foreground"
        : "bg-background"

  return (
    <section className={cn("py-16 md:py-24", bg, className)} {...props}>
      <div className={cn("container mx-auto max-w-7xl px-4 md:px-6", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
