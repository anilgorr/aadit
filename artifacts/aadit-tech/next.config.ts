import type { NextConfig } from 'next'
import { SITE_URL } from './lib/site'

const apexHost = new URL(SITE_URL).host // e.g. "aadit.net"

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  allowedDevOrigins: ['*.replit.dev', '*.repl.co'],
  async redirects() {
    return [
      // Canonical host: 301 www.<apex> → <apex>, preserving the path.
      {
        source: '/:path*',
        has: [{ type: 'host', value: `www.${apexHost}` }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      // NOTE: HTTP→HTTPS is handled automatically by Netlify's edge (forced TLS),
      // so no explicit rule is needed here.
      //
      // NOTE: No legacy-URL → new-URL 301 map is included because this is a
      // clean rebuild and no old→new path mapping was provided. When the
      // previous site's URLs are known, add entries here, e.g.:
      //   { source: '/old-services/pentest', destination: '/cybersecurity/consulting', permanent: true },
    ]
  },
}

export default nextConfig
