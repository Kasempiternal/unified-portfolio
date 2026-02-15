'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Container } from '@components/shared'

interface ProjectHeroProps {
  title: string
  category: string
  year: string
  description: string
  color: string
}

export function ProjectHero({ title, category, year, description, color }: ProjectHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-category', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })

      gsap.from('.hero-title', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power4.out',
      })

      gsap.from('.hero-meta', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: 'power3.out',
      })

      gsap.from('.hero-banner', {
        scaleX: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power4.inOut',
        transformOrigin: 'left',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32">
      <Container>
        <div className="mb-12">
          <div className="hero-category inline-block bg-black text-white px-4 py-2 border-3 border-black font-black uppercase text-sm mb-8">
            {category}
          </div>

          <h1 className="hero-title font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
            {title}
          </h1>

          <div className="hero-meta flex flex-wrap gap-8 text-lg">
            <div>
              <div className="text-gray-500 font-bold uppercase text-xs mb-1">Year</div>
              <div className="font-black">{year}</div>
            </div>
            <div className="max-w-xl">
              <div className="text-gray-500 font-bold uppercase text-xs mb-1">Overview</div>
              <div className="font-bold text-gray-700">{description}</div>
            </div>
          </div>
        </div>

        <div
          className="hero-banner h-64 md:h-96 border-4 border-black shadow-brutal"
          style={{ backgroundColor: color }}
        />
      </Container>
    </section>
  )
}
