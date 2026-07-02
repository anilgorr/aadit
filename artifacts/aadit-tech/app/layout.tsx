import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../styles/globals.css'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/site'
import { organizationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aadit Technologies | Cybersecurity, Compliance & IT Services',
    template: '%s | Aadit Technologies',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'cybersecurity',
    'compliance',
    'IT managed services',
    'ISO 27001',
    'SOC 2',
    'VAPT',
    'HIPAA',
    'PCI DSS',
    'Bengaluru',
    'India',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd data={organizationSchema()} />
        {children}
      </body>
    </html>
  )
}
