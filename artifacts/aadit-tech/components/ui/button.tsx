import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "btn-glow bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5",
        secondary:
          "border border-border bg-background text-foreground hover:border-primary/40 hover:text-primary hover:bg-accent/50",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        light:
          "bg-white text-[oklch(0.17_0.035_264)] hover:bg-white/90 hover:-translate-y-0.5 shadow-lg shadow-black/20",
        outlineLight:
          "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40",
      },
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-5 py-2",
        lg: "h-12 rounded-lg px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
