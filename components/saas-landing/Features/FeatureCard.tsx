'use client'

import { cn } from '@lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  className?: string
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm',
        'hover:border-[--site-accent]/50 transition-all duration-300',
        'hover:shadow-xl hover:shadow-[--site-accent]/10',
        className
      )}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[--site-accent]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
