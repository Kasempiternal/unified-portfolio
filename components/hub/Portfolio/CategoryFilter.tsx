'use client';

import { CATEGORIES } from '@data/hub/constants';
import type { CategoryId } from '@data/hub/constants';

interface CategoryFilterProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-primary text-white scale-105 glow'
              : 'glass text-gray-300 hover:bg-white/10 hover:scale-105'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
