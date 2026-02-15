'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Project } from '@data/creative-dev/projects'
import { gsap } from 'gsap'
import WebGLDisplacement from './WebGLDisplacement'

interface ProjectItemProps {
  project: Project
  index: number
  isSelected: boolean
  onSelect: () => void
}

export default function ProjectItem({
  project,
  index,
  isSelected,
  onSelect,
}: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    if (isSelected) {
      gsap.to(contentRef.current, {
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out',
      })
    } else {
      gsap.to(contentRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
    }
  }, [isSelected])

  return (
    <div
      id={`project-${index}`}
      ref={containerRef}
      className="group cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true)
        onSelect()
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div
        ref={contentRef}
        className={`relative overflow-hidden transition-all duration-500 ${
          isSelected ? 'ring-2 ring-white/30' : ''
        }`}
      >
        {/* WebGL Canvas with Displacement */}
        <div className="relative aspect-[4/3] bg-creative-gray-dark">
          <Suspense
            fallback={<div className="w-full h-full bg-creative-gray-dark" />}
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              style={{ background: project.color }}
            >
              <WebGLDisplacement
                imageUrl={project.image}
                isHovered={isHovered}
                color={project.color}
              />
            </Canvas>
          </Suspense>

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="font-bebas text-4xl">View Project</span>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-bebas text-3xl md:text-4xl leading-none">
              {project.title}
            </h3>
            <span className="text-sm text-creative-gray-light whitespace-nowrap">
              {project.year}
            </span>
          </div>

          <p className="text-sm text-creative-gray-light mb-4">
            {project.category}
          </p>

          <p className="text-sm leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-white/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
