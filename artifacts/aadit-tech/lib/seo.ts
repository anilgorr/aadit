import type { Metadata } from 'next'
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
} from './site'

export const ORGANIZATION_ID = absoluteUrl('/#organization')
export const WEBSITE_ID = absoluteUrl('/#website')
export const OFFER_CATALOG_ID = absoluteUrl('/#service-catalog')

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
  type?: 'website' | 'article'
  images?: OgImageInput[]
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noindex?: boolean
}

const BRAND_SUFFIX = ` | ${SITE_NAME}`
const MAX_TITLE_LENGTH = 65
const MIN_DESCRIPTION_LENGTH = 120
// Leave a little room for HTML entities in rendered source (for example, "&" is
// encoded as "&amp;") while keeping the human-visible description concise.
const MAX_DESCRIPTION_LENGTH = 150

function trimAtWord(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxLength) return normalized

  const shortened = normalized.slice(0, maxLength - 1)
  const lastSpace = shortened.lastIndexOf(' ')
  return `${shortened.slice(0, lastSpace > maxLength * 0.55 ? lastSpace : maxLength - 1)}…`
}

function fitPageTitle(title: string) {
  return trimAtWord(title, MAX_TITLE_LENGTH - BRAND_SUFFIX.length)
}

function fitAbsoluteTitle(title: string) {
  return trimAtWord(title, MAX_TITLE_LENGTH)
}

function fitDescription(description: string) {
  const normalized = description.replace(/\s+/g, ' ').trim()
  const expanded =
    normalized.length < MIN_DESCRIPTION_LENGTH
      ? `${normalized} Explore practical guidance from Aadit Technologies.`
      : normalized

  return trimAtWord(expanded, MAX_DESCRIPTION_LENGTH)
}

/**
 * Build a complete Metadata object with a self-referencing canonical, Open
 * Graph, and Twitter card. Titles are page-specific; the brand suffix is applied
 * by the root layout's title template (or via `absoluteTitle`).
 */
