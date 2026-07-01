"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "Aadit Technologies completely transformed our security posture. Their penetration testing team found critical vulnerabilities that previous auditors missed.",
    author: "Sarah Jenkins",
    title: "CISO",
    company: "Fintech Solutions Inc.",
  },
  {
    quote: "Getting SOC 2 compliant seemed daunting, but Aadit guided us through every step. Their structured approach saved us months of effort.",
    author: "Rahul Desai",
    title: "CTO",
    company: "HealthCore SaaS",
  },
  {
    quote: "Their incident response team is top-notch. When we had a scare, they were online within minutes and handled the situation flawlessly.",
    author: "Michael Chang",
    title: "VP of Engineering",
    company: "Global Logistics Ltd.",
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Client Success Stories</h2>
      </div>
      <div className="relative">
        <div className="overflow-hidden px-4 md:px-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <Card className="p-8 md:p-12 relative bg-background">
                  <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl font-medium text-foreground mb-8">
                      "{t.quote}"
                    </p>
                    <div>
                      <div className="font-bold text-foreground">{t.author}</div>
                      <div className="text-sm text-muted-foreground">{t.title}, {t.company}</div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:ml-0 bg-background border shadow-sm p-2 rounded-full hover:bg-muted transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:mr-0 bg-background border shadow-sm p-2 rounded-full hover:bg-muted transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}