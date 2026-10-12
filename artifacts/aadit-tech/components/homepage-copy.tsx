import Link from 'next/link'
import home from '@/content/homepage.json'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'

// Long phrases take precedence so a checklist link is not swallowed by "SOC 2".
const LINKS: Record<string, string> = {
  'SOC 2 readiness checklist': '/resources/soc-2-checklist',
  'comparison of SOC 2 and ISO 27001': '/compare/soc-2-vs-iso-27001',
  'VAPT and penetration testing': '/cybersecurity/vapt',
  'Managed SOC': '/cybersecurity/managed-soc',
  'SOC as a Service': '/cybersecurity/soc-as-a-service',
  'Incident response': '/cybersecurity/incident-response',
  'email security': '/cybersecurity/email-security',
  'ISO 27001': '/compliance/iso-27001',
  'ISO 42001': '/compliance/iso-42001',
  'ISO 9001': '/compliance/iso-9001',
  'SOC 2': '/compliance/soc2',
  'PCI DSS': '/compliance/pci-dss',
  'HIPAA': '/compliance/hipaa',
  'GDPR': '/compliance/gdpr',
  'DPDP Act': '/compliance/dpdp-act',
  'Managed IT services': '/it-managed-services/managed-it-services',
  'Help desk and support': '/it-managed-services/helpdesk-support',
  'Backup and disaster recovery': '/it-managed-services/backup-disaster-recovery',
}
const phrases = Object.keys(LINKS).sort((a, b) => b.length - a.length)
const pattern = new RegExp(`(${phrases.join('|')})`, 'g')

export function HomepageText({ text }: { text: string }) {
  return text.split(pattern).map((part, i) =>
    LINKS[part] ? (
      <Link key={i} href={LINKS[part]} className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
        {part}
      </Link>
    ) : part,
  )
}

export function HomepageReasons() {
  const paragraphs = home.sections['Why companies come to us']
  return (
    <Section aria-labelledby="homepage-reasons">
      <h2 id="homepage-reasons" className="text-3xl font-bold tracking-tight md:text-4xl">Why companies come to us</h2>
      <p className="mt-4 text-muted-foreground">{paragraphs[0]}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {paragraphs.slice(1).map((text) => {
          const split = text.indexOf('. ')
          return (
            <Card key={text} className="p-8">
              <h3 className="text-xl font-bold">{text.slice(0, split + 1)}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{text.slice(split + 2)}</p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export function HomepageEngagement() {
  return (
    <>
      <Section background="muted" aria-labelledby="homepage-industries">
        <h2 id="homepage-industries" className="text-3xl font-bold tracking-tight md:text-4xl">Who we work with</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {home.sections['Who we work with'].map((text) => {
            const [title, ...description] = text.split(' — ')
            return (
              <Card key={title} className="p-8">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground"><HomepageText text={description.join(' — ')} /></p>
              </Card>
            )
          })}
        </div>
      </Section>
      <Section aria-labelledby="homepage-partner">
        <div className="mx-auto max-w-3xl">
          <h2 id="homepage-partner" className="text-3xl font-bold tracking-tight md:text-4xl">Why one partner for all three</h2>
          {home.sections['Why one partner for all three'].map((text) => (
            <p key={text} className="mt-6 leading-relaxed text-muted-foreground">{text}</p>
          ))}
          <h2 className="mt-12 text-3xl font-bold tracking-tight md:text-4xl">How an engagement starts</h2>
          <ol className="mt-6 list-decimal space-y-4 pl-6 text-muted-foreground">
            {home.sections['How an engagement starts'].slice(0, -1).map((text) => <li key={text} className="pl-2 leading-relaxed">{text}</li>)}
          </ol>
        </div>
      </Section>
    </>
  )
}

export function HomepageFaqs() {
  return (
    <Section background="muted" aria-labelledby="homepage-faq">
      <div className="mx-auto max-w-3xl">
        <h2 id="homepage-faq" className="text-3xl font-bold tracking-tight md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-border">
          {home.faqs.map(({ question, answer }) => (
            <div key={question} className="py-6">
              <h3 className="text-lg font-semibold">{question}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Last updated: <time dateTime={home.updatedAt}>{new Date(`${home.updatedAt}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>
        </p>
      </div>
    </Section>
  )
}
