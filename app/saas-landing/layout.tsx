import type { Metadata } from 'next'
import './saas-globals.css'

export const metadata: Metadata = {
  title: 'FlowSync - Modern SaaS Platform',
  description: 'Revolutionary workflow automation platform built for modern teams',
}

export default function SaasLandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-site="saas-landing"
      className="min-h-screen font-sans"
      style={{
        '--site-bg': '#0a0a0b',
        '--site-fg': '#ffffff',
        '--site-accent': '#00d9ff',
        '--site-primary': '#00d9ff',
        '--site-secondary': '#0ea5e9',
        '--site-muted': '#71717a',
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
