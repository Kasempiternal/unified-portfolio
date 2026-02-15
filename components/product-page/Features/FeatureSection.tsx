"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  description: string;
  icon: string;
  stat: string;
  statLabel: string;
}

const features: Feature[] = [
  {
    title: "Swiss Movement",
    description:
      "Powered by the legendary ETA 2824-2 automatic movement, renowned for its precision and reliability. Each movement is individually tested and regulated to meet chronometer standards.",
    icon: "⚙️",
    stat: "+/-2s",
    statLabel: "Daily Accuracy",
  },
  {
    title: "Sapphire Crystal",
    description:
      "Anti-reflective coated sapphire crystal with a hardness rating of 9 on the Mohs scale. Virtually scratch-proof protection for a lifetime of clarity.",
    icon: "💎",
    stat: "9/10",
    statLabel: "Mohs Hardness",
  },
  {
    title: "Water Resistance",
    description:
      "Engineered with triple gasket crown system and screw-down caseback. Suitable for swimming, snorkeling, and water sports activities.",
    icon: "🌊",
    stat: "200m",
    statLabel: "Water Depth",
  },
  {
    title: "Lifetime Warranty",
    description:
      "We stand behind our craftsmanship with a comprehensive lifetime warranty covering manufacturing defects and mechanical failures. Your investment is protected.",
    icon: "🛡️",
    stat: "Forever",
    statLabel: "Coverage",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 20%",
        end: "bottom 20%",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 100,
      });

      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "bottom 30%",
          end: "bottom 10%",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.95,
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        ref={cardRef}
        className="w-full max-w-4xl mx-auto px-6"
        style={{
          zIndex: 10 - index,
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-cream-300">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 text-6xl">{feature.icon}</div>

            <div className="flex-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-charcoal-950 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-charcoal-700 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="inline-flex items-baseline gap-2 px-6 py-3 bg-bronze-500/10 rounded-full border border-bronze-500/20">
                <span className="font-display text-3xl font-bold text-bronze-500">
                  {feature.stat}
                </span>
                <span className="text-sm text-charcoal-600 uppercase tracking-wider">
                  {feature.statLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-cream-50 to-cream-200 py-24"
    >
      <div ref={headerRef} className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
          Uncompromising Quality
        </h2>
        <p className="text-xl text-charcoal-700">
          Every element meticulously crafted to exceed expectations
        </p>
      </div>

      {features.map((feature, index) => (
        <FeatureCard key={feature.title} feature={feature} index={index} />
      ))}

      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 mb-6">
            Experience True Craftsmanship
          </h3>
          <p className="text-xl text-charcoal-700 mb-8">
            Visit our atelier or schedule a private viewing to discover the
            Signature Collection in person.
          </p>
          <button className="px-10 py-5 bg-charcoal-950 text-cream-50 font-medium text-lg rounded-full hover:bg-charcoal-900 transition-colors duration-300 shadow-xl hover:shadow-2xl">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
