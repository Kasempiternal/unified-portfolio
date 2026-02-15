'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { projects } from '@data/creative-dev/projects'

const ProjectItem = dynamic(
  () => import('@components/creative-dev/ProjectGrid/ProjectItem'),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[4/3] bg-creative-gray-dark animate-pulse" />
    ),
  }
)

export default function ProjectGrid() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'j' || e.key === 'J') {
        setSelectedIndex((prev) => (prev + 1) % projects.length)
      } else if (e.key === 'k' || e.key === 'K') {
        setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const element = document.getElementById(`project-${selectedIndex}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [selectedIndex])

  return (
    <section>
      <div className="mb-12">
        <h2 className="font-bebas text-display-sm mb-4">Selected Work</h2>
        <p className="text-sm text-creative-gray-light">
          Navigate with{' '}
          <kbd className="px-2 py-1 bg-white/10 rounded text-white">J</kbd> /{' '}
          <kbd className="px-2 py-1 bg-white/10 rounded text-white">K</kbd>{' '}
          keys
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            isSelected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
