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

      // ─── Blog de-duplication 301s ──────────────────────────────────────────
      // Near-duplicate posts consolidated into a single canonical post per topic.
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
      // Special case: slug promises ISO 27001 but body was generic managed-IT copy
      { source: '/blog/iso-27001-consulting-india', destination: '/compliance/iso-27001', permanent: true },

      // ─── Cybersecurity service pages ──────────────────────────────────────
      { source: '/cybersecurity-services-india', destination: '/cybersecurity', permanent: true },
      { source: '/vulnerability-assessment-penetration-testing-vapt-services', destination: '/cybersecurity/vapt', permanent: true },
      { source: '/managed-soc', destination: '/cybersecurity/managed-soc', permanent: true },
      { source: '/managed-soc-services', destination: '/cybersecurity/managed-soc', permanent: true },
      { source: '/security-as-a-service-india', destination: '/cybersecurity/managed-soc', permanent: true },
      { source: '/24x7-managed-soc-services', destination: '/cybersecurity/managed-soc', permanent: true },
      { source: '/landing-page-soc', destination: '/cybersecurity/managed-soc', permanent: true },
      { source: '/soc-as-a-service', destination: '/cybersecurity/soc-as-a-service', permanent: true },
      { source: '/endpoint-security-solutions', destination: '/cybersecurity/endpoint-security', permanent: true },
      { source: '/firewall-network-security-solutions', destination: '/cybersecurity/firewall-network-security', permanent: true },
      { source: '/email-security-solutions', destination: '/cybersecurity/email-security', permanent: true },
      { source: '/cyber-security-consulting-services', destination: '/cybersecurity/consulting', permanent: true },

      // ─── Compliance service pages ──────────────────────────────────────────
      { source: '/compliance-audit-services-india', destination: '/compliance', permanent: true },
      { source: '/iso-27001-certification-services', destination: '/compliance/iso-27001', permanent: true },
      { source: '/iso-42001-certification', destination: '/compliance/iso-42001', permanent: true },
      { source: '/iso-9001-certification', destination: '/compliance/iso-9001', permanent: true },
      { source: '/gdpr-compliance-solutions', destination: '/compliance/gdpr', permanent: true },
      { source: '/pci-dss-compliance-solutions', destination: '/compliance/pci-dss', permanent: true },
      { source: '/hipaa-compliance-solutions', destination: '/compliance/hipaa', permanent: true },
      { source: '/soc2-certification', destination: '/compliance/soc2', permanent: true },

      // ─── IT Managed Services pages ────────────────────────────────────────
      { source: '/managed-it-services-india', destination: '/it-managed-services', permanent: true },
      { source: '/managed-it-services', destination: '/it-managed-services', permanent: true },
      { source: '/it-support-services', destination: '/it-managed-services/helpdesk-support', permanent: true },
      { source: '/cloud-infrastructure-solutions', destination: '/it-managed-services/cloud-infrastructure', permanent: true },
      { source: '/cloud-migration-services', destination: '/it-managed-services/cloud-migration', permanent: true },
      { source: '/cloud-optimization-services', destination: '/it-managed-services/cloud-optimization', permanent: true },
      { source: '/backup-and-disaster-recovery-solutions', destination: '/it-managed-services/backup-disaster-recovery', permanent: true },

      // ─── Company / utility pages ──────────────────────────────────────────
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/whitepapers-cybersecurity-india', destination: '/whitepapers', permanent: true },
    ]
  },
}

export default nextConfig
