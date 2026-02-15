'use client';

import React from 'react';

export default function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy-dark to-burgundy">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-burgundy/40" />

      <div className="relative h-full flex items-center justify-center">
        <div className="container-custom text-center text-cream">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">
                Fine Dining
              </span>
              <div className="w-12 h-px bg-gold"></div>
            </div>

            <h1 className="heading-xl text-cream drop-shadow-lg">
              La Maison Rouge
            </h1>

            <p className="text-xl md:text-2xl font-serif text-cream/90 max-w-2xl mx-auto leading-relaxed">
              Where culinary artistry meets timeless elegance. Experience
              French-inspired cuisine crafted with passion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a href="#reservations" className="btn-primary">
                Make a Reservation
              </a>
              <a
                href="/restaurant/menu"
                className="btn-secondary !border-cream !text-cream hover:!bg-cream hover:!text-burgundy"
              >
                View Menu
              </a>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-cream/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
