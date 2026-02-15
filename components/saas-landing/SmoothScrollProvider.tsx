'use client'

import { useSmoothScroll } from '@lib/animations'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll()

  return <>{children}</>
}
