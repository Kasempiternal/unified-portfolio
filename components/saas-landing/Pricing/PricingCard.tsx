'use client'

import { Button } from '@components/shared'
import { cn } from '@lib/utils'

interface PricingCardProps {
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export function PricingCard({ name, price, period, features, highlighted }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative p-8 rounded-2xl border',
        highlighted
          ? 'border-[--site-accent] bg-gradient-to-b from-[--site-accent]/10 to-transparent scale-105'
          : 'border-gray-800 bg-gray-900/50'
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--site-accent] text-black px-4 py-1 rounded-full text-sm font-bold">
          Recommended
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <span className="text-[--site-accent]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          'w-full',
          highlighted
            ? 'bg-[--site-accent] text-black hover:bg-[--site-accent]/90'
            : 'bg-gray-800 hover:bg-gray-700'
        )}
      >
        Get Started
      </Button>
    </div>
  )
}
