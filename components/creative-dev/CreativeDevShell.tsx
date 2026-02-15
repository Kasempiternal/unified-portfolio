'use client'

import dynamic from 'next/dynamic'
import MinimalNav from '@components/creative-dev/Navigation/MinimalNav'

const CustomCursor = dynamic(
  () => import('@components/creative-dev/Cursor/CustomCursor'),
  { ssr: false }
)

export default function CreativeDevShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-site="creative-dev"
      className="relative min-h-screen overflow-x-hidden font-bebas bg-black text-white"
      style={
        {
          '--site-bg': '#000000',
          '--site-fg': '#ffffff',
          '--site-accent': '#ffffff',
          '--site-primary': '#ffffff',
          '--site-secondary': '#1a1a1a',
          '--site-muted': '#e5e5e5',
        } as React.CSSProperties
      }
    >
      <CustomCursor />
      <MinimalNav />
      <main className="relative z-10">{children}</main>
    </div>
  )
}
