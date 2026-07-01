import React from "react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion } from "@/components/ui/accordion"
import { CheckCircle2, ArrowRight } from "lucide-react"

export interface ServicePageTemplateProps {
  title: string
  description: string
  features: { title: string; description: string; icon: React.ReactNode }[]
  benefits: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  relatedServices: { title: string; description: string; href: string }[]
}

export function ServicePageTemplate({
  title,
  description,
  features,
  benefits,
  faqs,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* 1. Hero */}
      <Section background="muted" className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-10 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">Get a Free Assessment</Button>
            <Button size="lg" variant="ghost">View Case Studies</Button>
          </div>
        </div>
      </Section>

      {/* 2. What's Included */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">What's Included</h2>
          <p className="mt-4 text-muted-foreground">Comprehensive coverage for your organization.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="p-8">
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Benefits Grid */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <h4 className="font-bold text-lg">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. FAQ Accordion */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* 5. Related Services */}
      <Section background="muted">
        <h2 className="text-2xl font-bold mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, i) => (
            <Card key={i} className="p-6 flex flex-col h-full group hover:border-primary/50 transition-colors">
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{service.description}</p>
              <div className="flex items-center text-primary text-sm font-medium mt-auto">
                Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. Closing CTA Banner */}
      <Section className="bg-primary/5 border-y border-primary/10">
        <div className="text-center max-w-3xl mx-auto py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to secure your business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Speak with one of our certified security architects today to discuss your specific requirements.
          </p>
          <Button size="lg" variant="primary">Book a Free Consultation</Button>
        </div>
      </Section>
    </div>
  )
}