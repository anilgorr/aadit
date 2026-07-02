import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  items: { question: string; answer: string }[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("w-full divide-y divide-border", className)}>
      {items.map((item, index) => (
        <details key={index} className="group">
          <summary className="flex w-full cursor-pointer items-center justify-between py-4 text-left font-medium transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown
              className="ml-4 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="faq-content pb-4 text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
