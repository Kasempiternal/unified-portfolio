'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stepsRef.current) {
        const steps = stepsRef.current.children
        Array.from(steps).forEach((step, index) => {
          gsap.from(step, {
            scrollTrigger: { trigger: step, start: 'top 85%' },
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          })
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    { number: '01', title: 'Sign Up & Connect', description: 'Create your account in seconds and connect your existing tools with one-click integrations.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>), gradient: 'from-cyan-500 to-blue-500' },
    { number: '02', title: 'Customize Your Workflow', description: 'Set up your dashboard, configure automation rules, and personalize your workspace to match your needs.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>), gradient: 'from-purple-500 to-pink-500' },
    { number: '03', title: 'Collaborate & Create', description: 'Invite your team, share projects, and start collaborating in real-time with powerful tools.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>), gradient: 'from-green-500 to-emerald-500' },
    { number: '04', title: 'Scale & Optimize', description: 'Watch your productivity soar as AI learns your patterns and suggests optimizations automatically.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>), gradient: 'from-orange-500 to-red-500' },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-wider mb-4">Simple Process</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">How It<br /><span className="gradient-text">Works</span></h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Get up and running in minutes with our streamlined onboarding process.</p>
        </div>

        <div ref={stepsRef} className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent" />
              )}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="flex gap-8 items-start">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center text-white`}>{step.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-500 transition-colors">{step.title}</h3>
                        <p className="text-white/60 leading-relaxed text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-10 rounded-full blur-2xl`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#hero" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
            Get Started Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
