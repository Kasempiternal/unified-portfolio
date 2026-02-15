'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@components/shared'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface NextProjectProps {
  title: string
  slug: string
  category: string
  color: string
}

export function NextProject({ title, slug, category, color }: NextProjectProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.next-project-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-32">
      <Container>
        <Link href={`/agency/work/${slug}`}>
          <div className="next-project-content group relative overflow-hidden border-4 border-black shadow-brutal hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-500">
            <div className="relative" style={{ backgroundColor: color }}>
              <div className="h-[60vh] flex items-center justify-center p-12">
                <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="text-sm font-black uppercase tracking-wider mb-4 text-black/60">
                    Next Project
                  </div>
                  <h2 className="font-black text-5xl md:text-7xl lg:text-8xl text-black mb-4">
                    {title}
                  </h2>
                  <div className="inline-block bg-black text-white px-4 py-2 border-3 border-black font-black uppercase text-sm">
                    {category}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white border-3 border-black px-6 py-3 font-black text-lg transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
                View Project &rarr;
              </div>
            </div>
          </div>
        </Link>

        <div className="mt-20 text-center">
          <Link
            href="/agency/work"
            className="inline-block bg-black text-white px-8 py-4 border-3 border-black font-black text-lg uppercase shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
          >
            &larr; Back to All Work
          </Link>
        </div>
      </Container>
    </section>
  )
}
