import PhotoHero from '@components/photography/Hero/PhotoHero'
import HorizontalGallery from '@components/photography/Gallery/HorizontalGallery'
import ServicesSection from '@components/photography/Services/ServicesSection'
import TestimonialsSection from '@components/photography/Testimonials/TestimonialsSection'
import ContactSection from '@components/photography/Contact/ContactSection'
import Link from 'next/link'

export default function PhotographyPage() {
  return (
    <main className="min-h-screen">
      <PhotoHero />
      <HorizontalGallery />
      <ServicesSection />

      {/* About Preview */}
      <section className="py-24 px-6 bg-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            About Elena
          </h2>
          <p className="text-lg font-light text-black/70 leading-relaxed mb-8">
            With over a decade of experience in fine art and commercial photography,
            Elena Voss has developed a distinctive visual language that combines
            technical precision with emotional depth. Her work has been featured in
            leading publications and exhibited internationally.
          </p>
          <Link
            href="/photography/about"
            className="inline-block px-8 py-3 border border-black text-black font-light tracking-wider uppercase hover:bg-black hover:text-white transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>

      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-black/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-light tracking-wide text-black/60">
            &copy; 2024 Elena Voss. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light tracking-wide text-black/60 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@elenavoss.com"
              className="text-sm font-light tracking-wide text-black/60 hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
