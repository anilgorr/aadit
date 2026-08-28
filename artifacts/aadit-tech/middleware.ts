import { NextResponse, type NextRequest } from "next/server"

const CANONICAL_ORIGIN = "https://aadit.net"
const RETIRED_SOC_HOSTS = new Set(["aaditsoc.in", "www.aaditsoc.in"])

const LEGACY_SITEMAP_PATHS = new Set([
  "/sitemap_index.xml",
  "/wp-sitemap.xml",
  "/post-sitemap.xml",
  "/page-sitemap.xml",
])

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim()
  const host = (forwardedHost ?? request.headers.get("host") ?? request.nextUrl.host)
    .split(":")[0]
    .toLowerCase()

  if (RETIRED_SOC_HOSTS.has(host)) {
    return NextResponse.redirect(`${CANONICAL_ORIGIN}/compliance/soc2`, 301)
  }

  if (host === "www.aadit.net") {
    return NextResponse.redirect(`${CANONICAL_ORIGIN}${request.nextUrl.pathname}${request.nextUrl.search}`, 301)
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

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}