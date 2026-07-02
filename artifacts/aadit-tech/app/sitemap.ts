import type { MetadataRoute } from "next"
import { services, posts } from "@/.velite"
import { absoluteUrl } from "@/lib/site"
import { HUB_ORDER } from "@/lib/services"
import { INDUSTRIES } from "@/lib/industries"
import { GLOSSARY } from "@/lib/glossary"
import { getTotalPages } from "@/lib/blog"

/**
 * Single canonical sitemap covering every real, indexable page. There are no
 * legacy WordPress attachment/utility URLs to exclude — this is a clean rebuild.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/industries"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/glossary"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/whitepapers"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/ebook"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ]

  const hubEntries: MetadataRoute.Sitemap = HUB_ORDER.map((hub) => ({
    url: absoluteUrl(`/${hub}`),
    lastModified: now,
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
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const glossaryEntries: MetadataRoute.Sitemap = GLOSSARY.map((term) => ({
    url: absoluteUrl(`/glossary/${term.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(post.permalink),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const totalBlogPages = getTotalPages()
  const paginationEntries: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, totalBlogPages - 1) },
    (_, i) => ({
      url: absoluteUrl(`/blog/page/${i + 2}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    }),
  )

  return [
    ...staticEntries,
    ...hubEntries,
    ...serviceEntries,
    ...industryEntries,
    ...glossaryEntries,
    ...postEntries,
    ...paginationEntries,
  ]
}
