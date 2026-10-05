import type { EditorialSection } from "@/components/editorial-sections"

interface GlossaryGuide {
  sections: EditorialSection[]
  misconceptions: string[]
}

export const GLOSSARY_GUIDES: Record<string, GlossaryGuide> = {
  vapt: {
    sections: [
      { heading: "How VAPT works in practice", paragraphs: [
        "A useful engagement starts with written authorisation and a precise inventory. Specify application URLs, API endpoints, network ranges, cloud accounts and test environments. Agree the test window, permitted techniques, exclusions and emergency contacts. If third-party infrastructure is involved, establish who can authorise testing. The scope is a boundary for the work, not a promise that every part of the organisation will be assessed.",
        "Testers gather information, identify potential weaknesses and validate selected findings within those boundaries. Automated scanning can cover known patterns quickly, while manual work explores context, business logic and combinations of weaknesses. An authenticated assessment can reveal issues that an unauthenticated scan misses. Production testing also needs safeguards: destructive activity, large traffic volumes and actions affecting customer data must not be assumed to be permitted.",
      ] },
      { heading: "Who needs testing and what to request", paragraphs: [
        "Product teams may need testing before a release; infrastructure teams may need it after an important architecture change. Customer contracts or a particular compliance framework may also specify testing requirements. Establish the actual obligation and system boundary before buying an engagement. A recurring scan can be useful for vulnerability management, but a contractual penetration-test requirement may call for a different method and evidence.",
        "Ask for a report that identifies the affected asset, explains the finding, describes the evidence and recommends a practical remediation. Findings should be prioritised using severity and the business context rather than simply presented as a scanner export. The report should describe limitations and exclusions. Arrange a secure delivery channel, define who may access the report and agree how long testing evidence will be retained.",
      ] },
      { heading: "Using results to improve security", paragraphs: [
        "Give each confirmed finding an owner and a target date. Where a fix requires development, track it alongside release work and test that the change actually closes the weakness. Some issues need a configuration change, access restriction or architectural decision rather than a software patch. If remediation cannot happen immediately, record the reason, compensating controls and the date for reviewing the accepted risk.",
        "Retesting helps distinguish a closed ticket from a validated fix. Agree whether it is included, what findings it covers and how new issues discovered during retesting will be handled. Compare successive assessments carefully because scopes and methods can differ. A lower finding count does not automatically mean the organisation is safer. Pair testing with monitoring and incident readiness so that identifying weaknesses and responding to actual activity remain separate, accountable processes.",
      ] },
    ],
    misconceptions: [
      "A clean scan is not proof that a system has no vulnerabilities. Coverage, authentication, timing and manual validation all influence what the assessment can find.",
      "VAPT is not a universal certification. A testing report can support an audit or customer review without granting certification or guaranteeing compliance.",
      "Permission to test one application is not permission to attack every connected system. Rules of engagement and third-party authorisation still apply.",
    ],
  },
  soc: {
    sections: [
      { heading: "How a SOC works in practice", paragraphs: [
        "A SOC combines people, processes and technology to investigate security activity. It receives signals from systems such as endpoints, identity services, firewalls and cloud platforms. Analysts triage alerts, examine relevant evidence and escalate findings according to an agreed process. The process should distinguish a tool-generated event from an investigated incident and make clear when the organisation must approve an action.",
        "An operating model defines coverage hours, supported assets, access permissions and response responsibilities. An internal team, external provider or hybrid arrangement can perform those functions. The best fit depends on the organisation's staffing and risk, not simply the number of screens in a monitoring room. Security monitoring cannot cover a system that supplies no usable logs, so onboarding and log-source health checks are important.",
      ] },
      { heading: "Who needs a SOC and how to define the scope", paragraphs: [
        "Organisations with critical services, valuable data or demanding customer obligations may need continuous investigation capability. A smaller company can still need a clearly defined monitoring and escalation process, even if a dedicated internal SOC is impractical. Decide which threats and business processes need coverage, what existing staff can handle and which decisions must remain with internal owners. Buying tools alone does not answer those questions.",
        "List the systems to monitor and check that the selected arrangement can support them. Agree retention, data locations, access approvals and the handling of sensitive information. An incident runbook should say who receives an urgent escalation, who authorises containment and what happens when the primary contact cannot be reached. Rehearse the path with a realistic scenario instead of assuming a contact list will work during an emergency.",
      ] },
      { heading: "What useful SOC evidence looks like", paragraphs: [
        "Reporting should show investigated activity, significant findings, recommendations and gaps in coverage. Alert counts need context: a larger count may reflect noisy rules, wider coverage or genuine changes in threat activity. Ask how triage and escalation times are measured and which events are excluded. A service-level metric should have a defined start and end, a stated coverage window and an accountable owner.",
        "Review detections when applications, user permissions or infrastructure change. A new cloud service or privileged account may introduce exposure that the original monitoring scope did not cover. Record unresolved investigations and track follow-up work. A SOC can supply evidence relevant to compliance, but legal advice, certification audits and independent SOC 2 examinations remain separate activities. Operational security and assurance reporting should support each other without being presented as the same service.",
      ] },
    ],
    misconceptions: [
      "SOC and SOC 2 are different terms. A Security Operations Centre is an operational capability; SOC 2 is an independent controls attestation report.",
      "Around-the-clock monitoring does not necessarily include hands-on incident containment. Verify the agreed response actions, permissions and approval requirements.",
      "Outsourcing the SOC does not outsource every business risk decision. Internal owners still need to approve actions and implement remediation.",
    ],
  },
  siem: {
    sections: [
      { heading: "How SIEM works in practice", paragraphs: [
        "A SIEM collects and processes security-relevant events so that analysts can investigate activity across systems. Connectors receive logs, parsers interpret fields and detection rules look for patterns that warrant review. Correlation can link events from different sources, such as an unusual identity login followed by a privileged action. The usefulness of that result depends on the quality and completeness of the input data.",
        "Plan collection before enabling every available source. Identify critical systems, required fields, timestamp handling and acceptable retention. A log source that silently stops sending events can create a monitoring gap even when the dashboard appears healthy. Establish checks for collection failures, parsing errors and delayed events. Restrict access to logs because they can include personal data, administrative activity and information about sensitive systems.",
      ] },
      { heading: "Who uses SIEM and what to evaluate", paragraphs: [
        "Security analysts use a SIEM to investigate signals, while administrators help maintain integrations and access. Compliance and audit teams may also need appropriately scoped records. Organisations with multiple applications, identity platforms and cloud services can benefit from a shared event view, but first define the investigation or evidence requirement. A central store without ownership, rules or review capacity may collect data without improving response.",
        "Evaluate support for the systems you actually run, not just the number of advertised connectors. Check whether a connector captures the required events and whether you can maintain it after upgrades. Ask about licensing, ingestion charges, storage, retention and search performance in your expected workload. Define who writes detections, reviews alerts, maintains rules and handles incidents so that the technology is part of an operating process.",
      ] },
      { heading: "From events to accountable response", paragraphs: [
        "A detection should explain what it is looking for, which sources it needs and why the activity matters. Test it with authorised scenarios and review false positives without simply disabling inconvenient alerts. Maintain a record of rule changes and their rationale. New applications and changed permissions can affect existing detections, so tuning is an ongoing responsibility rather than an installation task completed once.",
        "Analysts need context such as asset ownership, account purpose and recent approved changes. An investigation should record evidence, decisions and any escalation. Where automation is used, distinguish an alert notification from a disruptive action such as blocking a user. Agree permissions, review requirements and ways to reverse an incorrect action. SIEM supports a SOC, but it cannot replace people making informed decisions or administrators implementing the resulting improvements.",
      ] },
    ],
    misconceptions: [
      "More logs do not automatically mean better security. Select useful sources and maintain their quality, coverage and retention rather than collecting indiscriminately.",
      "A SIEM alert is not proof that an incident has occurred. Investigation is needed to understand context and decide whether escalation is warranted.",
      "Buying a SIEM does not create a fully staffed SOC. Detection maintenance, analysis, incident ownership and response permissions still need explicit arrangements.",
    ],
  },
  "iso-27001": {
    sections: [
      { heading: "How ISO 27001 works in practice", paragraphs: [
        "ISO/IEC 27001 sets requirements for an information security management system, or ISMS. The organisation defines a scope, understands its context, assesses risk and selects treatment measures. Management needs to assign responsibilities and provide oversight. The system combines policies with operating processes and evidence: an approved access policy, for example, should be supported by records showing how access is granted, reviewed and removed.",
        "Controls are selected in response to risk and applicable obligations. The Statement of Applicability records the necessary controls and explains inclusion or exclusion decisions. It should describe the organisation's actual choices, not merely reproduce a generic template. Internal audit and management review help evaluate the ISMS and identify improvements. Corrective actions address weaknesses discovered through reviews, incidents and other feedback.",
      ] },
      { heading: "Who needs it and what certification covers", paragraphs: [
        "Organisations may pursue certification because customers request it, procurement requires it or management wants a structured security programme. The standard can apply to different sizes and sectors. Certification concerns the defined ISMS scope, which may cover a particular service, entity or group of locations. Customers should read that scope rather than assume a certificate covers every activity performed under a company's name.",
        "An independent certification body audits the ISMS. A readiness consultant can help assess gaps, implement processes and organise evidence, but does not issue the organisation's accredited certificate. Confirm the certification body's accreditation and scope before engagement. Also distinguish certification from an individual's training credential. Neither should be used as a substitute for reading the relevant service boundary, evidence and customer commitments.",
      ] },
      { heading: "Planning a sustainable programme", paragraphs: [
        "Begin by deciding which services, people, systems and third parties are in scope. Identify legal, contractual and business requirements with appropriate specialists. Allocate control ownership and plan remediation in a realistic sequence. Some improvements are technical; others involve human resources, supplier management or organisational approvals. A team cannot demonstrate that a process has operated if it has only just created the document describing it.",
        "Preparation time and cost depend on scope, maturity, staffing and the independent audit. Avoid promising a fixed outcome before those are assessed. After certification, keep risk assessments, access reviews, internal audits and management reviews current. Changes to products, infrastructure or suppliers can affect the ISMS. Coordinate evidence with SOC 2 where useful, but recognise that SOC 2 is a separate CPA attestation with different reporting requirements.",
      ] },
    ],
    misconceptions: [
      "Certification is not a guarantee that no breach will occur. The ISMS manages risk and improvement rather than eliminating every possible threat.",
      "An ISO 27001 consultant and an independent certification body perform different roles. Readiness assistance alone cannot grant accredited organisational certification.",
      "A policy library is not an operating ISMS. Owners, implementation, reviews and records of actual activity are needed alongside written policies.",
    ],
  },
  gdpr: {
    sections: [
      { heading: "How GDPR works in practice", paragraphs: [
        "The GDPR governs processing of personal data within its applicable scope. An organisation should first understand what personal data it processes, why it processes it and the role it plays. A controller determines purposes and means; a processor processes data on a controller's behalf. Those roles can differ across activities. Map actual data flows and contracts rather than applying one role label to every business relationship.",
        "Each processing purpose needs an appropriate lawful basis and transparent information for the people concerned. Consent is one possible basis, not a universal solution for all processing. Design processes for relevant rights requests, retention decisions and incident handling. Where a processing activity is likely to result in high risk, assess whether a data protection impact assessment is required. Legal interpretation should come from appropriately qualified advice.",
      ] },
      { heading: "Who needs to assess GDPR applicability", paragraphs: [
        "An organisation outside the EU can still fall within GDPR's territorial scope in particular circumstances, such as relevant offering of goods or services to people in the Union or monitoring their behaviour there. Simply using a European cloud region does not settle the issue. Equally, being based in India does not rule applicability out. Assess the business activity, people involved and legal role before choosing a compliance programme.",
        "Customer contracts may impose data-protection responsibilities even where an organisation's own analysis differs from a customer's obligations. Review processing terms, subprocessors, security measures, deletion arrangements and cross-border transfers. Keep commercial requirements separate from claims about legal applicability. A readiness provider can help organise information and controls, but no generic certificate or website badge proves that all processing activities comply with GDPR.",
      ] },
      { heading: "Making privacy controls operational", paragraphs: [
        "Assign owners for processing records, requests, supplier reviews and incident decisions. Check that teams can locate relevant data across production systems, backups and third parties. Retention should reflect the purpose and applicable obligations rather than an indefinite default. Security measures need to consider the risk to people and the processing context. Access controls, encryption and logging can help, but privacy work also involves transparency and accountable decisions.",
        "Test how a request or incident moves through the organisation. Record identity checks, responsible teams and escalation paths without collecting unnecessary additional data. A breach assessment may need legal and technical input, including consideration of any required notifications. Review the programme as products and suppliers change. For Indian operations, assess DPDP obligations separately; GDPR work does not automatically discharge duties under another jurisdiction's law.",
      ] },
    ],
    misconceptions: [
      "GDPR does not always require consent for every use of personal data. The lawful basis must be appropriate to the specific processing purpose.",
      "An Indian office does not automatically exempt a business from GDPR. Territorial scope depends on the relevant establishment and processing activities.",
      "GDPR compliance is not achieved by a cookie banner alone. Rights, transparency, security, retention and accountable processing decisions also matter.",
    ],
  },
  "pci-dss": {
    sections: [
      { heading: "How PCI DSS works in practice", paragraphs: [
        "PCI DSS sets security requirements for environments relevant to payment card account data. Scoping starts with the payment journey: how card data is captured, transmitted, processed or stored, and which systems can affect the security of that environment. Record the connections, service providers and administrative access paths. A system can be relevant to scope even when it does not itself store full card numbers.",
        "The standard addresses security controls and operating processes, including access, configuration, monitoring and testing. Implementation needs to reflect the payment architecture and applicable requirements. Keep evidence of actual control activity and document responsibilities shared with third parties. Outsourcing a payment component can reduce some work, but the merchant or service provider still needs to understand and manage its own responsibilities.",
      ] },
      { heading: "Who needs it and how validation is determined", paragraphs: [
        "Merchants and service providers involved in card payments should establish their applicable requirements with their acquirer, payment brands or appropriate specialists. The validation method can depend on the organisation's role and circumstances. Do not assume that a self-assessment questionnaire used by another business applies to yours. Different payment arrangements and eligibility conditions can lead to different evidence and assessment requirements.",
        "Where specialist assessment is required, confirm the role and qualifications of the assessor. A readiness consultant may help map scope, assess gaps and support remediation, but cannot substitute an informal letter for the required validation. Ask how applications, infrastructure, third parties and any segmentation are being considered. A compliant payment provider's documentation is useful evidence, but it is not automatically evidence that your entire environment is compliant.",
      ] },
      { heading: "Keeping scope and evidence current", paragraphs: [
        "Work with engineering and payment owners when integrating a new checkout flow, mobile application or API. Check whether sensitive data appears in logs, analytics, support tickets or test systems. Data discovery and clear retention decisions can prevent unexpected expansion of scope. Restrict access based on job responsibilities and verify that required reviews and monitoring continue after the initial project.",
        "Testing and change management should cover the actual payment environment and relevant security dependencies. Document exceptions and remediation with responsible owners rather than relying on a one-off checklist. Review the boundary after architecture or supplier changes. PCI DSS addresses payment-card security; it does not replace broader privacy obligations, fraud management or business continuity. Coordinate these programmes while keeping each requirement and evidence set distinct.",
      ] },
    ],
    misconceptions: [
      "Using an external payment gateway does not automatically eliminate every PCI DSS responsibility. The integration and the systems affecting it still need review.",
      "A scan report alone is not a complete PCI DSS validation. Applicable controls and the required validation method depend on role and scope.",
      "PCI DSS and GDPR address different obligations. Payment security work does not automatically satisfy privacy law, and privacy policies do not secure a payment environment.",
    ],
  },
  hipaa: {
    sections: [
      { heading: "How HIPAA works in practice", paragraphs: [
        "HIPAA obligations depend on the organisation's role and the relevant US healthcare information. Covered entities and business associates have different responsibilities, and not every company handling any health-related data falls within those categories. Identify the service, information flows and contractual relationships first. Determine whether the information is protected health information and whether the organisation acts as a business associate for a covered entity.",
        "For electronic protected health information, the Security Rule addresses administrative, physical and technical safeguards. A risk analysis helps identify relevant threats and vulnerabilities, while risk management addresses the findings. Policies need operational support: workforce access, device handling, incident response and supplier relationships should be reviewed in the actual environment. A generic policy pack cannot establish that these safeguards are working.",
      ] },
      { heading: "Who needs to examine HIPAA responsibilities", paragraphs: [
        "An Indian technology provider supporting a US covered entity may need to assess business-associate obligations. The assessment depends on the service and access to protected information, not simply the provider's location or an industry label. Review business associate agreements, subcontractors and the responsibilities assigned in contracts. Seek appropriate legal advice where applicability or notification duties are uncertain.",
        "HIPAA should not be described as an official organisational certification issued by the US Department of Health and Human Services. HHS does not require a private Security Rule certification as a substitute for compliance. A readiness review can identify gaps and improve safeguards, but its deliverables should be described accurately. Customers should request relevant evidence and contractual commitments rather than relying on a claimed badge.",
      ] },
      { heading: "Putting safeguards into daily operations", paragraphs: [
        "Map where electronic protected health information is received, stored, used and transmitted. Review access for employees, administrators and suppliers, including the process for removing permissions when duties change. Decide how devices and backups are protected and how records are retained or destroyed. Operational resilience matters because unavailability can affect care or the customer's service; recovery arrangements should be appropriate to the business context.",
        "Maintain an incident process with defined technical, privacy and legal decision-makers. Test how the organisation would assess an event, preserve evidence and notify relevant parties where required. Review safeguards when systems, customer contracts or subcontractors change. Security monitoring and access controls can support the programme, but they do not replace risk analysis, workforce procedures or accurate legal interpretation of applicable duties.",
      ] },
    ],
    misconceptions: [
      "HIPAA does not automatically apply to every health-related business worldwide. Covered-entity and business-associate roles and relevant information must be assessed.",
      "A private HIPAA certificate is not official HHS approval and does not prove continuing compliance. Review scope, operating safeguards and evidence.",
      "A business associate agreement is important but not sufficient alone. Relevant safeguards, supplier oversight and incident procedures must operate in practice.",
    ],
  },
  "soc-2": {
    sections: [
      { heading: "How a SOC 2 examination works", paragraphs: [
        "SOC 2 is an independent CPA attestation using the AICPA Trust Services Criteria. The organisation describes the system being examined, identifies relevant commitments and implements controls supporting the applicable criteria. Security is central; additional criteria depend on the service and intended scope. The independent CPA firm evaluates the specified subject matter and issues a report. A readiness consultant or software platform does not issue the independent opinion.",
        "A Type I report addresses control design at a point in time. A Type II report also addresses operating effectiveness over a stated period. Those are different examination objectives, not successive grades of a certification. Read the report's scope, period, opinion and any exceptions carefully. A customer should also understand the controls it is expected to operate and any relevant treatment of third-party service organisations.",
      ] },
      { heading: "Who requests a report and how to prepare", paragraphs: [
        "Customers may ask SaaS, cloud and other service providers for a SOC 2 report during due diligence. The request should be translated into a clear service boundary and examination type. An Indian organisation can pursue a report where its customers require it; there is no assumption that every organisation must do so. Ask what assurance the customer needs rather than buying a report solely because another company has one.",
        "Preparation includes a gap assessment, remediation and an evidence plan. Assign owners for controls such as access reviews, approved changes, incident handling and supplier assessment, according to scope. Keep records of actual activity and review whether the description matches the live environment. If a control is only newly introduced, discuss its evidence and observation requirements with the auditor rather than reconstructing records for past activity.",
      ] },
      { heading: "Using SOC 2 alongside other assurance", paragraphs: [
        "SOC 2 and ISO 27001 can share operational work, but their outcomes are different. ISO 27001 certification concerns a defined information security management system; SOC 2 is a controls attestation report. Evidence may be reused where relevant, while scope, criteria and audit decisions remain separate. A SOC 2 report also differs from SOC 1, which addresses controls relevant to user entities' internal control over financial reporting.",
        "Budget for readiness, remediation, the independent examination and ongoing operation rather than only the report fee. Time and cost depend on scope, maturity and the chosen examination. A report is historical evidence for its stated boundary and period, not a promise that incidents cannot occur. Keep controls operating after issuance, plan subsequent examinations when needed and share reports according to their intended use and distribution restrictions.",
      ] },
    ],
    misconceptions: [
      "SOC 2 is an attestation report, not a certification. Calling readiness assistance a guaranteed certificate misrepresents both the work and the independent auditor's role.",
      "A SOC 2 report does not certify an organisation's Security Operations Centre. The shared acronym refers to different concepts in these contexts.",
      "Automation cannot guarantee a clean audit opinion. Controls must operate, evidence must be valid and the CPA firm makes independent examination decisions.",
    ],
  },
}
