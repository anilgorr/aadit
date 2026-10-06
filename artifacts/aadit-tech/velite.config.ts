import { defineConfig, s } from 'velite'
import rehypeSlug from 'rehype-slug'
import approvedBlogFaqs from './content/approved-blog-faqs.json'
import { remarkApprovedFaqs } from './lib/remark-approved-faqs'

const serviceSchema = {
  title: s.string().min(1),
  heading: s.string().min(1).optional(),
  metaDescription: s.string().min(1).max(200),
  slug: s.slug('service'),
  hub: s.enum(['cybersecurity', 'compliance', 'it-managed-services']),
  publishedAt: s.isodate(),
  updatedAt: s.isodate().optional(),
  order: s.number().optional().default(0),
  features: s
    .array(
      s.object({
        title: s.string(),
        description: s.string(),
        icon: s.string().optional(),
      })
    )
    .optional()
    .default([]),
  benefits: s
    .array(
      s.object({
        title: s.string(),
        description: s.string(),
      })
    )
    .optional()
    .default([]),
  faqs: s
    .array(
      s.object({
        question: s.string(),
        answer: s.string(),
      })
    )
    .optional()
    .default([]),
  related: s.array(s.string()).optional().default([]),
  answerFirst: s.string().optional(),
  keyFacts: s
    .array(
      s.object({
        label: s.string(),
        value: s.string(),
      })
    )
    .optional()
    .default([]),
  content: s.mdx(),
}

const postSchema = {
  title: s.string().min(1),
  seoTitle: s.string().min(1).optional(),
  description: s.string().min(1),
  slug: s.slug('post'),
  publishedAt: s.isodate(),
  updatedAt: s.isodate().optional(),
  author: s.object({
    name: s.string(),
    role: s.string().optional(),
  }),
  tags: s.array(s.string()).optional().default([]),
  cover: s.image().optional(),
  metadata: s.metadata(),
  toc: s.toc(),
  content: s.mdx(),
}

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  mdx: {
    remarkPlugins: [remarkApprovedFaqs],
    rehypePlugins: [rehypeSlug],
  },
  collections: {
    resourcePages: {
      name: 'ResourcePage',
      pattern: 'resources/**/*.mdx',
      schema: s.object({
        title: s.string().min(1),
        seoTitle: s.string().min(1),
        metaDescription: s.string().min(1).max(200),
        slug: s.slug('resource-page'),
        permalink: s.string().regex(/^\/(?:glossary|resources)\/[a-z0-9-]+$/),
        schemaType: s.enum(['DefinedTerm', 'Article']),
        definition: s.string().optional(),
        publishedAt: s.isodate(),
        updatedAt: s.isodate().optional(),
        faqs: s.array(s.object({ question: s.string(), answer: s.string() })),
        content: s.mdx(),
      }),
    },
    services: {
      name: 'Service',
      pattern: 'services/**/*.mdx',
      schema: s
        .object(serviceSchema)
        .transform((data) => ({
          ...data,
          permalink: `/${data.hub}/${data.slug}`,
        })),
    },
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s
        .object(postSchema)
        .transform((data) => ({
          ...data,
          // The bulk migration date was never an editorial revision. Do not
          // present it to users or crawlers as a meaningful modification date.
          updatedAt: Object.prototype.hasOwnProperty.call(approvedBlogFaqs, data.slug)
            ? "2026-10-06T00:00:00.000Z"
            : data.updatedAt === "2026-07-02T00:00:00.000Z"
              ? data.publishedAt
              : (data.updatedAt ?? data.publishedAt),
          permalink: `/blog/${data.slug}`,
        })),
    },
  },
})
