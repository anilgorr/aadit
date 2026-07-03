import { cn } from "@/lib/utils"

// Small "live" status indicator — a solid dot with a duplicated ::after-style
// ping ring (transform: scale + opacity only). Respects prefers-reduced-motion
// globally via the .animate-ping override in globals.css.
export function PulseDot({
  color = "bg-cyan",
  className,
}: {
  color?: string
  className?: string
}) {
  return (
    <span className={cn("relative flex h-2 w-2 shrink-0", className)}>
      <span
        className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", color)}
      />
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", color)} />
    </span>
  )
}
