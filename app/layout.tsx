import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  title: 'Atmaghani Biyan Sudarto — Developer & Game Designer',
  description: 'Portfolio of Atmaghani Biyan Sudarto: full-stack web development, backend systems, and gameplay design.',
  keywords: ['Atmaghani Biyan Sudarto', 'Full Stack Developer', 'Backend Developer', 'Game Designer', 'Node.js', 'Express.js', 'Laravel', 'Game Design Portfolio'],
  authors: [{ name: 'Atmaghani Biyan Sudarto' }],
  openGraph: {
    title: 'Atmaghani Biyan Sudarto — Developer & Game Designer',
    description: 'Building useful digital products and designing meaningful interactive experiences.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#F7F6F0' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
