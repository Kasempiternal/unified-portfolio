import React from 'react';
import type { MenuCategory } from '@data/restaurant/types';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section className="mb-20 last:mb-0">
      <div className="text-center mb-12">
        <h3 className="heading-md text-burgundy mb-4">{category.name}</h3>
        <div className="divider"></div>
        <p className="text-lg text-burgundy/70 font-serif italic max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="border-b border-gold/20 pb-8 last:border-b-0 last:pb-0"
          >
            <MenuItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
