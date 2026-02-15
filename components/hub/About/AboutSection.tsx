'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.fade-in');
            if (elements) {
              gsap.fromTo(
                elements,
                {
                  opacity: 0,
                  y: 30,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: 'power2.out',
                }
              );
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Next.js', level: 98 },
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 92 },
    { name: 'GSAP', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Three.js', level: 85 },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
              About <span className="text-gradient">Fisko AI</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate about creating exceptional web experiences that push the boundaries of design and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="space-y-6 fade-in">
              <div className="glass rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-display font-bold text-white">
                  Crafting Digital Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Specializing in award-worthy portfolio sites that combine cutting-edge technologies
                  with exceptional design. Every project is built with performance, accessibility,
                  and user experience at its core.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From neo-brutalist agency sites to immersive WebGL experiences, each portfolio
                  showcases a unique approach to modern web development. All sites achieve 95+
                  performance scores and WCAG AA accessibility standards.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">7</div>
                    <div className="text-xs text-gray-400 mt-1">Live Sites</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">95+</div>
                    <div className="text-xs text-gray-400 mt-1">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">100%</div>
                    <div className="text-xs text-gray-400 mt-1">Responsive</div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="glass rounded-2xl p-6 space-y-4 fade-in">
                <h4 className="text-xl font-display font-bold text-white">
                  Ready to work together?
                </h4>
                <p className="text-gray-400 text-sm">
                  Available for freelance projects on Fiverr. Let&apos;s create something exceptional!
                </p>
                <a
                  href="https://www.fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold transition-all duration-300 hover:scale-105 glow"
                >
                  <span>Hire on Fiverr</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right column - Skills */}
            <div className="space-y-6 fade-in">
              <div className="glass rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-display font-bold text-white">
                  Technical Expertise
                </h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-primary text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications/Highlights */}
              <div className="glass rounded-2xl p-6 space-y-4 fade-in">
                <h4 className="text-lg font-display font-bold text-white">Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-accent text-lg">✓</span>
                    <span>Award-worthy design quality</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-accent text-lg">✓</span>
                    <span>Production-ready code</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-accent text-lg">✓</span>
                    <span>Performance optimized</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-accent text-lg">✓</span>
                    <span>Fully responsive & accessible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
