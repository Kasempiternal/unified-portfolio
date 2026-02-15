import { notFound } from 'next/navigation'
import { projects } from '@data/agency/work'
import { ProjectHero } from '@components/agency/ProjectDetail/ProjectHero'
import { ProjectGallery } from '@components/agency/ProjectDetail/ProjectGallery'
import { ProjectInfo } from '@components/agency/ProjectDetail/ProjectInfo'
import { NextProject } from '@components/agency/ProjectDetail/NextProject'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Agency Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main>
      <ProjectHero
        title={project.title}
        category={project.category}
        year={project.year}
        description={project.description}
        color={project.color}
      />

      <ProjectGallery mockupColors={project.mockupColors} title={project.title} />

      <ProjectInfo
        challenge={project.challenge}
        solution={project.solution}
        results={project.results}
        technologies={project.technologies}
      />

      <NextProject
        title={nextProject.title}
        slug={nextProject.slug}
        category={nextProject.category}
        color={nextProject.color}
      />
    </main>
  )
}
