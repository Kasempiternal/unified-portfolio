'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CreativeDevAboutPage() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    gsap.utils.toArray('.about-section').forEach((section: unknown) => {
      gsap.from(section as Element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section as Element,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      {/* Hero */}
      <section className="mb-32 md:mb-48">
        <h1 className="font-bebas text-display-lg leading-none tracking-tight mb-8">
          About
        </h1>
        <p className="text-xl md:text-2xl text-creative-gray-light max-w-3xl leading-relaxed">
          I&apos;m a creative developer who bridges the gap between design and
          technology, crafting award-winning digital experiences that push the
          boundaries of what&apos;s possible on the web.
        </p>
      </section>

      {/* Bio */}
      <section className="about-section mb-32 md:mb-48">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="font-bebas text-display-sm mb-6">Background</h2>
            <div className="space-y-4 text-creative-gray-light">
              <p>
                With over 8 years of experience in creative development, I
                specialize in WebGL, GSAP animations, and building immersive web
                experiences that tell stories and engage audiences.
              </p>
              <p>
                My work has been featured on Awwwards, FWA, and CSS Design
                Awards. I&apos;ve collaborated with agencies and brands
                worldwide to create digital experiences that stand out in the
                crowded web landscape.
              </p>
              <p>
                I believe in the power of details, the importance of
                performance, and the magic that happens when art meets code.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-bebas text-display-sm mb-6">Expertise</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Creative Development</h3>
                <p className="text-sm text-creative-gray-light">
                  WebGL, Three.js, React Three Fiber, GLSL Shaders, Canvas API
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Animation &amp; Interaction</h3>
                <p className="text-sm text-creative-gray-light">
                  GSAP, Framer Motion, CSS Animations, Lottie, SVG Animation
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Modern Web Stack</h3>
                <p className="text-sm text-creative-gray-light">
                  React, Next.js, TypeScript, Node.js, Tailwind CSS
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-2">
                  Performance &amp; Optimization
                </h3>
                <p className="text-sm text-creative-gray-light">
                  Web Performance, Core Web Vitals, Progressive Enhancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="about-section mb-32 md:mb-48">
        <h2 className="font-bebas text-display-sm mb-12">Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-2 border-white/20 pl-6">
            <div className="font-bebas text-5xl mb-2">15+</div>
            <p className="text-creative-gray-light">Awwwards Wins</p>
          </div>
          <div className="border-l-2 border-white/20 pl-6">
            <div className="font-bebas text-5xl mb-2">30+</div>
            <p className="text-creative-gray-light">Projects Shipped</p>
          </div>
          <div className="border-l-2 border-white/20 pl-6">
            <div className="font-bebas text-5xl mb-2">50+</div>
            <p className="text-creative-gray-light">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="about-section mb-32 md:mb-48">
        <h2 className="font-bebas text-display-sm mb-12">What I Do</h2>
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl mb-2">Creative Development</h3>
            <p className="text-creative-gray-light">
              Building pixel-perfect, performant websites with cutting-edge
              technologies and creative flair.
            </p>
          </div>
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl mb-2">WebGL &amp; 3D Experiences</h3>
            <p className="text-creative-gray-light">
              Creating immersive 3D experiences and interactive visualizations
              that captivate and engage users.
            </p>
          </div>
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl mb-2">Animation &amp; Motion Design</h3>
            <p className="text-creative-gray-light">
              Crafting smooth, purposeful animations that enhance user
              experience and tell compelling stories.
            </p>
          </div>
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl mb-2">Technical Consulting</h3>
            <p className="text-creative-gray-light">
              Providing guidance on web performance, technical architecture,
              and creative development workflows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-section">
        <div className="border border-white/20 p-12 md:p-24 text-center">
          <h2 className="font-bebas text-display-md mb-6">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-lg text-creative-gray-light mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 bg-white text-black font-bebas text-xl tracking-wide hover:bg-creative-gray-light transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
