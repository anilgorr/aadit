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
}

export const HUBS: Record<Hub, HubMeta> = {
  cybersecurity: {
    slug: "cybersecurity",
    title: "Cybersecurity",
    metaDescription:
      "Offensive and defensive cybersecurity services — managed SOC, VAPT, endpoint and network security, and consulting for regulated industries.",
    intro:
      "Detect, prevent, and respond to threats with a security partner that understands regulated industries. Explore our cybersecurity services below.",
  },
  compliance: {
    slug: "compliance",
    title: "Compliance & Audits",
    metaDescription:
      "Certification and audit readiness for ISO 27001, ISO 42001, ISO 9001, GDPR, PCI-DSS, HIPAA, and SOC 2.",
    intro:
      "Achieve and maintain the certifications your customers and regulators expect. Explore our compliance services below.",
  },
  "it-managed-services": {
    slug: "it-managed-services",
    title: "IT Managed Services",
    metaDescription:
      "Proactive monitoring, management, and support for your entire IT infrastructure — from endpoints to cloud environments.",
    intro:
      "Aadit Technologies provides 24/7 managed IT services designed to keep your business running reliably while reducing operational overhead. Explore our managed services below.",
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
