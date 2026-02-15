import type { Metadata } from 'next'
import CreativeDevShell from '@components/creative-dev/CreativeDevShell'
import './creative-globals.css'

export const metadata: Metadata = {
  title: 'Creative Developer Portfolio',
  description:
    'Award-winning creative developer specializing in WebGL and interactive experiences',
}

export default function CreativeDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CreativeDevShell>{children}</CreativeDevShell>
}
