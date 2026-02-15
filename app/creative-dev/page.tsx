'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const ProjectGrid = dynamic(
  () => import('@components/creative-dev/ProjectGrid/ProjectGrid'),
  { ssr: false }
)

export default function CreativeDevHome() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        rafRef.current = requestAnimationFrame(raf)
      }

      rafRef.current = requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      cancelAnimationFrame(rafRef.current)
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      {/* Hero Section */}
      <section className="mb-32 md:mb-48">
        <h1 className="font-bebas text-display-lg leading-none tracking-tight">
          Creative
          <br />
          Developer
        </h1>
        <p className="mt-8 text-lg md:text-xl text-creative-gray-light max-w-2xl">
          Crafting award-winning digital experiences through code, design, and
          interactive storytelling. Specializing in WebGL, GSAP animations, and
          immersive web applications.
        </p>
      </section>

      {/* Projects Grid */}
      <ProjectGrid />

      {/* Footer */}
      <footer className="mt-48 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-sm text-creative-gray-light">
              Available for freelance work and collaborations
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="mailto:hello@example.com"
              className="text-sm hover:text-creative-gray-light transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-creative-gray-light transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-creative-gray-light transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
