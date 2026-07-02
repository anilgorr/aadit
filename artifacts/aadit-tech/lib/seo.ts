import type { Metadata } from "next"
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  LEGAL_NAME,
  SITE_LOCALITY,
  SITE_REGION,
  SITE_COUNTRY,
  ORG_LOGO_PATH,
  SOCIAL_PROFILES,
  absoluteUrl,
} from "./site"

export const ORGANIZATION_ID = absoluteUrl("/#organization")
export const WEBSITE_ID = absoluteUrl("/#website")

interface OgImageInput {
  url: string
  width?: number
  height?: number
  alt?: string
}

interface PageMetaInput {
  /**
   * Page title WITHOUT the brand suffix — the layout template appends it.
   * Optional when `absoluteTitle` is supplied.
   */
  title?: string
  description: string
  /** Canonical path, e.g. "/blog" or "/cybersecurity/vapt". */
  path: string
  /**
   * Full title that bypasses the brand-suffix template. Use for pages that need
   * a custom trailing label (e.g. glossary "… | Aadit Technologies Glossary").
   */
  absoluteTitle?: string
  type?: "website" | "article"
  images?: OgImageInput[]
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noindex?: boolean
}

/**
 * Build a complete Metadata object with a self-referencing canonical, Open
 * Graph, and Twitter card. Titles are page-specific; the brand suffix is applied
 * by the root layout's title template (or via `absoluteTitle`).
 */
export function buildMetadata(input: PageMetaInput): Metadata {
  const url = absoluteUrl(input.path)
  const ogTitle =
    input.absoluteTitle ?? (input.title ? `${input.title} | ${SITE_NAME}` : SITE_NAME)
  const meta: Metadata = {
    title: input.absoluteTitle ? { absolute: input.absoluteTitle } : input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: input.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: input.type ?? "website",
      ...(input.images ? { images: input.images } : {}),
      ...(input.type === "article" && input.publishedTime
        ? { publishedTime: input.publishedTime }
        : {}),
      ...(input.type === "article" && input.modifiedTime
        ? { modifiedTime: input.modifiedTime }
        : {}),
      ...(input.type === "article" && input.authors ? { authors: input.authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: input.description,
      ...(input.images ? { images: input.images.map((i) => i.url) } : {}),
    },
  }
  if (input.noindex) {
    meta.robots = { index: false, follow: true }
  }
  return meta
}

/* ------------------------------------------------------------------ */
/* JSON-LD schema builders                                            */
/* ------------------------------------------------------------------ */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl(ORG_LOGO_PATH),
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCALITY,
      addressRegion: SITE_REGION,
      addressCountry: SITE_COUNTRY,
    },
    // Only emitted when real profile URLs are configured (never invented).
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  }
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

interface ArticleSchemaInput {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  authorName: string
  image?: string
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: input.authorName },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.path) },
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
  }
}

interface DefinedTermInput {
  term: string
  fullForm?: string
  definition: string
}

export function definedTermSchema(input: DefinedTermInput) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: input.term,
    ...(input.fullForm ? { alternateName: input.fullForm } : {}),
    description: input.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${SITE_NAME} Security & Compliance Glossary`,
      url: absoluteUrl("/glossary"),
    },
  }
}
