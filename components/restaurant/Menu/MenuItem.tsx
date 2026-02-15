import React from 'react';
import type { MenuItem as MenuItemType } from '@data/restaurant/types';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h4 className="text-xl font-serif font-semibold text-burgundy group-hover:text-gold transition-colors">
            {item.name}
          </h4>
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex gap-2 mt-1">
              {item.dietary.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wide text-gold-accent font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          <span className="text-lg font-serif font-semibold text-gold">
            {item.price}
          </span>
        </div>
      </div>
      <p className="text-burgundy/70 leading-relaxed font-sans">
        {item.description}
      </p>
    </div>
  );
}
