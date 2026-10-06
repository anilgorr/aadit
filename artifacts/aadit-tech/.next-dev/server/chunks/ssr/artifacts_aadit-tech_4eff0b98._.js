module.exports = [
"[project]/artifacts/aadit-tech/lib/glossary.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GLOSSARY",
    ()=>GLOSSARY,
    "getRelatedTerms",
    ()=>getRelatedTerms,
    "getTerm",
    ()=>getTerm
]);
const GLOSSARY = [
    {
        slug: "managed-it-services",
        term: "Managed IT services",
        category: "Managed IT",
        updatedAt: "2026-10-06",
        definition: "Managed IT services means outsourcing the day-to-day running of an organisation’s IT — monitoring, user support, patching, account and device management, backup and infrastructure operations — to a provider under an ongoing agreement with defined service levels, rather than paying for help each time something breaks.",
        detail: [],
        relatedService: {
            label: "Explore managed IT services",
            href: "/it-managed-services/managed-it-services"
        },
        relatedTerms: [
            "soc"
        ],
        comparison: {
            heading: "Managed IT services vs. break-fix support",
            rows: []
        },
        faqs: [],
        sources: []
    },
    {
        slug: "vapt",
        term: "VAPT",
        fullForm: "Vulnerability Assessment and Penetration Testing",
        category: "Cybersecurity",
        definition: "VAPT (Vulnerability Assessment and Penetration Testing) combines techniques for identifying potential security weaknesses with authorised testing of whether they can be exploited. Assessments can scan or review systems, networks and applications; penetration tests try attack paths within agreed boundaries. Together, their findings help teams prioritise remediation, but neither guarantees that all weaknesses will be found.",
        metaDescription: "VAPT combines vulnerability assessment to identify weaknesses with authorised penetration testing to test exploitability within agreed boundaries.",
        detail: [
            "The two halves answer different questions. A vulnerability assessment identifies potential weaknesses in a defined environment through scanning and review. A penetration test attempts, within an agreed scope, to validate whether weaknesses or combinations of weaknesses could let an attacker bypass security controls.",
            "Testing may be scheduled before a launch, after a significant change, or as part of a security or contractual assessment. The scope can cover networks, applications, APIs or cloud environments. Confirm the applicable standard's specific testing requirements rather than assuming a VAPT engagement alone establishes compliance."
        ],
        relatedService: {
            label: "Explore VAPT services",
            href: "/cybersecurity/vapt"
        },
        relatedTerms: [
            "soc",
            "siem",
            "iso-27001"
        ],
        comparison: {
            heading: "Vulnerability assessment vs. penetration testing",
            rows: [
                {
                    aspect: "Purpose",
                    first: "Identify and prioritise potential weaknesses across a defined scope.",
                    second: "Test whether weaknesses can be exploited under agreed rules of engagement."
                },
                {
                    aspect: "Output",
                    first: "Inventory of findings to validate and remediate.",
                    second: "Evidence of tested attack paths and their impact, with remediation advice."
                }
            ]
        },
        faqs: [
            {
                question: "Does a vulnerability scan replace a penetration test?",
                answer: "No. Scanning identifies possible weaknesses; a penetration test attempts to validate exploitability within an agreed scope. Both require review of findings and remediation."
            },
            {
                question: "What should be agreed before VAPT begins?",
                answer: "Agree the assets, test boundaries, permissions, timing, reporting recipients and retest expectations before any active testing."
            }
        ],
        sources: [
            {
                label: "NIST SP 800-115: Technical Guide to Information Security Testing and Assessment",
                href: "https://csrc.nist.gov/pubs/sp/800/115/final"
            }
        ]
    },
    {
        slug: "soc",
        term: "SOC",
        fullForm: "Security Operations Center",
        category: "Cybersecurity",
        definition: "A Security Operations Center (SOC) is an organisational function that monitors, investigates, and coordinates responses to cybersecurity events. It combines analysts, defined processes, and tools such as SIEM to identify and assess suspicious activity. Coverage hours and response responsibilities depend on the operating model; a SOC is not the same thing as a SOC 2 audit report.",
        detail: [
            "A SOC's functions may include monitoring, alert triage, investigation and coordination of incident response. Playbooks and escalation agreements clarify what happens when a signal is confirmed. Staffing, hours and authority vary by organisation; the term itself does not promise around-the-clock service.",
            "A SOC can be operated internally or supported by an external provider. Before choosing a model, define telemetry sources, coverage hours, escalation contacts, investigation responsibilities and who has authority to contain an incident. SOC 2 reporting is a different topic: it evaluates controls at a service organisation."
        ],
        relatedService: {
            label: "Explore managed SOC services",
            href: "/cybersecurity/managed-soc"
        },
        relatedTerms: [
            "siem",
            "vapt",
            "soc-2"
        ],
        comparison: {
            heading: "Security operations center vs. SOC 2 report",
            rows: [
                {
                    aspect: "Meaning",
                    first: "A security operations function that monitors and responds to threats.",
                    second: "An independent assurance report about a service organisation's controls."
                },
                {
                    aspect: "Use",
                    first: "Day-to-day detection, investigation and response.",
                    second: "Evidence for customers evaluating relevant service-provider controls."
                }
            ]
        },
        faqs: [
            {
                question: "Is a security operations center the same as SOC 2?",
                answer: "No. A security operations center is an operational team and process. SOC 2 refers to a separate assurance reporting framework for service organisations."
            },
            {
                question: "Is a SIEM the same as a SOC?",
                answer: "No. A SIEM is a tool for collecting and analysing security events; a SOC is the people and processes that investigate alerts and coordinate response."
            }
        ],
        sources: [
            {
                label: "NIST glossary: Security Operations Center",
                href: "https://csrc.nist.gov/glossary/term/security_operations_center"
            },
            {
                label: "AICPA: System and Organization Controls suite",
                href: "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services"
            }
        ]
    },
    {
        slug: "siem",
        term: "SIEM",
        fullForm: "Security Information and Event Management",
        category: "Cybersecurity",
        definition: "SIEM (Security Information and Event Management) is software that centralises security logs and events from multiple systems. It can help analysts correlate activity, investigate alerts and produce monitoring evidence when configured for relevant sources. A SIEM provides visibility, not an incident response team, and installing one alone does not establish compliance.",
        detail: [
            "A SIEM can ingest logs from firewalls, servers, endpoints, applications and cloud services. Analysts configure data sources, retention and alert rules to fit the environment. Alerts require investigation; collecting events alone does not prove a threat has been identified or contained.",
            "Security operations teams may use a SIEM to examine activity across systems. Retention and reporting may also help demonstrate certain control activities, but evidence requirements depend on the relevant standard, contract and assessment scope."
        ],
        relatedService: {
            label: "Explore our Cybersecurity services",
            href: "/cybersecurity"
        },
        relatedTerms: [
            "soc",
            "vapt"
        ],
        comparison: {
            heading: "SIEM vs. security operations center",
            rows: [
                {
                    aspect: "Role",
                    first: "Software that centralises security events for analysis.",
                    second: "People and processes that monitor, investigate and respond."
                },
                {
                    aspect: "Limit",
                    first: "An alert alone does not contain an incident.",
                    second: "An operations team still needs relevant telemetry and defined response authority."
                }
            ]
        },
        faqs: [
            {
                question: "Does installing a SIEM create a SOC?",
                answer: "No. A SIEM provides event visibility, but investigation, escalation and response still need assigned people and processes."
            },
            {
                question: "What data can a SIEM use?",
                answer: "Depending on its configuration, a SIEM can bring together security events from systems such as servers, applications, network devices and endpoints."
            }
        ],
        sources: [
            {
                label: "NIST glossary: Security Information and Event Management",
                href: "https://csrc.nist.gov/glossary/term/security_information_and_event_management"
            }
        ]
    },
    {
        slug: "iso-27001",
        term: "ISO 27001",
        fullForm: "ISO/IEC 27001 Information Security Management",
        category: "Compliance",
        definition: "ISO/IEC 27001 is the leading international standard for information security management systems (ISMS). It provides a risk-based framework of policies, procedures, and controls that organisations use to protect the confidentiality, integrity, and availability of information. Certification, issued after an independent audit, shows customers and regulators that security is managed systematically.",
        metaDescription: "ISO/IEC 27001 is an international standard for information security management systems. It gives organisations a risk-based framework to protect information.",
        detail: [
            "At its heart, ISO 27001 requires organisations to identify information risks and treat them using a set of controls, many of which are drawn from the standard's Annex A. Rather than prescribing specific technologies, it focuses on a repeatable management system — plan, implement, monitor, and improve.",
            "Certification is achieved through a two-stage external audit and maintained with periodic surveillance audits and a full recertification every three years. It is widely requested in enterprise procurement and is often the foundation on which other compliance efforts, such as SOC 2, are built."
        ],
        relatedService: {
            label: "Explore ISO 27001 readiness",
            href: "/compliance/iso-27001"
        },
        relatedTerms: [
            "soc-2",
            "gdpr",
            "pci-dss"
        ],
        comparison: {
            heading: "ISO 27001 vs. SOC 2",
            rows: [
                {
                    aspect: "Focus",
                    first: "Requirements for an information security management system.",
                    second: "Independent assurance reporting on service-organisation controls."
                },
                {
                    aspect: "Result",
                    first: "An organisation may seek certification from an independent certification body.",
                    second: "A licensed CPA firm issues a SOC 2 report, not an ISO certificate."
                }
            ]
        },
        faqs: [
            {
                question: "Is ISO 27001 a technology checklist?",
                answer: "No. It sets requirements for establishing, maintaining and improving a risk-based information security management system; technology is only part of that work."
            },
            {
                question: "Does ISO 27001 certification replace a SOC 2 report?",
                answer: "No. They address different assurance requests. Confirm which evidence a customer or contract actually requires before starting either engagement."
            }
        ],
        sources: [
            {
                label: "ISO: ISO/IEC 27001:2022 overview",
                href: "https://www.iso.org/standard/27001"
            },
            {
                label: "AICPA: System and Organization Controls suite",
                href: "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services"
            }
        ]
    },
    {
        slug: "gdpr",
        term: "GDPR",
        fullForm: "General Data Protection Regulation",
        category: "Compliance",
        definition: "The General Data Protection Regulation (GDPR) is an EU regulation governing the processing of personal data within its territorial scope. It gives people rights over their data and requires controllers and processors to meet applicable duties, including lawful processing and appropriate safeguards. Organisations outside the EU may also fall within its scope in defined circumstances.",
        detail: [
            "GDPR is built on principles such as lawfulness, data minimisation, purpose limitation, and accountability. It gives individuals rights including access, correction, erasure, and portability of their personal data, and it requires organisations to be able to demonstrate how they comply.",
            "Crucially, GDPR applies to any organisation worldwide that offers goods or services to, or monitors, people in the EU — not just EU-based companies. Penalties for serious breaches can reach €20 million or 4% of global annual turnover, whichever is higher."
        ],
        relatedService: {
            label: "Explore GDPR readiness",
            href: "/compliance/gdpr"
        },
        relatedTerms: [
            "hipaa",
            "iso-27001",
            "pci-dss"
        ],
        comparison: {
            heading: "GDPR vs. ISO 27001",
            rows: [
                {
                    aspect: "Type",
                    first: "EU regulation governing personal-data processing.",
                    second: "International standard for managing information-security risk."
                },
                {
                    aspect: "Scope decision",
                    first: "Assess people, processing activities and applicable legal obligations.",
                    second: "Define the ISMS boundary, assets and information-security risks."
                }
            ]
        },
        faqs: [
            {
                question: "Does ISO 27001 certification mean we comply with GDPR?",
                answer: "No. Security management can support protection of personal data, but GDPR also sets legal duties for processing and individual rights that require separate assessment."
            },
            {
                question: "Can GDPR apply outside the EU?",
                answer: "Yes. The rules can apply to an organisation outside the EU when it offers goods or services to people in the EU or monitors their behaviour there."
            }
        ],
        sources: [
            {
                label: "European Commission: Who does EU data protection law apply to?",
                href: "https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/application-regulation/who-does-data-protection-law-apply_en"
            }
        ]
    },
    {
        slug: "hipaa",
        term: "HIPAA",
        fullForm: "Health Insurance Portability and Accountability Act",
        category: "Compliance",
        definition: "HIPAA (the Health Insurance Portability and Accountability Act) is a US law whose privacy, security, and breach-notification rules protect health information held by covered entities and their business associates. The rules address permitted uses of protected health information, safeguards for electronic health information, and notification duties for breaches of unsecured protected health information.",
        metaDescription: "HIPAA is a US law setting privacy, security and breach-notification rules for protected health information handled by covered entities and business associates.",
        detail: [
            "HIPAA is enforced through several rules. The Privacy Rule governs how PHI may be used and disclosed; the Security Rule sets safeguards for electronic PHI; and the Breach Notification Rule dictates how and when breaches must be reported to individuals and regulators.",
            "Compliance applies not only to covered entities such as hospitals and insurers, but also to business associates — vendors and service providers that handle PHI on their behalf. Violations can carry substantial civil and, in some cases, criminal penalties."
        ],
        relatedService: {
            label: "Explore HIPAA readiness",
            href: "/compliance/hipaa"
        },
        relatedTerms: [
            "gdpr",
            "pci-dss",
            "iso-27001"
        ],
        comparison: {
            heading: "HIPAA vs. GDPR",
            rows: [
                {
                    aspect: "Who it concerns",
                    first: "US covered entities and their business associates handling protected health information.",
                    second: "Controllers and processors handling personal data within the GDPR's territorial scope."
                },
                {
                    aspect: "First scoping question",
                    first: "Are you a covered entity or business associate under the HIPAA rules?",
                    second: "Do your processing activities fall within GDPR's scope?"
                }
            ]
        },
        faqs: [
            {
                question: "Does HIPAA apply to every company that handles health data?",
                answer: "Not automatically. HIPAA duties depend on whether the organisation is a covered entity or business associate and on the activity involved."
            },
            {
                question: "Does a HIPAA certificate establish compliance?",
                answer: "HHS does not recognise private certifications as a substitute for compliance with the HIPAA rules. Evaluate actual safeguards and obligations instead."
            }
        ],
        sources: [
            {
                label: "US HHS: Covered Entities and Business Associates",
                href: "https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html"
            },
            {
                label: "US HHS: Are HIPAA Security Rule certifications required?",
                href: "https://www.hhs.gov/hipaa/for-professionals/faq/2003/are-we-required-to-certify-our-organizations-compliance-with-the-standards/index.html"
            }
        ]
    },
    {
        slug: "pci-dss",
        term: "PCI DSS",
        fullForm: "Payment Card Industry Data Security Standard",
        category: "Compliance",
        definition: "PCI DSS (Payment Card Industry Data Security Standard) is an industry security standard for organisations that store, process, or transmit cardholder data, and for systems that can affect its security. Maintained by the PCI Security Standards Council, it sets technical and operational requirements for protecting payment account data. Validation obligations depend on the applicable payment-brand and acquirer rules.",
        metaDescription: "PCI DSS is an industry security standard for organisations that store, process or transmit cardholder data, with requirements to protect payment account data.",
        detail: [
            "The standard is organised around a set of core requirements covering areas like building secure networks, protecting stored cardholder data, managing vulnerabilities, restricting access, and regularly monitoring and testing systems.",
            "The required validation method depends on payment-brand and acquirer rules as well as the merchant or service-provider situation; it may involve a Self-Assessment Questionnaire or a formal assessment. Reducing direct handling of card data can reduce scope, but outsourcing does not automatically eliminate responsibilities."
        ],
        relatedService: {
            label: "Explore PCI DSS readiness",
            href: "/compliance/pci-dss"
        },
        relatedTerms: [
            "gdpr",
            "iso-27001",
            "hipaa"
        ],
        comparison: {
            heading: "PCI DSS vs. GDPR",
            rows: [
                {
                    aspect: "Primary concern",
                    first: "Protecting account data in payment-card environments.",
                    second: "Lawful handling of personal data within the GDPR's scope."
                },
                {
                    aspect: "Assessment",
                    first: "Validation method depends on payment-brand/acquirer requirements and merchant or service-provider scope.",
                    second: "Data-protection obligations depend on processing, roles and territorial reach."
                }
            ]
        },
        faqs: [
            {
                question: "Does outsourcing payments eliminate PCI DSS responsibilities?",
                answer: "Not necessarily. Outsourcing may reduce the systems in scope, but organisations should confirm their own validation obligations with their acquirer or payment brand."
            },
            {
                question: "Is PCI DSS a law?",
                answer: "PCI DSS is an industry security standard, not a statute. Payment brands and acquirers set compliance and validation expectations for participants."
            }
        ],
        sources: [
            {
                label: "PCI Security Standards Council: PCI DSS document library",
                href: "https://www.pcisecuritystandards.org/document_library/"
            }
        ]
    },
    {
        slug: "soc-2",
        term: "SOC 2",
        fullForm: "System and Organization Controls 2",
        category: "Compliance",
        definition: "SOC 2 (System and Organization Controls 2) is an independent attestation report on controls at a service organisation relevant to selected Trust Services Criteria. The criteria cover security, availability, processing integrity, confidentiality, and privacy. A licensed CPA firm issues the report for its intended users; it is not a certification or a security operations center.",
        metaDescription: "SOC 2 is an independent attestation report on service-organisation controls relevant to selected Trust Services Criteria; a licensed CPA firm issues the report.",
        detail: [
            "A Type I report addresses control design at a specified date; a Type II report additionally addresses operating effectiveness over a stated period. The report identifies the system, criteria and period examined. Ask which type and scope a customer requires instead of assuming that any SOC 2 report answers every question.",
            "SOC 2 is relevant to service organisations whose customers need assurance about outsourced services. It differs from ISO 27001 certification, which evaluates an information-security management system. Controls and evidence may overlap, but the two forms of assurance are not interchangeable."
        ],
        relatedService: {
            label: "Explore SOC 2 readiness",
            href: "/compliance/soc2"
        },
        relatedTerms: [
            "iso-27001",
            "gdpr",
            "hipaa"
        ],
        comparison: {
            heading: "SOC 2 vs. security operations center",
            rows: [
                {
                    aspect: "Meaning",
                    first: "A CPA assurance report on a service organisation's controls.",
                    second: "An operational capability for monitoring and responding to security events."
                },
                {
                    aspect: "Deliverable",
                    first: "An independent report for its intended users.",
                    second: "Ongoing monitoring, investigation and incident handling."
                }
            ]
        },
        faqs: [
            {
                question: "Is SOC 2 a certification?",
                answer: "No. SOC 2 is an attestation report issued by an independent CPA firm, not a certification awarded by a certifying body."
            },
            {
                question: "Does a SOC 2 report prove a company has a security operations center?",
                answer: "No. SOC 2 evaluates controls within the report's stated scope; it does not require a particular operating model such as an in-house SOC."
            }
        ],
        sources: [
            {
                label: "AICPA: System and Organization Controls suite",
                href: "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services"
            }
        ]
    }
];
function getTerm(slug) {
    return GLOSSARY.find((term)=>term.slug === slug);
}
function getRelatedTerms(slugs) {
    return slugs.map((slug)=>GLOSSARY.find((term)=>term.slug === slug)).filter((term)=>Boolean(term));
}
}),
"[project]/artifacts/aadit-tech/app/glossary/[slug]/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentType",
    ()=>contentType,
    "default",
    ()=>GlossaryOpengraphImage,
    "generateStaticParams",
    ()=>generateStaticParams,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/lib/og.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/lib/glossary.ts [app-rsc] (ecmascript)");
