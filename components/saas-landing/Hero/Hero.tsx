'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Container, Button } from '@components/shared'
import { GradientOrbs } from './GradientOrbs'
import { KineticHeadline } from './KineticHeadline'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from('.hero-subheadline', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
      })
        .from(
          '.hero-cta',
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-image',
          {
            y: 100,
            opacity: 0,
            duration: 1,
          },
          '-=0.6'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <GradientOrbs />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <KineticHeadline>
            Workflow automation reimagined
          </KineticHeadline>

          <p className="hero-subheadline text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto text-balance">
            FlowSync connects your tools, automates repetitive tasks, and helps your team focus on
            what matters most.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[--site-accent] text-black hover:bg-[--site-accent]/90 px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 hover:border-[--site-accent]">
              Watch Demo
            </Button>
          </div>

          <div className="hero-image mt-16">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[--site-bg] via-transparent to-transparent z-10" />
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-800 p-4">
                <div className="w-full h-full bg-gradient-to-br from-[--site-accent]/20 to-purple-500/20 rounded backdrop-blur-sm flex items-center justify-center">
                  <p className="font-mono text-sm text-gray-500">Product Mockup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
