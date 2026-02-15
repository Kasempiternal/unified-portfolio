'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@components/shared'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProjectGalleryProps {
  mockupColors: string[]
  title: string
}

export function ProjectGallery({ mockupColors, title }: ProjectGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mockups = containerRef.current?.querySelectorAll('.mockup-block')

      mockups?.forEach((mockup, index) => {
        gsap.from(mockup, {
          scrollTrigger: {
            trigger: mockup,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const mockupConfigs = [
    { span: 'col-span-2', height: 'h-80' },
    { span: 'col-span-1', height: 'h-80' },
    { span: 'col-span-1', height: 'h-64' },
    { span: 'col-span-2', height: 'h-64' },
    { span: 'col-span-3', height: 'h-96' },
    { span: 'col-span-1', height: 'h-48' },
  ]

  return (
    <section ref={containerRef} className="py-20">
      <Container>
        <h2 className="font-black text-3xl md:text-4xl mb-12">Visual Design</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockupConfigs.slice(0, mockupColors.length).map((config, index) => (
            <div
              key={index}
              className={`mockup-block ${config.span} ${config.height} border-4 border-black shadow-brutal group hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 relative overflow-hidden`}
              style={{ backgroundColor: mockupColors[index] }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="font-black text-4xl md:text-5xl opacity-20 text-black/50">
                    {title}
                  </div>
                  <div className="font-bold text-sm uppercase tracking-wider mt-4 opacity-30">
                    Mockup {index + 1}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white border-2 border-black px-3 py-1 text-xs font-black">
                {mockupColors[index]}
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
