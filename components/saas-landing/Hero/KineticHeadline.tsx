'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface KineticHeadlineProps {
  children: React.ReactNode
}

export function KineticHeadline({ children }: KineticHeadlineProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const headline = headlineRef.current
    if (!headline) return

    const chars = headline.textContent?.split('') || []
    headline.innerHTML = chars
      .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')

    const spans = headline.querySelectorAll('span')

    gsap.fromTo(
      spans,
      {
        y: 100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.2,
      }
    )
  }, [])

  return (
    <h1
      ref={headlineRef}
      className="font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
      style={{ perspective: '1000px' }}
    >
      {children}
    </h1>
  )
}
