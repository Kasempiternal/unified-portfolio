'use client'

import Link from 'next/link'
import { Container } from '@components/shared'

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b-3 border-black py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/agency" className="font-black text-2xl hover:text-primary transition-colors">
            BOLD
          </Link>

          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/agency/work"
                className="font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/agency#about"
                className="font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/agency#contact"
                className="font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/agency#contact"
                className="bg-primary text-white font-bold px-6 py-2 border-3 border-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-sm"
              >
                Hire Us
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
