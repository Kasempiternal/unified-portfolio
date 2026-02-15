import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CSS variable-based theming (set per-route via data-site)
        background: 'var(--site-bg, #0f172a)',
        foreground: 'var(--site-fg, #f8fafc)',
        primary: 'var(--site-primary, #6366f1)',
        secondary: 'var(--site-secondary, #8b5cf6)',
        accent: 'var(--site-accent, #06b6d4)',
        muted: 'var(--site-muted, #94a3b8)',

        // Agency
        'agency-primary': '#2563eb',
        'agency-accent': '#ff6b6b',
        // Creative-dev
        'creative-gray-dark': '#1a1a1a',
        'creative-gray-light': '#e5e5e5',
        // Product-page
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#f9f0db',
          300: '#f4e4be',
          400: '#edd49a',
          500: '#e5c072',
          DEFAULT: '#fdf9f0',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#444444',
          600: '#333333',
          700: '#2a2a2a',
          800: '#1f1f1f',
          900: '#141414',
          950: '#0a0a0a',
          DEFAULT: '#1f1f1f',
        },
        bronze: {
          50: '#f9f3ed',
          400: '#cd7f32',
          500: '#b8721a',
          DEFAULT: '#cd7f32',
        },
        // Restaurant
        burgundy: {
          DEFAULT: '#722f37',
          dark: '#5a252c',
          light: '#8a3941',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e0c068',
          dark: '#b8941f',
        },
        // Startup
        'startup-accent': '#a855f7',
        'startup-accent-secondary': '#ec4899',
        // Hub
        'hub-primary': '#6366f1',
        'hub-secondary': '#8b5cf6',
        'hub-accent': '#06b6d4',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
        // Site-specific font families
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        bebas: ['var(--font-bebas-neue)', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
        instrument: ['var(--font-instrument-sans)', 'sans-serif'],
      },
      fontSize: {
        'display-lg': [
          'clamp(4rem, 8vw + 1rem, 10rem)',
          { lineHeight: '0.9', letterSpacing: '-0.02em' },
        ],
        'display-md': [
          'clamp(3rem, 5vw + 1rem, 6rem)',
          { lineHeight: '0.95', letterSpacing: '-0.02em' },
        ],
        'display-sm': [
          'clamp(2rem, 3vw + 1rem, 4rem)',
          { lineHeight: '1', letterSpacing: '-0.01em' },
        ],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-xl': '8px 8px 0px 0px #000000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cursor-pulse': 'cursor-pulse 2s ease-in-out infinite',
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'cursor-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2)', opacity: '0.4' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
