import './agency-globals.css'
import { Nav } from '@components/agency/Navigation/Nav'

export const metadata = {
  title: 'BOLD - Creative Agency',
  description: 'A creative agency that does not play it safe',
}

export default function AgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-site="agency"
      className="min-h-screen font-jakarta"
      style={{
        '--site-bg': '#fafafa',
        '--site-fg': '#0a0a0a',
        '--site-accent': '#ff6b6b',
        '--site-primary': '#2563eb',
        '--site-secondary': '#2563eb',
        '--site-muted': '#6b7280',
      } as React.CSSProperties}
    >
      <Nav />
      {children}
    </div>
  )
}
