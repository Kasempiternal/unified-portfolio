'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import type { Project } from '@lib/projects';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export default function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power2.out',
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.01]"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />

      <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
        {/* Screenshot - larger on featured */}
        <div className="md:col-span-3 relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 group-hover:shadow-2xl transition-shadow duration-500">
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${project.color}, transparent)`,
            }}
          />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-sm">
            [Featured Live Preview]
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light backdrop-blur-sm text-white text-xs font-bold border border-white/20 shadow-lg">
            ⭐ Featured Project
          </div>

          {/* Performance badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg glass text-white text-xs font-semibold">
            <span className="text-green-400">●</span> Live
          </div>

          {/* Hover actions */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Link
              href={project.url}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
            >
              Open Live Site
            </Link>
            <Link
              href={project.url}
              className="px-6 py-3 glass hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110"
            >
              Quick Preview
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full ring-2 ring-white/30"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white group-hover:text-gradient transition-colors leading-tight">
              {project.name}
            </h3>
            <p className="text-lg md:text-xl text-primary font-semibold">{project.tagline}</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.description}</p>

          {/* Features with icons */}
          <ul className="space-y-3">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-gray-400 group/item hover:text-gray-300 transition-colors">
                <span className="text-accent text-lg mt-0.5 group-hover/item:scale-125 transition-transform">✓</span>
                <span className="flex-1">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack with better styling */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 font-semibold hover:bg-primary/20 hover:border-primary/40 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Performance metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 glass rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">95+</div>
              <div className="text-xs text-gray-400 mt-1">Performance</div>
            </div>
            <div className="text-center border-l border-r border-white/10">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-xs text-gray-400 mt-1">Mobile</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">AA</div>
              <div className="text-xs text-gray-400 mt-1">Accessible</div>
            </div>
          </div>

          {/* CTA with better design */}
          <Link
            href={project.url}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold transition-all duration-300 hover:scale-105 glow shadow-xl"
          >
            <span>View Live Project</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
