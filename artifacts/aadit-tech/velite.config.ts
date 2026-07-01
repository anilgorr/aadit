import { defineConfig, s } from 'velite'

const frontmatterSchema = {
  title: s.string().min(1),
  description: s.string().min(1),
  slug: s.slug(),
  publishedAt: s.isodate(),
  updatedAt: s.isodate().optional(),
  author: s.string().optional(),
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
  collections: {
    services: {
      name: 'Service',
      pattern: 'services/**/*.mdx',
      schema: s
        .object({
          ...frontmatterSchema,
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/services/${data.slug}`,
        })),
    },
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s
        .object({
          ...frontmatterSchema,
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/blog/${data.slug}`,
        })),
    },
  },
})
