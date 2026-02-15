'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Container } from '@components/shared'

export function AgencyHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power4.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-32">
      <Container>
        <div className="max-w-5xl">
          <h1 className="hero-title font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-8">
            We make brands
            <span className="block text-primary">IMPOSSIBLE</span>
            to ignore
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 max-w-2xl">
            A creative agency that doesn't play it safe. We build bold identities and daring
            digital experiences for brands ready to stand out.
          </p>
        </div>
      </Container>
    </section>
  )
}
