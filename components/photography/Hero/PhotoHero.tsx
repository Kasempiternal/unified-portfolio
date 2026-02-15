"use client";

import Image from "next/image";

export default function PhotoHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2000&h=1200&fit=crop"
          alt="Elena Voss Photography"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIxMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiMyYTJhMmEiLz48L3N2Zz4="
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4 text-white drop-shadow-2xl">
          Elena Voss
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-widest uppercase text-white/90 drop-shadow-lg">
          Photography
        </p>
        <div className="mt-8">
          <p className="text-base md:text-lg font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
            Capturing moments that transcend time through the art of light and composition
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-sm font-light tracking-wide">Scroll</span>
        <svg
          className="w-4 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
