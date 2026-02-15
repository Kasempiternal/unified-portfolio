import type { Metadata } from 'next'
import SmoothScroll from '@components/photography/SmoothScroll'
import HiddenNav from '@components/photography/Navigation/HiddenNav'
import './photography-globals.css'

export const metadata: Metadata = {
  title: 'Elena Voss - Photography',
  description:
    'Minimalist photography portfolio showcasing landscapes, architecture, and editorial work.',
}

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-site="photography"
      className="min-h-screen font-cormorant bg-white text-black"
      style={
        {
          '--site-bg': '#ffffff',
          '--site-fg': '#000000',
          '--site-accent': '#000000',
        } as React.CSSProperties
      }
    >
      <SmoothScroll />
      <HiddenNav />
      {children}
    </div>
  )
}
