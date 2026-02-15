'use client'

export function MarqueeText() {
  const text = 'BOLD DESIGN \u2022 BRAVE IDEAS \u2022 '

  return (
    <div className="overflow-hidden bg-primary text-white py-6 border-y-3 border-black">
      <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="font-black text-4xl md:text-6xl mx-8">
            {text}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  )
}
