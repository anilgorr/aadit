export interface IndustryConcern {
  title: string
  description: string
}

export interface IndustryLink {
  label: string
  href: string
}

export interface Industry {
  slug: string
  title: string
  metaDescription: string
  tagline: string
  intro: string[]
  concerns: IndustryConcern[]
  relatedLinks: IndustryLink[]
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "startups",
    title: "Startups & Scaleups",
    metaDescription:
      "Security and compliance built for startups — pass enterprise security reviews, achieve SOC 2 and ISO 27001, and win customer trust without slowing down.",
    tagline: "Move fast without breaking trust.",
    intro: [
      "For fast-growing startups, security is no longer a back-office concern — it is a prerequisite for closing enterprise deals, raising capital, and entering regulated markets. Yet most early-stage teams have no dedicated security staff and limited time to spend on frameworks and audits.",
      "We help startups put right-sized security and compliance in place: enough to satisfy customers, investors, and regulators, without the overhead of a large internal team. From your first SOC 2 report to continuous monitoring, we act as your security function so you can stay focused on product and growth.",
    ],
    concerns: [
      {
        title: "Passing enterprise security reviews",
        description:
          "Enterprise buyers send lengthy vendor questionnaires before they sign. We help you answer them credibly and put the controls behind those answers in place.",
      },
      {
        title: "SOC 2 & ISO 27001 to close deals",
        description:
          "Achieve the certifications procurement teams ask for, with a pragmatic path from readiness assessment to audit-ready evidence.",
      },
      {
        title: "Secure-by-design product & cloud",
        description:
          "Catch misconfigurations and insecure defaults early with cloud security reviews and guidance on a secure development lifecycle.",
      },
      {
        title: "Investor & acquisition due diligence",
        description:
          "Demonstrate a mature security posture with independent vulnerability assessments and penetration tests when it matters most.",
      },
      {
        title: "Security without a dedicated team",
        description:
          "Get 24/7 monitoring and expert response through managed services, without hiring and retaining a full in-house security team.",
      },
    ],
    relatedLinks: [
      { label: "What is SOC 2?", href: "/glossary/soc-2" },
      { label: "What is ISO 27001?", href: "/glossary/iso-27001" },
      { label: "What is VAPT?", href: "/glossary/vapt" },
      { label: "Compliance & Audits", href: "/compliance" },
      { label: "Cybersecurity Services", href: "/cybersecurity" },
    ],
  },
  {
    slug: "healthcare-bfsi",
    title: "Healthcare & BFSI",
    metaDescription:
      "Regulatory-grade security for healthcare and BFSI — HIPAA, RBI cybersecurity guidelines, PCI DSS, and ISO 27001 compliance backed by 24/7 threat monitoring.",
    tagline: "Regulatory-grade security for regulated industries.",
    intro: [
      "Healthcare and BFSI (banking, financial services, and insurance) organisations handle some of the most sensitive data that exists — patient health records, financial transactions, and personal identity information. They are also among the most heavily regulated and most frequently targeted sectors.",
      "We bring deep experience with the frameworks these industries must meet, combining audit-ready compliance with continuous threat detection and response. The result is security that keeps regulators satisfied and attackers out, without disrupting critical operations.",
    ],
    concerns: [
      {
        title: "Protecting patient data (HIPAA / PHI)",
        description:
          "Safeguard protected health information with the administrative, physical, and technical controls HIPAA requires, and be ready to respond to breaches.",
      },
      {
        title: "Meeting RBI cybersecurity guidelines",
        description:
          "Align BFSI operations with regulatory expectations for security governance, monitoring, and incident reporting.",
      },
      {
        title: "PCI DSS for payment data",
        description:
          "Protect cardholder data across storage, processing, and transmission to meet payment-industry requirements and reduce fraud.",
      },
      {
        title: "ISO 27001 & audit readiness",
        description:
          "Implement a certified information security management system and stay continuously prepared for internal and external audits.",
      },
      {
        title: "Continuous monitoring for high-value targets",
        description:
          "Detect and contain threats around the clock with SOC and SIEM-driven monitoring tuned to the risks these sectors face.",
      },
    ],
    relatedLinks: [
      { label: "What is HIPAA?", href: "/glossary/hipaa" },
      { label: "What is PCI DSS?", href: "/glossary/pci-dss" },
      { label: "What is ISO 27001?", href: "/glossary/iso-27001" },
      { label: "Compliance & Audits", href: "/compliance" },
      { label: "Cybersecurity Services", href: "/cybersecurity" },
    ],
  },
  {
    slug: "ecommerce-fintech",
    title: "E-commerce & Fintech",
    metaDescription:
      "Security and compliance for e-commerce and fintech — PCI DSS, GDPR, fraud prevention, application security testing, and resilient cloud infrastructure.",
    tagline: "Secure every transaction, at any scale.",
    intro: [
      "E-commerce and fintech platforms process payments and personal data at high volume, often across web and mobile apps and third-party APIs. That combination makes them attractive targets for fraud and attack, while regulators and payment networks demand strict data protection.",
      "We help these businesses secure the full customer journey — from checkout to back-end infrastructure — with payment-grade compliance, proactive application testing, and monitoring that scales with traffic spikes and rapid growth.",
    ],
    concerns: [
      {
        title: "Securing online payments (PCI DSS)",
        description:
          "Meet Payment Card Industry requirements across your checkout, storage, and processing to protect cardholder data.",
      },
      {
        title: "Protecting customer data & privacy",
        description:
          "Handle personal data lawfully under GDPR and India's DPDP Act, with the right consent, protection, and breach-response controls.",
      },
      {
        title: "Preventing fraud & account takeover",
        description:
          "Detect anomalous activity and respond quickly with SOC and SIEM-driven monitoring built for high-transaction environments.",
      },
      {
        title: "Application & API security testing",
        description:
          "Find and fix vulnerabilities in web, mobile, and API surfaces through regular vulnerability assessment and penetration testing.",
      },
      {
        title: "Resilient, scalable cloud infrastructure",
        description:
          "Keep high-traffic platforms secure and available with managed cloud operations, backup, and disaster recovery.",
      },
    ],
    relatedLinks: [
      { label: "What is PCI DSS?", href: "/glossary/pci-dss" },
      { label: "What is GDPR?", href: "/glossary/gdpr" },
      { label: "What is VAPT?", href: "/glossary/vapt" },
      { label: "Cybersecurity Services", href: "/cybersecurity" },
      { label: "IT Managed Services", href: "/it-managed-services" },
    ],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((industry) => industry.slug === slug)
}
