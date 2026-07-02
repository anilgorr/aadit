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
      // Blog de-duplication 301s: near-duplicate posts were consolidated into a
      // single canonical post per topic. Each retired slug redirects to the
      // surviving post so existing indexed URLs and backlinks still resolve.
      // VAPT "what is / full form" cluster -> canonical VAPT full-form post
      { source: '/blog/vapt-methodology-step-by-step-guide', destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies', permanent: true },
      { source: '/blog/what-is-vapt-guide-2', destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies', permanent: true },
      { source: '/blog/types-of-vapt-services-security-assessment-guide', destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies', permanent: true },
      { source: '/blog/what-is-vapt-guide', destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies', permanent: true },
      { source: '/blog/services-vapt-understanding-vapt', destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies', permanent: true },
      { source: '/blog/vapt-in-cyber-security-protecting-your-digital-assets', destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies', permanent: true },
      { source: '/blog/services-vapt-vapt-report', destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies', permanent: true },
      // Managed SOC cluster -> canonical Managed SOC post
      { source: '/blog/managed-soc-services-managed-soc-for-banks', destination: '/blog/managed-soc-services-in-india', permanent: true },
      { source: '/blog/managed-soc-services-comprehensive-cybersecurity-with-managed-soc', destination: '/blog/managed-soc-services-in-india', permanent: true },
      { source: '/blog/managed-soc-services-managed-security-services-with-soc', destination: '/blog/managed-soc-services-in-india', permanent: true },
      // "Cybersecurity companies" Bangalore / India duplicates
      { source: '/blog/cyber-security-companies-bangalore-experts', destination: '/blog/cyber-security-companies-bangalore', permanent: true },
      { source: '/blog/cybersecurity-companies-in-india-top-leaders', destination: '/blog/top-cyber-security-companies-in-india-safeguarding-digital-future', permanent: true },
      // SOC 2 duplicate
      { source: '/blog/soc-2-compliance-services-india-2', destination: '/blog/soc-2-compliance-services-india', permanent: true },
      // Cloud cost optimization duplicate
      { source: '/blog/cloud-optimization-strategies', destination: '/blog/cloud-cost-optimization-indian-businesses', permanent: true },
      // Special case: slug promises ISO 27001 but body was generic managed-IT
      // copy -> send to the real ISO 27001 service page.
      { source: '/blog/iso-27001-consulting-india', destination: '/compliance/iso-27001', permanent: true },
    ]
  },
}

export default nextConfig
