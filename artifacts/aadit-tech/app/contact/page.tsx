import type { Metadata } from "next"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  path: "/contact",
  title: "Contact Us",
  description:
    "Contact Aadit Technologies, a specialised cybersecurity and IT managed services provider with offices in India, the USA, and Dubai. Reach out to our team today.",
})

const CONTACT_EMAIL = "anilgorraladaku@gmail.com"

const OFFICES = [
  {
    country: "India",
    lines: [
      "#21 & 22, AnandAM, 4th Main Road, 3rd Block,",
      "Opposite Axis Bank, New BEL Road,",
      "Bangalore - 560094",
    ],
    phone: "+91 9663445445",
    phoneHref: "tel:+919663445445",
  },
  {
    country: "USA",
    lines: ["4139 164th AVE SE,", "Bellevue, WA 98006-8906"],
    phone: null,
    phoneHref: null,
  },
  {
    country: "Dubai",
    lines: [
      "Aadit Technologies FZCO, Building A1,",
      "Dubai Digital Park, Silicon Oasis, Dubai",
    ],
    phone: "+971 52 184 7477",
    phoneHref: "tel:+971521847477",
  },
]

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
                {OFFICES.map((office) => (
                  <li key={office.country} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-foreground">{office.country}</div>
                      <address className="mt-1 not-italic text-muted-foreground">
                        {office.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                      {office.phone && office.phoneHref && (
                        <a
                          href={office.phoneHref}
                          className="mt-2 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Phone className="h-4 w-4" />
                          {office.phone}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
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
