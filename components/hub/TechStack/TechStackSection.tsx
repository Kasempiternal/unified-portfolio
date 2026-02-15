'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TECH_STACK } from '@data/hub/constants';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const techItems = sectionRef.current.querySelectorAll('.tech-item');

    gsap.fromTo(
      techItems,
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const categories = Array.from(new Set(TECH_STACK.map((tech) => tech.category)));

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built with industry-leading technologies and frameworks
          </p>
        </div>

        {/* Tech Grid by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const techs = TECH_STACK.filter((tech) => tech.category === category);

            return (
              <div key={category}>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="tech-item group glass rounded-xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </span>
                        <div>
                          <p className="font-semibold text-white text-sm">{tech.name}</p>
                          <p className="text-xs text-gray-400 mt-1">{tech.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
