import Link from 'next/link'
import { menuData } from '@data/restaurant/menu'
import MenuSection from '@components/restaurant/Menu/MenuSection'

export const metadata = {
  title: 'Menu | La Maison Rouge',
  description:
    'Explore our exquisite menu featuring French-inspired appetizers, main courses, and desserts.',
}

export default function MenuPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Menu Hero */}
      <section className="relative bg-gradient-to-br from-burgundy to-burgundy-dark text-cream py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">
                Our Menu
              </span>
              <div className="w-12 h-px bg-gold"></div>
            </div>
            <h1 className="heading-xl mb-6">Culinary Excellence</h1>
            <p className="text-xl text-cream/90 leading-relaxed max-w-2xl mx-auto">
              Indulge in our carefully curated selection of dishes, each prepared
              with artistry and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-20">
            {menuData.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </div>

          {/* Dietary Information */}
          <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-gold/20">
            <div className="bg-burgundy/5 rounded-lg p-8 border border-burgundy/10">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6 text-center">
                Dietary Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-burgundy/80">
                <div>
                  <p className="mb-4">
                    We are committed to accommodating dietary restrictions and
                    preferences. Please inform your server of any allergies or
                    special requirements.
                  </p>
                  <p>
                    <span className="text-gold-accent font-semibold">
                      Vegetarian
                    </span>{' '}
                    options are marked and can be prepared upon request for most
                    dishes.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    <span className="text-gold-accent font-semibold">
                      Gluten-free
                    </span>{' '}
                    preparations are available for many menu items.
                  </p>
                  <p>
                    Our chefs are happy to modify dishes to meet your dietary
                    needs whenever possible. Please don&apos;t hesitate to ask.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-serif font-semibold text-burgundy mb-6">
              Ready to Experience Excellence?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#reservations" className="btn-primary">
                Make a Reservation
              </a>
              <Link href="/restaurant" className="btn-secondary">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
