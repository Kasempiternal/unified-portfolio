'use client'

import Link from 'next/link'

interface WorkCardProps {
  slug: string
  title: string
  category: string
  year: string
  color: string
}

export function WorkCard({ slug, title, category, year, color }: WorkCardProps) {
  return (
    <Link href={`/agency/work/${slug}`}>
      <div className="group relative overflow-hidden border-3 border-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
        <div
          className="aspect-[4/3] relative"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white font-black text-3xl mb-2">{title}</h3>
              <p className="text-white/80 text-sm uppercase tracking-wider">
                {category} &bull; {year}
              </p>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 border-2 border-black text-xs font-bold uppercase">
            {category}
          </div>
        </div>

        <div className="bg-white p-6 border-t-3 border-black">
          <h3 className="font-black text-xl mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{year}</p>
        </div>
      </div>
    </Link>
  )
}
