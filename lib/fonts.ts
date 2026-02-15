import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Plus_Jakarta_Sans,
  Bebas_Neue,
  Cormorant_Garamond,
  Playfair_Display,
  Lato,
  Inter,
  Outfit,
  JetBrains_Mono,
  Space_Grotesk,
} from 'next/font/google'

// --- SaaS Landing & Startup Landing ---
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// --- Agency ---
export const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

// --- Creative Dev ---
export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

// --- Photography ---
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

// --- Restaurant ---
export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
})

// --- Fisko Hub & Product Page ---
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// --- Product Page ---
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

// All font instances for easy iteration in layout
export const allFonts = [
  geistSans,
  geistMono,
  instrumentSans,
  jakarta,
  bebasNeue,
  cormorant,
  playfair,
  lato,
  inter,
  outfit,
  jetbrainsMono,
  spaceGrotesk,
]
