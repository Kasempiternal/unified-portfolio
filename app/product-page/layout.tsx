import type { Metadata } from 'next'
import './product-globals.css'

export const metadata: Metadata = {
  title: 'Premium Watch Collection | Timepiece Atelier',
  description: 'Discover our signature collection of handcrafted timepieces',
}

export default function ProductPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-site="product-page"
      className="min-h-screen font-inter antialiased bg-cream-50 text-charcoal-900"
      style={
        {
          '--site-bg': '#fdf9f0',
          '--site-fg': '#1f1f1f',
          '--site-accent': '#cd7f32',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
