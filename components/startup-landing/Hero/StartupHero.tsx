'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import WaitlistForm from './WaitlistForm'

export default function StartupHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const orbsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(subheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })

      if (orbsRef.current) {
        const orbs = orbsRef.current.children
        gsap.to(orbs, {
          y: '+=30',
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.5,
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div
        ref={orbsRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          The Future Is
          <br />
          <span className="gradient-text">Almost Here</span>
        </h1>

        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto text-balance"
        >
          We&apos;re building something extraordinary. Join the waitlist to be
          among the first to experience the revolution.
        </p>

        <WaitlistForm />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
