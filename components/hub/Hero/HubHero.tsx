'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedBackground from './AnimatedBackground';
import StatsBar from './StatsBar';

export default function HubHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.hero-title',
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
      }
    )
      .fromTo(
        '.hero-tagline',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.5'
      )
      .fromTo(
        '.hero-description',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        '-=0.3'
      );
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="hero-title inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Hire
          </div>

          {/* Main Headline with stagger effect */}
          <h1 className="hero-title font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
            <span className="block text-gradient animate-gradient-shift bg-[length:200%_auto]">
              Fisko AI
            </span>
          </h1>

          {/* Tagline with enhanced spacing */}
          <p className="hero-tagline text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white/90 leading-tight">
            Award-Worthy
            <span className="block mt-2 text-gradient">Web Development</span>
          </p>

          {/* Description with better readability */}
          <p className="hero-description text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies.
            Explore a showcase of <span className="text-white font-semibold">7 production-ready</span> portfolio sites built with
            <span className="text-primary font-semibold"> Next.js</span>,
            <span className="text-secondary font-semibold"> GSAP</span>, and modern web standards.
          </p>

          {/* Enhanced CTAs with better visual hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#contact"
              className="hero-cta group relative px-10 py-5 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold rounded-xl transition-all duration-300 glow hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire on Fiverr
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <button
              onClick={scrollToPortfolio}
              className="hero-cta px-10 py-5 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
            >
              View Portfolio
            </button>
          </div>

          {/* Quick stats inline */}
          <div className="hero-description flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>7 Live Sites</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>95+ Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>100% Mobile Optimized</span>
            </div>
          </div>

          {/* Enhanced Stats Bar */}
          <div className="pt-8 sm:pt-12">
            <StatsBar />
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2 hover:border-white/40 transition-colors cursor-pointer" onClick={scrollToPortfolio}>
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
