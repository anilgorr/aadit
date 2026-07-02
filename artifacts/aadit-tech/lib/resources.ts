export type ResourceType = "whitepaper" | "ebook"

export interface Resource {
  slug: string
  type: ResourceType
  title: string
  description: string
  /** Gated resources require the visitor to submit details before downloading. */
  gated: boolean
  /** Direct download URL for ungated resources, or the delivered file for gated ones. */
  fileUrl?: string
  publishedAt?: string
}

/**
 * Real whitepaper / ebook assets are supplied by the client. Add entries here
 * (title, description, gated flag, fileUrl) and the listing pages render them
 * automatically. Until then the listing pages show a designed empty state.
 *
 * NOTE: The two entries below were migrated from the legacy site. Their real
 * PDF assets were NOT available during migration (the ebook's download link
 * was empty/broken on the live site), so they are marked `gated: true` — the
 * card shows a "Request Access" button (→ /contact) instead of a broken
 * download link. Once the client supplies the PDFs, either upload them and set
 * `gated: false` + `fileUrl`, or keep them gated and deliver the file after the
 * lead form.
 */
export const RESOURCES: Resource[] = [
  {
    slug: "navigating-cyber-threats-in-2025-insights-from-market-soc-vapt-and-cyber-audits",
    type: "whitepaper",
    title:
      "Navigating Cyber Threats in 2025: Insights from Market SOC, VAPT, and Cyber Audits",
    description:
      "How a layered defence strategy combining SOC operations, Vulnerability Assessment & Penetration Testing (VAPT), and cyber audits helps organisations stay resilient against AI-powered threats, ransomware, and supply-chain attacks in 2025.",
    gated: true,
    publishedAt: "2025-10-12",
  },
  {
    slug: "sebis-cscrf-2-0-and-its-impact-on-cyber-audits",
    type: "ebook",
    title: "SEBI's CSCRF 2.0 and Its Impact on Cyber Audits",
    description:
      "A practical guide to SEBI's Cyber Security & Cyber Resilience Framework (CSCRF) 2.0 and what it means for cyber audits at regulated entities.",
    gated: true,
    publishedAt: "2025-10-12",
  },
]

export function getResources(type: ResourceType): Resource[] {
  return RESOURCES.filter((resource) => resource.type === type)
}
