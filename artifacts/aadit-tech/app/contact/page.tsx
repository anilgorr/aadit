import type { Metadata } from "next"
import { Mail, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { buildMetadata } from "@/lib/seo"
import { SITE_LOCALITY, SITE_REGION } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  path: "/contact",
  title: "Contact Us",
  description:
    "Get in touch with Aadit Technologies about cybersecurity, compliance, and IT managed services. Send us a message and our team will get back to you.",
})

const CONTACT_EMAIL = "anilgorraladaku@gmail.com"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Let&apos;s talk security
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Whether you need a penetration test, an audit-ready compliance programme, or a managed
              IT partner, our team is ready to help. Send us a message and we&apos;ll get back to
              you.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground">Get in touch</h2>
              <p className="mt-3 text-muted-foreground">
                Prefer email or want to reach us directly? Use the details below and we&apos;ll route
                your message to the right specialist.
              </p>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <p className="text-muted-foreground">
                      {SITE_LOCALITY}, {SITE_REGION}, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-foreground">Response</div>
                    <p className="text-muted-foreground">
                      We review every enquiry and reply as soon as we can.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <Card className="p-6 md:p-8">
                <ContactForm />
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
