import { services, type Service } from "@/.velite"

export type Hub = "cybersecurity" | "compliance" | "it-managed-services"

export const HUB_ORDER: Hub[] = [
  "cybersecurity",
  "compliance",
  "it-managed-services",
]

export interface HubMeta {
  slug: Hub
  title: string
  metaDescription: string
  intro: string
  buyerGuide: {
    title: string
    description: string
    steps: string[]
    faqs: { question: string; answer: string }[]
  }
}

export const HUBS: Record<Hub, HubMeta> = {
  cybersecurity: {
    slug: "cybersecurity",
    title: "Cybersecurity",
    metaDescription:
      "Managed cybersecurity services for Indian organisations: SOC, VAPT, risk assessment, incident response, endpoint and network security, and advisory support.",
    intro:
      "Aadit Technologies helps organisations identify, reduce, and respond to cyber risk through monitoring, testing, incident readiness, endpoint and network security, and practical security guidance.",
    buyerGuide: {
      title: "How to prioritise cybersecurity work",
      description:
        "Effective cybersecurity programmes begin with the systems, data, and business processes that would cause the greatest disruption if they were compromised.",
      steps: [
        "Map the applications, infrastructure, identities, and data that support critical operations.",
        "Use risk assessments and testing to identify the most material control gaps before committing to tools or remediation projects.",
        "Set clear ownership, escalation paths, and evidence requirements so improvements can be sustained and measured.",
      ],
      faqs: [
        {
          question: "Where should an organisation start with cybersecurity?",
          answer:
            "Start by identifying critical assets and the risks that affect them. A focused assessment can help teams prioritise the controls and improvements that matter most.",
        },
        {
          question: "How do VAPT and managed monitoring work together?",
          answer:
            "VAPT identifies weaknesses in a defined scope, while managed monitoring helps detect suspicious activity over time. They address different parts of a practical security programme.",
        },
      ],
    },
  },
  compliance: {
    slug: "compliance",
    title: "Compliance & Audits",
    metaDescription:
      "Certification and audit readiness for ISO 27001, ISO 42001, ISO 9001, GDPR, PCI-DSS, HIPAA, and SOC 2.",
    intro:
      "Achieve and maintain the certifications your customers and regulators expect. Explore our compliance services below.",
    buyerGuide: {
      title: "How to plan compliance readiness",
      description:
        "Compliance work is strongest when it is treated as an operating discipline rather than a document-only exercise for an upcoming audit.",
      steps: [
        "Confirm the framework, customer obligation, or regulatory requirement that applies to your organisation and scope.",
        "Establish ownership for policies, controls, evidence, and remediation before collecting documentation.",
        "Use a gap assessment to sequence practical changes and prepare for independent audit or customer review.",
      ],
      faqs: [
        {
          question: "Which compliance framework should we pursue first?",
          answer:
            "The right starting point depends on your customers, data, services, and contractual obligations. A scoped readiness review can clarify the most relevant framework.",
        },
        {
          question: "Is certification only about policies and documents?",
          answer:
            "No. Auditors and customers also look for evidence that relevant controls are operating in practice, including ownership, records, and repeatable processes.",
        },
      ],
    },
  },
  "it-managed-services": {
    slug: "it-managed-services",
    title: "IT Managed Services",
    metaDescription:
      "Proactive monitoring, management, and support for your entire IT infrastructure — from endpoints to cloud environments.",
    intro:
      "Aadit Technologies provides 24/7 managed IT services designed to keep your business running reliably while reducing operational overhead. Explore our managed services below.",
    buyerGuide: {
      title: "How to assess managed IT support",
      description:
        "Managed IT is most valuable when service scope, responsibilities, response expectations, and visibility are defined before day-to-day support begins.",
      steps: [
        "Inventory the endpoints, users, cloud services, and business applications that need ongoing support.",
        "Agree on ownership boundaries, escalation paths, reporting needs, and the priorities for continuity and security.",
        "Review service performance regularly so support, cloud, backup, and security work stay aligned with business change.",
      ],
      faqs: [
        {
          question: "What should be included in a managed IT scope?",
          answer:
            "A useful scope identifies the systems and users covered, support responsibilities, escalation procedures, reporting, and any cloud, backup, or security dependencies.",
        },
        {
          question: "Can managed IT and cybersecurity be coordinated?",
          answer:
            "Yes. Coordinating operational IT support with security monitoring, identity, endpoint, and backup practices can reduce gaps between day-to-day operations and risk management.",
        },
      ],
    },
  },
}

export function isHub(value: string): value is Hub {
  return (HUB_ORDER as string[]).includes(value)
}

export function getServicesByHub(hub: Hub): Service[] {
  return services
    .filter((service) => service.hub === hub)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
}

export function getService(hub: string, slug: string): Service | undefined {
  return services.find(
    (service) => service.hub === hub && service.slug === slug
  )
}

export interface RelatedLink {
  title: string
  metaDescription: string
  href: string
}

export function getRelated(slugs: string[]): RelatedLink[] {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service))
    .map((service) => ({
      title: service.title,
      metaDescription: service.metaDescription,
      href: service.permalink,
    }))
}
