'use client'

import { Container } from '@components/shared'
import { logos } from './logos'

export function LogoCarousel() {
  return (
    <section className="py-20 border-y border-gray-900">
      <Container>
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-12">
          Trusted by industry leaders
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: logo.width }}
              >
                <div className="text-gray-600 font-bold text-xl whitespace-nowrap">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
