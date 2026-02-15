'use client'

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[--site-accent]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
        style={{ animationDelay: '4s' }}
      />
    </div>
  )
}
