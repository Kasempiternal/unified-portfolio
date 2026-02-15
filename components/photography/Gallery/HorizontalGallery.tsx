"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "@data/photography/gallery";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper) return;

    const scrollWidth = wrapper.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(wrapper, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((item) => {
      const img = item.querySelector(".gallery-image");
      if (!img) return;

      gsap.to(img, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          containerAnimation: scrollTween,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: item,
          containerAnimation: scrollTween,
          start: "left 80%",
          end: "left 50%",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative">
      <div ref={wrapperRef} className="flex gap-8 py-24 px-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item flex-shrink-0 group cursor-pointer"
            style={{
              width: `${(image.width / image.height) * 600}px`,
              maxWidth: "600px",
            }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={image.url}
                alt={image.title}
                width={image.width}
                height={image.height}
                className="gallery-image w-full h-auto transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                  `<svg width="${image.width}" height="${image.height}" xmlns="http://www.w3.org/2000/svg"><rect width="${image.width}" height="${image.height}" fill="${image.color}"/></svg>`
                ).toString('base64')}`}
              />
            </div>

            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-light tracking-tight mb-1">
                {image.title}
              </h3>
              <p className="text-sm font-light tracking-wide text-black/60 uppercase">
                {image.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-sm font-light tracking-wide text-black/40">
        <span>Scroll</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </section>
  );
}
