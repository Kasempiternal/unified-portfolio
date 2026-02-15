'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@components/shared'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProjectInfoProps {
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
}

export function ProjectInfo({ challenge, solution, results, technologies }: ProjectInfoProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.info-section', {
        scrollTrigger: {
          trigger: '.info-section',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })

      gsap.from('.result-item', {
        scrollTrigger: {
          trigger: '.results-section',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      })

      gsap.from('.tech-tag', {
        scrollTrigger: {
          trigger: '.tech-section',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="info-section">
            <h2 className="font-black text-3xl mb-6 border-b-4 border-black pb-4 inline-block">
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{challenge}</p>
          </div>

          <div className="info-section">
            <h2 className="font-black text-3xl mb-6 border-b-4 border-black pb-4 inline-block">
              The Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{solution}</p>
          </div>
        </div>

        <div className="results-section mb-20">
          <h2 className="font-black text-3xl mb-8">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="result-item bg-white border-4 border-black p-6 shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
              >
                <div className="font-black text-4xl text-primary mb-2">{index + 1}</div>
                <p className="font-bold text-gray-800">{result}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-section">
          <h2 className="font-black text-3xl mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-tag bg-black text-white px-5 py-3 border-3 border-black font-black text-sm uppercase shadow-brutal"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