;
;
const size = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OG_SIZE"];
const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OG_CONTENT_TYPE"];
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GLOSSARY"].map((term)=>({
            slug: term.slug
        }));
}
async function GlossaryOpengraphImage({ params }) {
    const { slug } = await params;
    const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTerm"])(slug);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderOgImage"])({
        eyebrow: "Security & Compliance Glossary",
        title: term ? `${term.term}: ${term.fullForm ?? "Definition"}` : "Security & Compliance Glossary"
    });
}
}),
"[project]/artifacts/aadit-tech/app/glossary/[slug]/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$glossary$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/app/glossary/[slug]/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$glossary$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    generateStaticParams: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$glossary$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStaticParams"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$glossary$2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/glossary/[slug]", params, "opengraph-image");
    const { generateImageMetadata } = imageModule;
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?84abf8933ecb7a36"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    if (generateImageMetadata) {
        const imageMetadataArray = await generateImageMetadata({
            params
        });
        return imageMetadataArray.map((imageMetadata, index)=>{
            const idParam = (imageMetadata.id || index) + '';
            return getImageMetadata(imageMetadata, idParam);
        });
    } else {
        return [
            getImageMetadata(imageModule, '')
        ];
    }
}
}),
];

//# sourceMappingURL=artifacts_aadit-tech_4eff0b98._.js.map