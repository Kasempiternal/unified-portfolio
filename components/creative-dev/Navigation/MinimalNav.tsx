'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function MinimalNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="px-6 md:px-12 py-6 flex justify-between items-center">
        <Link href="/creative-dev" className="font-bebas text-2xl tracking-wide">
          CD
        </Link>

        <div className="flex gap-8 items-center">
          <Link
            href="/creative-dev"
            className="text-sm hover:text-creative-gray-light transition-colors"
          >
            Work
          </Link>
          <Link
            href="/creative-dev/about"
            className="text-sm hover:text-creative-gray-light transition-colors"
          >
            About
          </Link>
          <a
            href="mailto:hello@example.com"
            className="text-sm hover:text-creative-gray-light transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
