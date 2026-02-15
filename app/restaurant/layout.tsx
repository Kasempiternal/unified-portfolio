import type { Metadata } from 'next'
import Link from 'next/link'
import './restaurant-globals.css'

export const metadata: Metadata = {
  title: 'La Maison Rouge | Fine Dining Experience',
  description:
    'Experience exquisite cuisine in an elegant atmosphere. Reservations available for lunch and dinner.',
  keywords: [
    'fine dining',
    'restaurant',
    'French cuisine',
    'reservations',
    'elegant dining',
  ],
}

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-site="restaurant"
      className="min-h-screen font-lato antialiased"
      style={
        {
          '--site-bg': '#f5f5dc',
          '--site-fg': '#722f37',
          '--site-accent': '#d4af37',
          backgroundColor: '#f5f5dc',
          color: '#722f37',
        } as React.CSSProperties
      }
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-burgundy/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/restaurant"
              className="text-2xl md:text-3xl font-serif font-bold text-cream"
            >
              La Maison Rouge
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/restaurant"
                className="text-cream hover:text-gold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/restaurant/menu"
                className="text-cream hover:text-gold transition-colors"
              >
                Menu
              </Link>
              <a
                href="#reservations"
                className="text-cream hover:text-gold transition-colors"
              >
                Reservations
              </a>
              <a
                href="#location"
                className="text-cream hover:text-gold transition-colors"
              >
                Location
              </a>
            </div>
            <a
              href="#reservations"
              className="hidden md:block btn-secondary !text-cream !border-cream hover:!bg-cream hover:!text-burgundy !py-2"
            >
              Reserve
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">{children}</main>

      <footer className="bg-burgundy text-cream section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                La Maison Rouge
              </h3>
              <p className="text-cream/80 leading-relaxed">
                Experience the finest in French-inspired cuisine, crafted with
                passion and served with elegance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-semibold mb-4">Hours</h4>
              <div className="space-y-2 text-cream/80">
                <p>Tuesday - Thursday: 5:00 PM - 10:00 PM</p>
                <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                <p>Sunday: 4:00 PM - 9:00 PM</p>
                <p className="text-gold-accent">Closed Mondays</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-serif font-semibold mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-cream/80">
                <p>123 Culinary Boulevard</p>
                <p>San Francisco, CA 94102</p>
                <p className="mt-4">(415) 555-0123</p>
                <p>info@lamaisonrouge.com</p>
              </div>
            </div>
          </div>
          <div className="divider !bg-cream/20 !w-full"></div>
          <div className="text-center text-cream/60 text-sm">
            <p>
              &copy; {new Date().getFullYear()} La Maison Rouge. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
