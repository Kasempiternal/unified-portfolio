import type { Metadata } from 'next'
import './startup-globals.css'

export const metadata: Metadata = {
  title: 'LaunchPad - Coming Soon',
  description:
    'The next generation platform that will transform how you work. Join the waitlist for early access.',
  keywords: ['startup', 'launch', 'waitlist', 'innovation', 'technology'],
}

export default function StartupLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-site="startup-landing"
      className="min-h-screen font-geist text-white antialiased"
      style={
        {
          '--site-bg': '#0f0f1a',
          '--site-fg': '#ffffff',
          '--site-accent': '#a855f7',
          '--site-primary': '#a855f7',
          '--site-secondary': '#ec4899',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
