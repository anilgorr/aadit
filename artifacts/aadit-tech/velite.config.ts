import { defineConfig, s } from 'velite'
import rehypeSlug from 'rehype-slug'

const serviceSchema = {
  title: s.string().min(1),
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
  content: s.mdx(),
}

const postSchema = {
  title: s.string().min(1),
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
    rehypePlugins: [rehypeSlug],
  },
  collections: {
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
          permalink: `/blog/${data.slug}`,
        })),
    },
  },
})
