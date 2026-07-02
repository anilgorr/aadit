import { permanentRedirect } from "next/navigation"

// Catch-all safety net: matches any URL path not claimed by a more specific
// route (static pages, [hub], [hub]/[slug], blog/[slug], etc.).
// Covers legacy aadit.net URLs not individually mapped in next.config.ts
// redirects — sends them to the homepage with a 301 rather than a hard 404.
export default function LegacyCatchAll() {
  permanentRedirect("/")
}
