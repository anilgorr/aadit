import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { Accordion } from '@/components/ui/accordion'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Card } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { buildMetadata, faqSchema, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  path: '/compare/soc-2-vs-iso-27001',
  title: 'SOC 2 vs ISO 27001: Which Do You Need First?',
  description:
    'Compare SOC 2 and ISO 27001 by scope, issuer, validity, buyer expectations, and practical sequencing for Indian SaaS companies.',
})

const FAQs = [
  {
    question: 'Is SOC 2 a certification?',
    answer:
      'No. SOC 2 is an attestation report issued by a licensed CPA firm. It describes controls relevant to selected Trust Services Criteria over a defined period or at a point in time.',
  },
  {
    question: 'Is ISO 27001 a certification?',
    answer:
      "Yes. ISO 27001 certification is issued to an organisation by an accredited certification body after it audits the organisation's information security management system.",
  },
  {
    question: 'Can an organisation pursue SOC 2 and ISO 27001 together?',
    answer:
      'Yes. The programmes have meaningful control overlap, but each has different scope, evidence, and audit expectations. A combined gap assessment can reduce duplicated work.',
  },
  {
    question: 'Which one should an Indian SaaS company choose first?',
    answer:
      'Start with the requirement that is most likely to unblock your priority customers. US enterprise buyers often ask for SOC 2, while organisations selling across international markets often value ISO 27001.',
  },
]

const rows = [
  [
    'What it is',
    'An attestation report on controls',
    'A certification of an information security management system',
  ],
  ['Issued by', 'A licensed CPA firm', 'An accredited certification body'],
  [
    'Primary audience',
    'Common in US service-provider due diligence',
    'Recognised internationally across many sectors',
  ],
  [
    'Validity',
    'Covers a defined point or observation period',
    'Typically maintained through surveillance audits within a certification cycle',
  ],
  [
    'Scope',
    'Systems and services in the report boundary',
    "The organisation's defined ISMS boundary",
  ],
  [
    'Best starting point',
    'When US customers require a SOC 2 report',
    'When a broad, international ISMS certification is needed',
  ],
]

export default function Soc2VsIso27001Page() {
  const schema = [
    webPageSchema({
      path: '/compare/soc-2-vs-iso-27001',
      name: 'SOC 2 vs ISO 27001: Which Does an Indian SaaS Company Need First?',
      description:
        'If your highest-priority customers are primarily in the United States, SOC 2 may be the immediate commercial requirement. If you need an internationally recognised information-security management system, ISO 27001 may be the better starting point. The two programmes overlap in controls, but their audit models and buyer expectations are different.',
    }),
    faqSchema(FAQs),
  ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={schema} />
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Compare', href: '/compare/soc-2-vs-iso-27001' },
                { label: 'SOC 2 vs ISO 27001', href: '/compare/soc-2-vs-iso-27001' },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              SOC 2 vs ISO 27001: Which Does an Indian SaaS Company Need First?
            </h1>
            <p className="answer-first mt-6 max-w-3xl text-lg leading-relaxed text-foreground md:text-xl">
              If your highest-priority customers are primarily in the United States, SOC 2 may be
              the immediate commercial requirement. If you need an internationally recognised
              information-security management system, ISO 27001 may be the better starting point.
              The two programmes overlap in controls, but their audit models and buyer expectations
              are different.
            </p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <h2 className="text-2xl font-bold text-foreground">The practical comparison</h2>
            <table className="mt-7 w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-4 font-semibold text-foreground">Question</th>
                  <th className="p-4 font-semibold text-foreground">SOC 2</th>
                  <th className="p-4 font-semibold text-foreground">ISO 27001</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, soc2, iso]) => (
                  <tr key={label} className="border-b align-top">
                    <th className="p-4 font-semibold text-foreground">{label}</th>
                    <td className="p-4 text-muted-foreground">{soc2}</td>
                    <td className="p-4 text-muted-foreground">{iso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section background="muted">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="p-7">
              <h2 className="text-xl font-bold text-foreground">What SOC 2 actually is</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                SOC 2 is a reporting framework based on the AICPA Trust Services Criteria. A Type I
                report evaluates control design at a point in time; a Type II report evaluates
                operating effectiveness over an observation period. It is an attestation, not a
                certificate.
              </p>
            </Card>
            <Card className="p-7">
              <h2 className="text-xl font-bold text-foreground">What ISO 27001 actually is</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                ISO 27001 is a standard for an information security management system. It requires a
                defined scope, risk-based planning, objectives, control decisions, internal review,
                and continual improvement. Certification is issued to the organisation.
              </p>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Where the programmes overlap</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Both programmes expect organisations to understand risk, define policies, manage
              access, protect data, monitor operations, handle incidents, and review controls. That
              overlap is why a shared gap assessment and evidence plan can make a second programme
              more efficient than starting from scratch.
            </p>
            <h2 className="mt-10 text-2xl font-bold text-foreground">A buyer-led decision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Avoid treating either framework as a generic badge. Ask which customers are asking for
              what, which markets you serve, what scope you can operate consistently, and what
              assurance will remain useful after the next sales cycle. The best sequence is the one
              that supports real business commitments while building a durable security programme.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/compliance/soc2" className="font-semibold text-primary hover:underline">
                Explore SOC 2 readiness
              </Link>
              <Link
                href="/compliance/iso-27001"
                className="font-semibold text-primary hover:underline"
              >
                Explore ISO 27001 consulting
              </Link>
            </div>
          </div>
        </Section>

        <Section background="muted">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Frequently asked questions</h2>
            <Accordion items={FAQs} />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
