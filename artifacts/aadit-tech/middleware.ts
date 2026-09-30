import { NextResponse, type NextRequest } from "next/server"
import { routeRedirects } from "./next.config"

const CANONICAL_ORIGIN = "https://aadit.net"
const RETIRED_SOC_HOSTS = new Set(["aaditsoc.in", "www.aaditsoc.in"])

const LEGACY_SITEMAP_PATHS = new Set([
  "/sitemap_index.xml",
  "/wp-sitemap.xml",
  "/post-sitemap.xml",
  "/blog/sitemap.xml",
  "/page-sitemap.xml",
])

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim()
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim().toLowerCase()
  const host = (forwardedHost ?? request.headers.get("host") ?? request.nextUrl.host)
    .split(":")[0]
    .toLowerCase()
  const protocol = forwardedProtocol ?? request.nextUrl.protocol.replace(":", "").toLowerCase()

  if (RETIRED_SOC_HOSTS.has(host)) {
    return NextResponse.redirect(`${CANONICAL_ORIGIN}/compliance/soc2`, 301)
  }

  if (LEGACY_SITEMAP_PATHS.has(request.nextUrl.pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  }

  const pathname = request.nextUrl.pathname
  const withoutSlash = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname
  const legacy = routeRedirects.find(({ source }) =>
    source === withoutSlash ||
    (source.endsWith("/:slug*") &&
      (withoutSlash === source.slice(0, -7) || withoutSlash.startsWith(source.slice(0, -7) + "/")))
  )
  if (legacy) {
    const destination = new URL(legacy.destination, CANONICAL_ORIGIN)
    destination.search = request.nextUrl.search
    return NextResponse.redirect(destination, 301)
  }
  if (host === "www.aadit.net" || (host === "aadit.net" && protocol !== "https")) {
    return NextResponse.redirect(`${CANONICAL_ORIGIN}${withoutSlash}${request.nextUrl.search}`, 301)
  }
  if (withoutSlash !== pathname) {
    return NextResponse.redirect(new URL(`${withoutSlash}${request.nextUrl.search}`, request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}