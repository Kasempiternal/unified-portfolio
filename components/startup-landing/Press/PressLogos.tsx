'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PressLogos() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (logosRef.current) {
        gsap.from(logosRef.current.children, {
          scrollTrigger: { trigger: logosRef.current, start: 'top 85%' },
          scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)',
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const mentions = [
    { outlet: 'TechCrunch', quote: 'A game-changer for productivity', logo: (<svg className="h-8" viewBox="0 0 120 24" fill="currentColor"><text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">TechCrunch</text></svg>) },
    { outlet: 'Forbes', quote: 'The future of work automation', logo: (<svg className="h-8" viewBox="0 0 80 24" fill="currentColor"><text x="0" y="18" fontFamily="serif" fontSize="24" fontWeight="bold" fontStyle="italic">FORBES</text></svg>) },
    { outlet: 'The Verge', quote: 'Impressively intuitive and powerful', logo: (<svg className="h-8" viewBox="0 0 100 24" fill="currentColor"><text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="300">THE VERGE</text></svg>) },
    { outlet: 'Wired', quote: 'A must-have for modern teams', logo: (<svg className="h-8" viewBox="0 0 80 24" fill="currentColor"><text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900">WIRED</text></svg>) },
    { outlet: 'Fast Company', quote: 'Redefining productivity software', logo: (<svg className="h-8" viewBox="0 0 140 24" fill="currentColor"><text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">FAST COMPANY</text></svg>) },
    { outlet: 'Product Hunt', quote: '#1 Product of the Day', logo: (<svg className="h-8" viewBox="0 0 140 24" fill="currentColor"><text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Product Hunt</text></svg>) },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-wider mb-4">As Featured In</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Making <span className="gradient-text">Headlines</span></h2>
          <p className="text-white/70">Trusted by industry leaders and featured in top publications.</p>
        </div>

        <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {mentions.map((mention, index) => (
            <div key={index} className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-all group text-center">
              <div className="text-white/80 group-hover:text-white transition-colors mb-4 flex items-center justify-center">{mention.logo}</div>
              <p className="text-sm text-white/60 italic">&ldquo;{mention.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10k+', label: 'Waitlist Signups' },
            { value: '50+', label: 'Beta Partners' },
            { value: '99%', label: 'Satisfaction Rate' },
            { value: '$2M', label: 'Seed Funding' },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { badge: '⭐', text: 'Top Rated on G2' },
            { badge: '🏆', text: 'Best New Startup 2025' },
            { badge: '🚀', text: 'Y Combinator W25' },
          ].map((award, index) => (
            <div key={index} className="flex items-center gap-2 glass-effect rounded-full px-6 py-3 hover:bg-white/10 transition-all">
              <span className="text-2xl">{award.badge}</span>
              <span className="text-sm font-semibold">{award.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
