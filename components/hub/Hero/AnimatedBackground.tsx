'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const orbs = containerRef.current.querySelectorAll('.orb');

    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        scale: `random(0.8, 1.2)`,
        duration: `random(6, 10)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orb 1 - Primary */}
      <div
        className="orb absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          top: '10%',
          left: '20%',
        }}
      />

      {/* Gradient Orb 2 - Secondary */}
      <div
        className="orb absolute w-80 h-80 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          top: '50%',
          right: '15%',
        }}
      />

      {/* Gradient Orb 3 - Accent */}
      <div
        className="orb absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          bottom: '10%',
          left: '40%',
        }}
      />
    </div>
  );
}
