export interface GlossaryTerm {
  slug: string
  term: string
  fullForm?: string
  category: "Cybersecurity" | "Compliance"
  /** A single clear 40-60 word definition, optimised for featured snippets. */
  definition: string
  detail: string[]
  relatedService: { label: string; href: string }
  relatedTerms: string[]
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "vapt",
    term: "VAPT",
    fullForm: "Vulnerability Assessment and Penetration Testing",
    category: "Cybersecurity",
    definition:
      "VAPT (Vulnerability Assessment and Penetration Testing) is a combined security testing approach that first scans systems, networks, and applications to identify known vulnerabilities, then simulates real-world attacks to exploit them. The assessment finds security gaps while the penetration test proves their real business impact, helping organisations prioritise and fix critical risks.",
    detail: [
      "The two halves of VAPT answer different questions. A vulnerability assessment is broad and largely automated: it inventories weaknesses across an environment and rates their severity. A penetration test is narrow and manual: skilled testers attempt to chain those weaknesses together the way a real attacker would, to show what an intruder could actually achieve.",
      "Organisations commonly run VAPT for compliance (ISO 27001, PCI DSS, SOC 2), before major product launches, and during investor or acquisition due diligence. Engagements can target networks, web and mobile applications, APIs, and cloud infrastructure, and are typically repeated on a regular schedule as systems change.",
    ],
    relatedService: {
      label: "Explore our Cybersecurity services",
      href: "/cybersecurity",
    },
    relatedTerms: ["soc", "siem", "iso-27001"],
  },
  {
    slug: "soc",
    term: "SOC",
    fullForm: "Security Operations Center",
    category: "Cybersecurity",
    definition:
      "A Security Operations Center (SOC) is a centralised team and facility that continuously monitors, detects, analyses, and responds to cybersecurity threats across an organisation's IT environment. Operating around the clock, a SOC combines skilled analysts, defined processes, and technologies such as SIEM to reduce the time it takes to identify and contain security incidents.",
    detail: [
      "A SOC's core functions include real-time monitoring, threat detection and triage, incident response, and continuous improvement of defences. Analysts typically work in tiers — from initial alert triage to deep investigation and threat hunting — supported by playbooks that standardise how incidents are handled.",
      "Building an in-house SOC requires significant investment in people, tooling, and 24/7 staffing. Many organisations instead use a managed SOC (SOC-as-a-service), gaining round-the-clock coverage and specialist expertise without the cost and complexity of running one themselves.",
    ],
    relatedService: {
      label: "Explore our Cybersecurity services",
      href: "/cybersecurity",
    },
    relatedTerms: ["siem", "vapt", "soc-2"],
  },
  {
    slug: "siem",
    term: "SIEM",
    fullForm: "Security Information and Event Management",
    category: "Cybersecurity",
    definition:
      "SIEM (Security Information and Event Management) is a technology that collects, aggregates, and correlates log and event data from across an organisation's systems in real time. By analysing this data against known threat patterns, SIEM helps security teams detect suspicious activity, investigate incidents, and meet compliance requirements through centralised monitoring and reporting.",
    detail: [
      "A SIEM ingests logs from sources such as firewalls, servers, endpoints, applications, and cloud services. It normalises that data, applies correlation rules and increasingly machine learning, and raises alerts when patterns match known attack behaviour — turning millions of raw events into a manageable stream of actionable signals.",
      "SIEM is the analytical backbone of most Security Operations Centers. Beyond detection, it provides the centralised log retention, dashboards, and reporting that auditors expect for frameworks like ISO 27001, PCI DSS, and SOC 2.",
    ],
    relatedService: {
      label: "Explore our Cybersecurity services",
      href: "/cybersecurity",
    },
    relatedTerms: ["soc", "vapt"],
  },
  {
    slug: "iso-27001",
    term: "ISO 27001",
    fullForm: "ISO/IEC 27001 Information Security Management",
    category: "Compliance",
    definition:
      "ISO/IEC 27001 is the leading international standard for information security management systems (ISMS). It provides a risk-based framework of policies, procedures, and controls that organisations use to protect the confidentiality, integrity, and availability of information. Certification, issued after an independent audit, shows customers and regulators that security is managed systematically.",
    detail: [
      "At its heart, ISO 27001 requires organisations to identify information risks and treat them using a set of controls, many of which are drawn from the standard's Annex A. Rather than prescribing specific technologies, it focuses on a repeatable management system — plan, implement, monitor, and improve.",
      "Certification is achieved through a two-stage external audit and maintained with periodic surveillance audits and a full recertification every three years. It is widely requested in enterprise procurement and is often the foundation on which other compliance efforts, such as SOC 2, are built.",
    ],
    relatedService: {
      label: "Explore our Compliance services",
      href: "/compliance",
    },
    relatedTerms: ["soc-2", "gdpr", "pci-dss"],
  },
  {
    slug: "gdpr",
    term: "GDPR",
    fullForm: "General Data Protection Regulation",
    category: "Compliance",
    definition:
      "The General Data Protection Regulation (GDPR) is a European Union law governing how organisations collect, process, and store the personal data of individuals in the EU and EEA. It grants people rights over their data and requires businesses to obtain a lawful basis, protect data, and report breaches — with heavy penalties for non-compliance.",
    detail: [
      "GDPR is built on principles such as lawfulness, data minimisation, purpose limitation, and accountability. It gives individuals rights including access, correction, erasure, and portability of their personal data, and it requires organisations to be able to demonstrate how they comply.",
      "Crucially, GDPR applies to any organisation worldwide that offers goods or services to, or monitors, people in the EU — not just EU-based companies. Penalties for serious breaches can reach €20 million or 4% of global annual turnover, whichever is higher.",
    ],
    relatedService: {
      label: "Explore our Compliance services",
      href: "/compliance",
    },
    relatedTerms: ["hipaa", "iso-27001", "pci-dss"],
  },
  {
    slug: "hipaa",
    term: "HIPAA",
    fullForm: "Health Insurance Portability and Accountability Act",
    category: "Compliance",
    definition:
      "HIPAA (the Health Insurance Portability and Accountability Act) is a United States law that sets national standards for protecting sensitive patient health information. It requires healthcare providers, insurers, and their business associates to safeguard protected health information (PHI) through administrative, physical, and technical controls, and to notify affected individuals when a data breach occurs.",
    detail: [
      "HIPAA is enforced through several rules. The Privacy Rule governs how PHI may be used and disclosed; the Security Rule sets safeguards for electronic PHI; and the Breach Notification Rule dictates how and when breaches must be reported to individuals and regulators.",
      "Compliance applies not only to covered entities such as hospitals and insurers, but also to business associates — vendors and service providers that handle PHI on their behalf. Violations can carry substantial civil and, in some cases, criminal penalties.",
    ],
    relatedService: {
      label: "Explore our Compliance services",
      href: "/compliance",
    },
    relatedTerms: ["gdpr", "pci-dss", "iso-27001"],
  },
  {
    slug: "pci-dss",
    term: "PCI DSS",
    fullForm: "Payment Card Industry Data Security Standard",
    category: "Compliance",
    definition:
      "PCI DSS (Payment Card Industry Data Security Standard) is a global security standard that any organisation storing, processing, or transmitting payment card data must follow. Created by the major card brands, it defines technical and operational requirements — such as encryption, access control, and monitoring — to protect cardholder data and reduce payment fraud.",
    detail: [
      "The standard is organised around a set of core requirements covering areas like building secure networks, protecting stored cardholder data, managing vulnerabilities, restricting access, and regularly monitoring and testing systems.",
      "How an organisation validates compliance depends on its transaction volume, ranging from an annual Self-Assessment Questionnaire (SAQ) for smaller merchants to a formal on-site audit by a Qualified Security Assessor (QSA) for the largest. Reducing how much card data you handle directly is one of the most effective ways to lower PCI DSS scope.",
    ],
    relatedService: {
      label: "Explore our Compliance services",
      href: "/compliance",
    },
    relatedTerms: ["gdpr", "iso-27001", "hipaa"],
  },
  {
    slug: "soc-2",
    term: "SOC 2",
    fullForm: "System and Organization Controls 2",
    category: "Compliance",
    definition:
      "SOC 2 (System and Organization Controls 2) is a compliance framework and audit report developed by the AICPA that evaluates how well a service organisation protects customer data. Assessments are based on five Trust Services Criteria — security, availability, processing integrity, confidentiality, and privacy — and are especially important for SaaS and cloud providers.",
    detail: [
      "A SOC 2 report comes in two forms. A Type I report assesses whether controls are suitably designed at a single point in time, while a Type II report tests whether those controls operated effectively over a period — typically three to twelve months. Type II carries the most weight with enterprise buyers.",
      "Because SOC 2 is tailored to service organisations that store customer data in the cloud, it has become a near-standard requirement in SaaS procurement. Many companies pursue it alongside ISO 27001, reusing much of the same underlying control set.",
    ],
    relatedService: {
      label: "Explore our Compliance services",
      href: "/compliance",
    },
    relatedTerms: ["iso-27001", "gdpr", "hipaa"],
  },
]

export function getTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((term) => term.slug === slug)
}

export function getRelatedTerms(slugs: string[]): GlossaryTerm[] {
  return slugs
    .map((slug) => GLOSSARY.find((term) => term.slug === slug))
    .filter((term): term is GlossaryTerm => Boolean(term))
}
