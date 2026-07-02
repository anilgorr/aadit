import React from "react"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "Aadit Technologies completely transformed our security posture. Their penetration testing team found critical vulnerabilities that previous auditors missed.",
    author: "Sarah Jenkins",
    title: "CISO",
    company: "Fintech Solutions Inc.",
  },
  {
    quote:
      "Getting SOC 2 compliant seemed daunting, but Aadit guided us through every step. Their structured approach saved us months of effort.",
    author: "Rahul Desai",
    title: "CTO",
    company: "HealthCore SaaS",
  },
  {
    quote:
      "Their incident response team is top-notch. When we had a scare, they were online within minutes and handled the situation flawlessly.",
    author: "Michael Chang",
    title: "VP of Engineering",
    company: "Global Logistics Ltd.",
  },
]

export function TestimonialCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Client Success Stories</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i} className="p-8 relative bg-background flex flex-col gap-6">
            <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/10" aria-hidden="true" />
            <p className="relative z-10 text-base leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-auto">
              <div className="font-bold text-foreground">{t.author}</div>
              <div className="text-sm text-muted-foreground">
                {t.title}, {t.company}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
