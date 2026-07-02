import { posts, type Post } from "@/.velite"

export const POSTS_PER_PAGE = 9

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  )
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getTotalPages(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / POSTS_PER_PAGE))
}

export function getPostsPage(page: number): Post[] {
  const all = getAllPosts()
  const start = (page - 1) * POSTS_PER_PAGE
  return all.slice(start, start + POSTS_PER_PAGE)
}

export function getRelatedPosts(current: Post, limit = 3): Post[] {
  const others = getAllPosts().filter((post) => post.slug !== current.slug)
  return others
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        +new Date(b.post.publishedAt) - +new Date(a.post.publishedAt)
    )
    .slice(0, limit)
    .map((entry) => entry.post)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