export function buildMetadata(input: PageMetaInput): Metadata {
  const url = absoluteUrl(input.path)
  const absoluteTitle = input.absoluteTitle ? fitAbsoluteTitle(input.absoluteTitle) : undefined
  const title = absoluteTitle ? absoluteTitle : input.title ? fitPageTitle(input.title) : undefined
  const ogTitle = absoluteTitle
    ? (title ?? SITE_NAME)
    : title
      ? `${title}${BRAND_SUFFIX}`
      : SITE_NAME
  const description = fitDescription(input.description)
  const images = input.images?.length
    ? input.images
    : [
        {
          url: absoluteUrl('/opengraph-image'),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Cybersecurity, Compliance & IT Managed Services`,
        },
      ]

  const meta: Metadata = {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: input.type ?? 'website',
      images,
      ...(input.type === 'article' && input.publishedTime
        ? { publishedTime: input.publishedTime }
        : {}),
      ...(input.type === 'article' && input.modifiedTime
        ? { modifiedTime: input.modifiedTime }
        : {}),
      ...(input.type === 'article' && input.authors ? { authors: input.authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: images.map((image) => image.url),
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
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl(ORG_LOGO_PATH),
    description: SITE_DESCRIPTION,
    foundingDate: '2017-01-12',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'CIN',
      value: 'U72900KA2017PTC099151',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        '#21 & 22, AnandAM, 4th Main Road, 3rd Block, Opposite Axis Bank, New BEL Road',
      addressLocality: SITE_LOCALITY,
      addressRegion: SITE_REGION,
      postalCode: '560094',
      addressCountry: SITE_COUNTRY,
    },
    telephone: '+91 9663445445',
    email: 'info@aadit.net',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@aadit.net',
        availableLanguage: ['en'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'security',
        email: 'security@aadit.net',
        availableLanguage: ['en'],
      },
    ],
    hasOfferCatalog: { '@id': OFFER_CATALOG_ID },
    // Only emitted when real profile URLs are configured (never invented).
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
  }
}

export function officeSchemas() {
  const offices = [
    {
      name: 'Aadit Technologies — Bengaluru',
      address: {
        streetAddress:
          '#21 & 22, AnandAM, 4th Main Road, 3rd Block, Opposite Axis Bank, New BEL Road',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560094',
        addressCountry: 'IN',
      },
      telephone: '+91 9663445445',
    },
    {
      name: 'Aadit Technologies — Bellevue',
      address: {
        streetAddress: '4139 164th Ave SE',
        addressLocality: 'Bellevue',
        addressRegion: 'WA',
        postalCode: '98006-8906',
        addressCountry: 'US',
      },
    },
    {
      name: 'Aadit Technologies FZCO — Dubai',
      address: {
        streetAddress: 'Building A1, Dubai Digital Park, Silicon Oasis',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      telephone: '+971 52 184 7477',
    },
  ]

  return offices.map((office) => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#${office.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: office.name,
    parentOrganization: { '@id': ORGANIZATION_ID },
    address: { '@type': 'PostalAddress', ...office.address },
    ...(office.telephone ? { telephone: office.telephone } : {}),
  }))
}

export function offerCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': OFFER_CATALOG_ID,
    name: 'Aadit Technologies Service Catalog',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Managed Security Operations' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vulnerability Assessment and Penetration Testing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Cybersecurity Risk Assessment' },
      },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Consulting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed IT Services' } },
    ],
  }
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

interface WebPageSchemaInput {
  path: string
  name: string
  description: string
  type?: 'WebPage' | 'ProfilePage' | 'AboutPage' | 'CollectionPage'
}

export function webPageSchema(input: WebPageSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': input.type ?? 'WebPage',
    '@id': absoluteUrl(`${input.path}#webpage`),
    url: absoluteUrl(input.path),
    name: input.name,
    description: input.description,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
  }
}

interface ServiceSchemaInput {
  path: string
  name: string
  description: string
  serviceType: string
  audience?: string
  related?: string[]
}

export function serviceSchema(input: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${input.path}#service`),
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: absoluteUrl(input.path),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    ...(input.audience ? { audience: { '@type': 'Audience', audienceType: input.audience } } : {}),
    ...(input.related?.length
      ? { isRelatedTo: input.related.map((path) => ({ '@id': absoluteUrl(`${path}#service`) })) }
      : {}),
  }
}

interface ArticleSchemaInput {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  author: { name: string; url: string }
  reviewedBy?: { name: string; url: string }
  image: string
  wordCount: number
  articleSection?: string
  keywords?: string[]
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': absoluteUrl(`${input.path}#article`),
    url: absoluteUrl(input.path),
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Person',
      '@id': `${absoluteUrl(input.author.url)}#person`,
      name: input.author.name,
      url: absoluteUrl(input.author.url),
    },
    ...(input.reviewedBy
      ? {
          reviewedBy: {
            '@type': 'Person',
            '@id': `${absoluteUrl(input.reviewedBy.url)}#person`,
            name: input.reviewedBy.name,
            url: absoluteUrl(input.reviewedBy.url),
          },
        }
      : {}),
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en',
    isAccessibleForFree: true,
    wordCount: input.wordCount,
    mainEntityOfPage: { '@id': absoluteUrl(`${input.path}#webpage`) },
    image: absoluteUrl(input.image),
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords } : {}),
  }
}

interface DefinedTermInput {
  term: string
  fullForm?: string
  definition: string
  path?: string
  subjectOf?: string
}

export function definedTermSchema(input: DefinedTermInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: input.term,
    ...(input.fullForm ? { alternateName: input.fullForm } : {}),
    description: input.definition,
    ...(input.path
      ? { url: absoluteUrl(input.path), '@id': absoluteUrl(`${input.path}#term`) }
      : {}),
    ...(input.subjectOf ? { subjectOf: input.subjectOf } : {}),
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: `${SITE_NAME} Security & Compliance Glossary`,
      url: absoluteUrl('/glossary'),
    },
  }
}
