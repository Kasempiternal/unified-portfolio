'use client'

export function NoiseOverlay() {
  return (
    <>
      <svg className="fixed pointer-events-none" style={{ width: 0, height: 0 }}>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feBlend mode="screen" />
        </filter>
      </svg>
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05]"
        style={{ filter: 'url(#noise)' }}
      />
    </>
  )
}
