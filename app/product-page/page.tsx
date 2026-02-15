"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import ProductHero from "@components/product-page/Hero/ProductHero";
import FeatureSection from "@components/product-page/Features/FeatureSection";
import SpecsSection from "@components/product-page/Specifications/SpecsSection";
import ProductGallery from "@components/product-page/Gallery/ProductGallery";
import ReviewsSection from "@components/product-page/Testimonials/ReviewsSection";
import ComparisonTable from "@components/product-page/Comparison/ComparisonTable";

const ProductViewer = dynamic(
  () => import("@components/product-page/Product3D/ProductViewer"),
  { ssr: false }
);

export default function ProductPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ProductHero />

      <section className="relative h-screen" id="product-viewer">
        <ProductViewer />
      </section>

      <FeatureSection />
      <SpecsSection />
      <ProductGallery />
      <ReviewsSection />
      <ComparisonTable />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-bronze-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Own a Piece of Timeless Craftsmanship
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the perfect fusion of Swiss precision and timeless design.
            Limited quantities available.
          </p>
          <button className="px-12 py-5 bg-white text-charcoal-950 font-display font-semibold text-lg rounded-full hover:bg-cream-100 transition-colors duration-300 shadow-xl">
            Reserve Your Watch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-950 text-cream-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4">
                Timepiece Atelier
              </h3>
              <p className="text-cream-300 mb-6">
                Crafting exceptional timepieces since 1987. Each watch is a
                testament to precision engineering and timeless design.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-cream-300">
                <li>Heritage Series</li>
                <li>Modern Classics</li>
                <li>Limited Editions</li>
                <li>Custom Designs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-cream-300">
                <li>Geneva, Switzerland</li>
                <li>+41 22 123 4567</li>
                <li>atelier@timepiece.ch</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-charcoal-800 text-center text-cream-400 text-sm">
            &copy; 2024 Timepiece Atelier. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
