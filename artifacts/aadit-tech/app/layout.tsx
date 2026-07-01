import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Aadit Technologies',
    template: '%s | Aadit Technologies',
  },
  description:
    'Cybersecurity, compliance, and IT managed services for startups through enterprise clients across healthcare, BFSI, fintech, and SaaS.',
  keywords: [
    'cybersecurity',
    'compliance',
    'IT managed services',
    'Bangalore',
    'India',
    'healthcare',
    'BFSI',
    'fintech',
    'SaaS',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
