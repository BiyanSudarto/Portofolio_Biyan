import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atmaghani Biyan Sudarto — Game Designer',
  description:
    'Portfolio of Atmaghani Biyan Sudarto, a Game Designer specializing in gameplay mechanics, progression systems, and player experience design.',
  keywords: [
    'Game Designer',
    'Mechanics Designer',
    'Progression Designer',
    'Game Design Portfolio',
    'Unity',
    'Atmaghani Biyan Sudarto',
  ],
  authors: [{ name: 'Atmaghani Biyan Sudarto' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Atmaghani Biyan Sudarto — Game Designer',
    description:
      'Designing engaging gameplay systems that combine mechanics, progression, and player experience.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0F19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
