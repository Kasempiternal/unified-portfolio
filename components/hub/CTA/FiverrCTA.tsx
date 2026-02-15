'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FiverrCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctaRef.current) return;

    gsap.fromTo(
      ctaRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section ref={ctaRef} className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative glass rounded-3xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-12 text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
              Ready to Build Something{' '}
              <span className="text-gradient">Exceptional?</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Let&apos;s collaborate to create a stunning web experience that stands out.
              From design to deployment, I deliver production-ready solutions.
            </p>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto py-8">
              <div className="space-y-2">
                <div className="text-3xl">⚡</div>
                <h3 className="font-semibold text-white">Fast Delivery</h3>
                <p className="text-sm text-gray-400">
                  Production-ready code with best practices
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🎨</div>
                <h3 className="font-semibold text-white">Modern Design</h3>
                <p className="text-sm text-gray-400">
                  Award-worthy interfaces with smooth animations
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🚀</div>
                <h3 className="font-semibold text-white">SEO Optimized</h3>
                <p className="text-sm text-gray-400">
                  Built for performance and discoverability
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-accent hover:bg-accent-dark text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 glow"
              >
                <span>Hire Me on Fiverr</span>
                <span className="text-2xl">→</span>
              </a>
              <p className="mt-4 text-sm text-gray-400">
                Available for freelance projects • Quick turnaround
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
