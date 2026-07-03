"use client"

import React from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger delay in ms, applied only once the element is in view. */
  delay?: number
}

// Scroll-reveal wrapper: fades + slides children in once, the moment they
// enter the viewport. Falls back to always-visible when JS/IO is unavailable
// or the user prefers reduced motion (see .reveal rules in globals.css).
export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={cn("reveal", isInView && "is-visible", className)}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms", ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
