import type { Post } from "@/.velite"
import { ORGANIZATION_ID } from "@/lib/seo"
import { absoluteUrl } from "@/lib/site"

export interface AuthorProfile {
  slug: string
  name: string
  jobTitle: string
  description: string
  metaDescription?: string
  expertise: string[]
  bio: string[]
  location?: string
  image?: string
  linkedIn?: string
  updatedAt?: string
}

export const AUTHORS: AuthorProfile[] = [
  {
    slug: "suman-kv",
    name: "Suman KV",
    jobTitle: "Sales & Marketing",
    description: "Suman KV works with companies going through cybersecurity and compliance programmes at Aadit Technologies, a cybersecurity, compliance and managed IT services company operating since 2017.",
    metaDescription: "Suman KV works in Sales & Marketing at Aadit Technologies, covering cybersecurity, compliance programmes, managed SOC and enterprise buyer requirements.",
    expertise: ["Vulnerability assessment and penetration testing", "Security operations and managed SOC", "ISO 27001 and SOC 2 certification programmes", "GDPR and India’s DPDP Act", "Managed IT services and cloud operations"],
    bio: [
      "His work spans the three questions buyers ask before they sign: whether a security programme will survive contact with an enterprise vendor review, what certification actually costs in time and internal effort, and which framework a given buyer will accept. That covers VAPT and penetration testing engagements, 24/7 managed SOC operations, and certification programmes across ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR and India’s Digital Personal Data Protection Act.",
      "He writes about what happens after the certificate is issued — where security programmes decay once the auditor leaves, why controls with no named owner stop running, and how Indian businesses should prepare for DPDP enforcement rather than wait for it.",
    ],
    location: "Bengaluru, India",
    updatedAt: "2026-10-06",
  },
  {
    slug: "anil-gorraladaku",
    name: "Anil Gorraladaku",
    jobTitle: "Chief Executive Officer",
    description:
      "Anil Gorraladaku is the Chief Executive Officer of Aadit Technologies, focused on making cybersecurity, compliance, and managed IT practical for growing organisations.",
    metaDescription:
      "Anil Gorraladaku is Aadit Technologies' CEO, focused on practical cybersecurity, compliance, and managed IT for growing organisations.",
    expertise: [
      "Compliance strategy",
      "Managed security services",
      "Cybersecurity procurement",
      "Business resilience",
    ],
    bio: [
      "Anil Gorraladaku leads Aadit Technologies, helping Indian enterprises and growing companies turn security and compliance requirements into workable operating programmes.",
      "His writing focuses on compliance strategy, choosing security providers, business risk, and the commercial decisions that help security programmes move forward.",
    ],
  },
  {
    slug: "srinivas-gadicherla",
    name: "Srinivas Gadicherla",
    jobTitle: "Chief Technology Officer",
    description:
      "Srinivas Gadicherla is the Chief Technology Officer of Aadit Technologies, with experience across cybersecurity, cloud infrastructure, and enterprise IT.",
    expertise: [
      "Security operations",
      "Vulnerability assessment and penetration testing",
      "Cloud security",
      "Enterprise infrastructure",
    ],
    bio: [
      "Srinivas Gadicherla leads technical delivery at Aadit Technologies across managed security operations, vulnerability testing, cloud security, and enterprise IT.",
      "His articles explain technical security subjects in practical terms for teams responsible for reducing risk and improving resilience.",
    ],
  },
]

export function getAuthor(slug: string): AuthorProfile | undefined {
  return AUTHORS.find((author) => author.slug === slug)
}

export function getAuthorForPost(post: Pick<Post, "slug" | "tags" | "author">): AuthorProfile {
  const named = AUTHORS.find((author) => author.name.toLowerCase() === post.author.name.toLowerCase())
  if (named) return named
  const technicalSignals = [
    "vapt",
    "soc",
    "siem",
    "cloud",
    "network",
    "attack",
    "cybercrime",
    "threat",
    "security operations",
    "incident",
  ]
  const content = `${post.slug} ${post.tags.join(" ")}`.toLowerCase()

  return technicalSignals.some((signal) => content.includes(signal))
    ? getAuthor("srinivas-gadicherla")!
    : getAuthor("anil-gorraladaku")!
}

export function authorSchema(author: AuthorProfile) {
  const url = absoluteUrl(`/authors/${author.slug}`)
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: author.name,
    url,
    jobTitle: author.jobTitle,
    worksFor: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Aadit Technologies", url: absoluteUrl("/") },
    description: author.description,
    knowsAbout: author.expertise,
    ...(author.image ? { image: absoluteUrl(author.image) } : {}),
    ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}),
    ...(author.location ? { homeLocation: { "@type": "Place", name: author.location } } : {}),
  }
}