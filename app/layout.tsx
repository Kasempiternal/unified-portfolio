import type { Metadata } from 'next'
import { allFonts } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fisko Portfolio | Award-Worthy Web Development',
  description:
    'Professional portfolio showcasing award-worthy web development projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontVariables = allFonts.map((f) => f.variable).join(' ')

  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
