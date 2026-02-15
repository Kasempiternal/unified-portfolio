'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { team, backers } from '@data/startup-landing/team'

gsap.registerPlugin(ScrollTrigger)

export default function FounderAvatars() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const avatarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (avatarsRef.current) {
        gsap.from(avatarsRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-wider mb-4">
            Built by Industry Veterans
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Meet the Team
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A world-class team with decades of combined experience from the most
            innovative companies
          </p>
        </div>

        <div
          ref={avatarsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md group-hover:blur-lg transition-all" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full rounded-full object-cover ring-2 ring-white/20"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-purple-500 text-xs font-medium mb-1">
                {member.role}
              </p>
              <p className="text-white/60 text-xs">{member.company}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-6">
            Backed by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {backers.map((backer, index) => (
              <div
                key={index}
                className="text-white/70 font-semibold text-lg hover:text-purple-500 transition-colors"
              >
                {backer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
