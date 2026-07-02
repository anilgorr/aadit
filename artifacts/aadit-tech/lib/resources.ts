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
 */
export const RESOURCES: Resource[] = []

export function getResources(type: ResourceType): Resource[] {
  return RESOURCES.filter((resource) => resource.type === type)
}
