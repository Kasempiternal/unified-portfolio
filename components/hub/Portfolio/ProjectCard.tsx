'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import type { Project } from '@lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
      }
    );
  }, [index]);

  useEffect(() => {
    if (!imageRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(imageRef.current, {
        rotateY: x * 10,
        rotateX: -y * 10,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      gsap.to(imageRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]"
      style={{ perspective: '1000px' }}
    >
      {/* Screenshot with 3D effect */}
      <div
        ref={imageRef}
        className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Color accent overlay */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${project.color}, transparent)`,
          }}
        />

        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

        {/* Screenshot image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
          <div className="relative w-full h-full flex items-center justify-center text-gray-500 font-mono text-sm">
            [Live Preview]
          </div>
        </div>

        {/* Hover overlay with quick actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link
            href={project.url}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-110"
          >
            View Live
          </Link>
          <Link
            href={project.url}
            className="px-4 py-2 glass hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-110"
          >
            Preview
          </Link>
        </div>

        {/* Featured badge */}
        {project.isFeatured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-white group-hover:text-gradient transition-colors">
              {project.name}
            </h3>
            <div
              className="w-3 h-3 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
              style={{ backgroundColor: project.color }}
            />
          </div>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{project.tagline}</p>
        </div>

        {/* Description - truncated */}
        <p className="text-xs text-gray-500 line-clamp-2">
          {project.description}
        </p>

        {/* Category Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10 group-hover:border-primary/30 transition-colors">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Performance metrics */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
          <div className="text-center">
            <div className="text-xs text-gray-500">Performance</div>
            <div className="text-sm font-bold text-green-400">95+</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Mobile</div>
            <div className="text-sm font-bold text-green-400">100%</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">A11y</div>
            <div className="text-sm font-bold text-green-400">AA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
