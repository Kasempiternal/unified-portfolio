/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
            About
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-black/70">
            Capturing moments of stillness in a world of constant motion.
          </p>
        </div>
      </section>

      {/* Editorial Layout */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Philosophy
              </h2>
              <p className="text-lg font-light leading-relaxed text-black/70 mb-4">
                My work explores the intersection of light, space, and emotion.
                Each photograph is an invitation to pause and observe the subtle
                beauty that exists in our everyday surroundings.
              </p>
              <p className="text-lg font-light leading-relaxed text-black/70">
                Through minimalist composition and careful attention to natural
                light, I seek to create images that resonate with quiet power
                and timeless elegance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-tight mb-4">
                Background
              </h3>
              <p className="text-base font-light leading-relaxed text-black/70 mb-4">
                Based between New York and Copenhagen, I work with editorial
                clients, luxury brands, and private collectors. My photographs
                have been featured in publications including Kinfolk, Cereal,
                and The Spaces.
              </p>
              <p className="text-base font-light leading-relaxed text-black/70 mb-4">
                I studied Fine Art Photography at the Royal Danish Academy of Fine Arts
                before moving to New York to assist renowned photographers Annie Leibovitz
                and Ryan McGinley. This formative experience shaped my approach to both
                commercial and fine art work.
              </p>
              <p className="text-base font-light leading-relaxed text-black/70">
                My personal projects explore themes of solitude, architecture, and the
                relationship between humans and their environments. I&apos;m particularly drawn
                to transitional spaces—airports, train stations, empty streets at dawn.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-tight mb-4">
                Equipment
              </h3>
              <ul className="space-y-2 text-base font-light text-black/70">
                <li>Phase One XF IQ4 150MP</li>
                <li>Hasselblad 907X 50C</li>
                <li>Leica M11 with Summilux lenses</li>
                <li>Sony a7R V for travel work</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-tight mb-4">
                Recognition
              </h3>
              <ul className="space-y-2 text-base font-light text-black/70">
                <li>International Photography Awards, 2023</li>
                <li>Sony World Photography Awards, 2022</li>
                <li>LensCulture Emerging Talent, 2021</li>
                <li>Hasselblad Masters Finalist, 2020</li>
                <li>Prix de la Photographie Paris, 2019</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="w-full aspect-[3/4] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&h=1333&fit=crop"
                alt="Portrait of Elena Voss"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMzMzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEzMzMiIGZpbGw9IiNkNmQ2ZDYiLz48L3N2Zz4="
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light tracking-tight">
                Available for
              </h3>
              <ul className="space-y-2 text-base font-light text-black/70">
                <li>Editorial Commissions</li>
                <li>Commercial Projects</li>
                <li>Private Sessions</li>
                <li>Print Sales</li>
              </ul>
              <a
                href="mailto:hello@elenavoss.com"
                className="inline-block mt-6 text-base font-light tracking-wide border-b border-black pb-1 hover:border-black/40 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-black/10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-2">8+</div>
              <div className="text-sm tracking-widest uppercase text-black/60">
                Years
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-2">50+</div>
              <div className="text-sm tracking-widest uppercase text-black/60">
                Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-2">200+</div>
              <div className="text-sm tracking-widest uppercase text-black/60">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-2">15+</div>
              <div className="text-sm tracking-widest uppercase text-black/60">
                Awards
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
