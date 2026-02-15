"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductHero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !ctaRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
        .from(
          subtitleRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );

      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 0.3,
        scale: 0.95,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bronze-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-charcoal-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1
          ref={titleRef}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-charcoal-950 mb-6 text-balance"
        >
          The Signature
          <span className="block text-bronze-500">Collection</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-charcoal-700 mb-12 max-w-2xl mx-auto text-balance"
        >
          Handcrafted precision. Timeless elegance. Every detail meticulously
          engineered for those who appreciate the art of horology.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-charcoal-950 text-cream-50 font-medium rounded-full hover:bg-charcoal-900 transition-colors duration-300">
            Explore Collection
          </button>
          <button className="px-8 py-4 border-2 border-charcoal-950 text-charcoal-950 font-medium rounded-full hover:bg-charcoal-950 hover:text-cream-50 transition-colors duration-300">
            Request Catalog
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-charcoal-600">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-px h-12 bg-charcoal-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
