'use client';

import { useState } from 'react';
import { PROJECTS, getFeaturedProjects, getProjectsByCategory } from '@lib/projects';
import type { CategoryId } from '@data/hub/constants';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import FeaturedProject from './FeaturedProject';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const featuredProjects = getFeaturedProjects();
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <section id="portfolio" className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
            Portfolio <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore 7 production-ready portfolio sites built with modern technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-accent">⭐</span> Featured Projects
          </h3>
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
