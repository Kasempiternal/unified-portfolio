'use client'

import { Container } from '@components/shared'
import { WorkCard } from './WorkCard'
import { projects } from '@data/agency/work'

export function WorkGrid() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12">
          <h2 className="font-black text-5xl mb-4">Selected Work</h2>
          <p className="text-xl text-gray-600">Projects that made some noise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <WorkCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              category={project.category}
              year={project.year}
              color={project.color}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
