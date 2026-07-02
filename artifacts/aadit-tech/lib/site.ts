/**
 * Central site configuration. Single source of truth for the canonical domain,
 * organization identity, and social profiles used across metadata and JSON-LD.
 *
 * The canonical production domain is the apex `aadit.net` (per the SEO/redirect
 * plan). Override in any environment with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aadit.net").replace(
  /\/+$/,
  "",
)

export const SITE_NAME = "Aadit Technologies"

export const SITE_DESCRIPTION =
  "Cybersecurity, compliance, and IT managed services for startups through enterprise clients across healthcare, BFSI, fintech, and SaaS."

/** Legal entity name used in copyright / structured data. */
export const LEGAL_NAME = "Aadit Technologies Pvt. Ltd."

/** Publicly stated location (shown in the site footer). */
export const SITE_LOCALITY = "Bengaluru"
export const SITE_REGION = "Karnataka"
export const SITE_COUNTRY = "IN"

/** Logo used for Organization schema (true ratio 2.25:1). */
export const ORG_LOGO_PATH = "/logo.png"

/**
 * Social profile URLs for Organization `sameAs`. The LinkedIn URL is confirmed.
 * Additional profiles can be appended via NEXT_PUBLIC_SOCIAL_PROFILES
 * (comma-separated) without a code change.
 */
const EXTRA_PROFILES = (process.env.NEXT_PUBLIC_SOCIAL_PROFILES ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)

export const SOCIAL_PROFILES: string[] = [
  "https://www.linkedin.com/company/aadit-technologies/",
  ...EXTRA_PROFILES,
]

/** Build an absolute URL from a path. Passes through already-absolute URLs. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
