'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function StatsBar() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const stats = statsRef.current.querySelectorAll('.stat-item');

    gsap.fromTo(
      stats,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div
      ref={statsRef}
      className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base"
    >
      <div className="stat-item flex items-center gap-2">
        <span className="text-primary text-2xl">7</span>
        <span className="text-gray-400">Live Sites</span>
      </div>

      <div className="hidden sm:block w-px h-6 bg-white/10" />

      <div className="stat-item flex items-center gap-2">
        <span className="text-secondary text-2xl">10+</span>
        <span className="text-gray-400">Technologies</span>
      </div>

      <div className="hidden sm:block w-px h-6 bg-white/10" />

      <div className="stat-item flex items-center gap-2">
        <span className="text-accent text-2xl">⚡</span>
        <span className="text-gray-400">Next.js 15</span>
      </div>
    </div>
  );
}
