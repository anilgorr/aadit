import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buildMetadata } from "@/lib/seo"
import { LEGAL_NAME } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy",
  description:
    "How Aadit Technologies collects, uses, and protects personal information across our services and website, including visitors in India, the USA, and the UAE.",
})

const LAST_UPDATED = "1 June 2025"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl space-y-10 text-muted-foreground">
            <div className="space-y-4 leading-relaxed">
              <p>
                {LEGAL_NAME} (&ldquo;Aadit Technologies&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) is committed to protecting the privacy of visitors to our website
                and the clients and prospects we work with. This policy explains what personal
                information we collect, how we use it, and the choices you have. It applies to our
                website and to enquiries handled by our offices in India, the United States, and the
                United Arab Emirates.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us — for example, when you submit our
                contact or consultation form. This may include your name, email address, phone
                number, the service you are interested in, and any details you include in your
                message. We also collect limited technical information automatically when you visit
                our website, such as your IP address, browser type, and pages viewed, in order to
                operate and improve the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                <li>To respond to your enquiries and provide the services you request.</li>
                <li>
                  To communicate with you about your enquiry, our services, and relevant updates.
                </li>
                <li>To operate, maintain, secure, and improve our website and services.</li>
                <li>
                  To comply with legal obligations and to protect our rights, users, and systems.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Cookies &amp; Analytics</h2>
              <p className="leading-relaxed">
                Our website may use cookies and similar technologies to remember your preferences and
                to understand how the site is used. You can control or disable cookies through your
                browser settings; disabling some cookies may affect how the site functions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">How We Share Your Information</h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share it with trusted service
                providers who help us operate our business (such as hosting and communications
                providers), and where required to comply with the law or protect our legal rights.
                Any such providers are expected to handle your information securely and only for the
                purposes we specify.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Data Retention &amp; Security</h2>
              <p className="leading-relaxed">
                We retain personal information only for as long as necessary to fulfil the purposes
                described in this policy or as required by law. We apply appropriate technical and
                organisational measures to protect personal information against unauthorised access,
                loss, or misuse.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              <p className="leading-relaxed">
                Depending on your location, you may have rights to access, correct, update, or delete
                the personal information we hold about you, and to object to or restrict certain
                processing. To exercise any of these rights, please contact us using the details
                below and we will respond in accordance with applicable law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">International Data Transfers</h2>
              <p className="leading-relaxed">
                As a business with offices in India, the United States, and the United Arab Emirates,
                your information may be processed in any of these locations. Where information is
                transferred across borders, we take steps to ensure it remains protected in line with
                this policy and applicable law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this policy from time to time. When we do, we will revise the &ldquo;Last
                updated&rdquo; date at the top of this page.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy or how we handle your personal
                information, please{" "}
                <Link href="/contact" className="font-medium text-primary hover:underline">
                  get in touch with us
                </Link>
                .
              </p>
            </section>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
