import Link from 'next/link'
import VideoHero from '@components/restaurant/Hero/VideoHero'
import ReservationCTA from '@components/restaurant/Reservations/ReservationCTA'
import LocationSection from '@components/restaurant/Location/LocationSection'

export default function RestaurantPage() {
  return (
    <>
      <VideoHero />

      {/* Welcome Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-burgundy mb-6">
              Welcome to La Maison Rouge
            </h2>
            <div className="divider"></div>
            <div className="space-y-6 text-lg text-burgundy/80 leading-relaxed">
              <p>
                For over a decade, La Maison Rouge has been San Francisco&apos;s
                premier destination for exquisite French-inspired cuisine. Our
                passion for culinary excellence is matched only by our commitment
                to providing an unforgettable dining experience.
              </p>
              <p>
                Each dish is carefully crafted using the finest seasonal
                ingredients, sourced from local farms and trusted purveyors. Our
                award-winning chef combines classical French techniques with
                modern innovation to create dishes that delight the senses.
              </p>
              <p className="text-gold-accent text-xl">
                &ldquo;A symphony of flavors in an atmosphere of timeless
                elegance.&rdquo;
              </p>
            </div>
            <div className="mt-12">
              <Link href="/restaurant/menu" className="btn-primary">
                Explore Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-burgundy text-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Award-Winning Chef
              </h3>
              <p className="text-cream/80">
                Our Michelin-trained chef brings decades of expertise and passion
                to every dish.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Premium Ingredients
              </h3>
              <p className="text-cream/80">
                Locally sourced, seasonal ingredients from the finest farms and
                purveyors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Elegant Atmosphere
              </h3>
              <p className="text-cream/80">
                An intimate setting perfect for romantic dinners and special
                celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReservationCTA />
      <LocationSection />
    </>
  )
}
