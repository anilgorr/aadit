import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

/**
 * robots.txt — explicitly welcomes major search and AI crawlers. Blocking AI
 * crawlers prevents the site from being cited in AI answers (ChatGPT,
 * Perplexity, Claude, Google AI Overviews), so every listed agent is allowed.
 */
export default function robots(): MetadataRoute.Robots {
  const aiAndSearchBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-Web",
    "Google-Extended",
    "Googlebot",
    "Bingbot",
    "Applebot",
    "Applebot-Extended",
    "CCBot",
  ]

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiAndSearchBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
