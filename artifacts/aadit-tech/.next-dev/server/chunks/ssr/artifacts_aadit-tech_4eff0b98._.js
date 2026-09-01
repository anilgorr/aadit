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
        slug: "vapt",
        term: "VAPT",
        fullForm: "Vulnerability Assessment and Penetration Testing",
        category: "Cybersecurity",
        definition: "VAPT (Vulnerability Assessment and Penetration Testing) is a combined security testing approach that first scans systems, networks, and applications to identify known vulnerabilities, then simulates real-world attacks to exploit them. The assessment finds security gaps while the penetration test proves their real business impact, helping organisations prioritise and fix critical risks.",
        detail: [
            "The two halves of VAPT answer different questions. A vulnerability assessment is broad and largely automated: it inventories weaknesses across an environment and rates their severity. A penetration test is narrow and manual: skilled testers attempt to chain those weaknesses together the way a real attacker would, to show what an intruder could actually achieve.",
            "Organisations commonly run VAPT for compliance (ISO 27001, PCI DSS, SOC 2), before major product launches, and during investor or acquisition due diligence. Engagements can target networks, web and mobile applications, APIs, and cloud infrastructure, and are typically repeated on a regular schedule as systems change."
        ],
        relatedService: {
            label: "Explore our Cybersecurity services",
            href: "/cybersecurity"
        },
        relatedTerms: [
            "soc",
            "siem",
            "iso-27001"
        ]
    },
    {
        slug: "soc",
        term: "SOC",
        fullForm: "Security Operations Center",
        category: "Cybersecurity",
        definition: "A Security Operations Center (SOC) is a centralised team and facility that continuously monitors, detects, analyses, and responds to cybersecurity threats across an organisation's IT environment. Operating around the clock, a SOC combines skilled analysts, defined processes, and technologies such as SIEM to reduce the time it takes to identify and contain security incidents.",
        detail: [
            "A SOC's core functions include real-time monitoring, threat detection and triage, incident response, and continuous improvement of defences. Analysts typically work in tiers — from initial alert triage to deep investigation and threat hunting — supported by playbooks that standardise how incidents are handled.",
            "Building an in-house SOC requires significant investment in people, tooling, and 24/7 staffing. Many organisations instead use a managed SOC (SOC-as-a-service), gaining round-the-clock coverage and specialist expertise without the cost and complexity of running one themselves."
        ],
        relatedService: {
            label: "Explore our Cybersecurity services",
            href: "/cybersecurity"
        },
        relatedTerms: [
            "siem",
            "vapt",
            "soc-2"
        ]
    },
    {
        slug: "siem",
        term: "SIEM",
        fullForm: "Security Information and Event Management",
        category: "Cybersecurity",
        definition: "SIEM (Security Information and Event Management) is a technology that collects, aggregates, and correlates log and event data from across an organisation's systems in real time. By analysing this data against known threat patterns, SIEM helps security teams detect suspicious activity, investigate incidents, and meet compliance requirements through centralised monitoring and reporting.",
        detail: [
            "A SIEM ingests logs from sources such as firewalls, servers, endpoints, applications, and cloud services. It normalises that data, applies correlation rules and increasingly machine learning, and raises alerts when patterns match known attack behaviour — turning millions of raw events into a manageable stream of actionable signals.",
            "SIEM is the analytical backbone of most Security Operations Centers. Beyond detection, it provides the centralised log retention, dashboards, and reporting that auditors expect for frameworks like ISO 27001, PCI DSS, and SOC 2."
        ],
        relatedService: {
            label: "Explore our Cybersecurity services",
            href: "/cybersecurity"
        },
        relatedTerms: [
            "soc",
            "vapt"
        ]
    },
    {
        slug: "iso-27001",
        term: "ISO 27001",
        fullForm: "ISO/IEC 27001 Information Security Management",
        category: "Compliance",
        definition: "ISO/IEC 27001 is the leading international standard for information security management systems (ISMS). It provides a risk-based framework of policies, procedures, and controls that organisations use to protect the confidentiality, integrity, and availability of information. Certification, issued after an independent audit, shows customers and regulators that security is managed systematically.",
        detail: [
            "At its heart, ISO 27001 requires organisations to identify information risks and treat them using a set of controls, many of which are drawn from the standard's Annex A. Rather than prescribing specific technologies, it focuses on a repeatable management system — plan, implement, monitor, and improve.",
            "Certification is achieved through a two-stage external audit and maintained with periodic surveillance audits and a full recertification every three years. It is widely requested in enterprise procurement and is often the foundation on which other compliance efforts, such as SOC 2, are built."
        ],
        relatedService: {
            label: "Explore our Compliance services",
            href: "/compliance"
        },
        relatedTerms: [
            "soc-2",
            "gdpr",
            "pci-dss"
        ]
    },
    {
        slug: "gdpr",
        term: "GDPR",
        fullForm: "General Data Protection Regulation",
        category: "Compliance",
        definition: "The General Data Protection Regulation (GDPR) is a European Union law governing how organisations collect, process, and store the personal data of individuals in the EU and EEA. It grants people rights over their data and requires businesses to obtain a lawful basis, protect data, and report breaches — with heavy penalties for non-compliance.",
        detail: [
            "GDPR is built on principles such as lawfulness, data minimisation, purpose limitation, and accountability. It gives individuals rights including access, correction, erasure, and portability of their personal data, and it requires organisations to be able to demonstrate how they comply.",
            "Crucially, GDPR applies to any organisation worldwide that offers goods or services to, or monitors, people in the EU — not just EU-based companies. Penalties for serious breaches can reach €20 million or 4% of global annual turnover, whichever is higher."
        ],
        relatedService: {
            label: "Explore our Compliance services",
            href: "/compliance"
        },
        relatedTerms: [
            "hipaa",
            "iso-27001",
            "pci-dss"
        ]
    },
    {
        slug: "hipaa",
        term: "HIPAA",
        fullForm: "Health Insurance Portability and Accountability Act",
        category: "Compliance",
        definition: "HIPAA (the Health Insurance Portability and Accountability Act) is a United States law that sets national standards for protecting sensitive patient health information. It requires healthcare providers, insurers, and their business associates to safeguard protected health information (PHI) through administrative, physical, and technical controls, and to notify affected individuals when a data breach occurs.",
        detail: [
            "HIPAA is enforced through several rules. The Privacy Rule governs how PHI may be used and disclosed; the Security Rule sets safeguards for electronic PHI; and the Breach Notification Rule dictates how and when breaches must be reported to individuals and regulators.",
            "Compliance applies not only to covered entities such as hospitals and insurers, but also to business associates — vendors and service providers that handle PHI on their behalf. Violations can carry substantial civil and, in some cases, criminal penalties."
        ],
        relatedService: {
            label: "Explore our Compliance services",
            href: "/compliance"
        },
        relatedTerms: [
            "gdpr",
            "pci-dss",
            "iso-27001"
        ]
    },
    {
        slug: "pci-dss",
        term: "PCI DSS",
        fullForm: "Payment Card Industry Data Security Standard",
        category: "Compliance",
        definition: "PCI DSS (Payment Card Industry Data Security Standard) is a global security standard that any organisation storing, processing, or transmitting payment card data must follow. Created by the major card brands, it defines technical and operational requirements — such as encryption, access control, and monitoring — to protect cardholder data and reduce payment fraud.",
        detail: [
            "The standard is organised around a set of core requirements covering areas like building secure networks, protecting stored cardholder data, managing vulnerabilities, restricting access, and regularly monitoring and testing systems.",
            "How an organisation validates compliance depends on its transaction volume, ranging from an annual Self-Assessment Questionnaire (SAQ) for smaller merchants to a formal on-site audit by a Qualified Security Assessor (QSA) for the largest. Reducing how much card data you handle directly is one of the most effective ways to lower PCI DSS scope."
        ],
        relatedService: {
            label: "Explore our Compliance services",
            href: "/compliance"
        },
        relatedTerms: [
            "gdpr",
            "iso-27001",
            "hipaa"
        ]
    },
    {
        slug: "soc-2",
        term: "SOC 2",
        fullForm: "System and Organization Controls 2",
        category: "Compliance",
        definition: "SOC 2 (System and Organization Controls 2) is a compliance framework and audit report developed by the AICPA that evaluates how well a service organisation protects customer data. Assessments are based on five Trust Services Criteria — security, availability, processing integrity, confidentiality, and privacy — and are especially important for SaaS and cloud providers.",
        detail: [
            "A SOC 2 report comes in two forms. A Type I report assesses whether controls are suitably designed at a single point in time, while a Type II report tests whether those controls operated effectively over a period — typically three to twelve months. Type II carries the most weight with enterprise buyers.",
            "Because SOC 2 is tailored to service organisations that store customer data in the cloud, it has become a near-standard requirement in SaaS procurement. Many companies pursue it alongside ISO 27001, reusing much of the same underlying control set."
        ],
        relatedService: {
            label: "Explore our Compliance services",
            href: "/compliance"
        },
        relatedTerms: [
            "iso-27001",
            "gdpr",
            "hipaa"
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