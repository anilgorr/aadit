import type { MetadataRoute } from "next"
import { services, posts } from "@/.velite"
import { absoluteUrl } from "@/lib/site"
import { HUB_ORDER } from "@/lib/services"
import { INDUSTRIES } from "@/lib/industries"
import { GLOSSARY } from "@/lib/glossary"

/**
 * Single canonical sitemap covering every real, indexable page. There are no
 * legacy WordPress attachment/utility URLs to exclude — this is a clean rebuild.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: new Date("2026-08-24"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/careers"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly", priority: 0.4 },
    { url: absoluteUrl("/case-studies"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/compare/soc-2-vs-iso-27001"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/privacy-policy"), lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/team"), lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/authors/anil-gorraladaku"), lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/authors/srinivas-gadicherla"), lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/industries"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/glossary"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: new Date("2026-08-24"), changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/whitepapers"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly", priority: 0.5 },
  ]

  const hubEntries: MetadataRoute.Sitemap = HUB_ORDER.map((hub) => ({
    url: absoluteUrl(`/${hub}`),
    lastModified: new Date("2026-08-24"),
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(service.permalink),
    lastModified: new Date(service.updatedAt ?? service.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const industryEntries: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: absoluteUrl(`/industries/${industry.slug}`),
    lastModified: new Date("2026-08-24"),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const glossaryEntries: MetadataRoute.Sitemap = GLOSSARY.map((term) => ({
    url: absoluteUrl(`/glossary/${term.slug}`),
    lastModified: new Date("2026-08-24"),
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  const postEntries: MetadataRoute.Sitemap = posts
    .filter((post) => post.slug !== "services-vapt-network-vapt")
    .map((post) => ({
    url: absoluteUrl(post.permalink),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    ...staticEntries,
    ...hubEntries,
    ...serviceEntries,
    ...industryEntries,
    ...glossaryEntries,
    ...postEntries,
  ]
}
