export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas', label: 'SaaS' },
  { id: 'agency', label: 'Agency' },
  { id: 'creative', label: 'Creative' },
  { id: 'photography', label: 'Photography' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'startup', label: 'Startup' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];

export const TECH_STACK = [
  {
    name: 'Next.js 15',
    category: 'Framework',
    icon: '⚡',
    description: 'React framework for production',
  },
  {
    name: 'React 19',
    category: 'Framework',
    icon: '⚛️',
    description: 'UI component library',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: '📘',
    description: 'Type-safe JavaScript',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: '🎨',
    description: 'Utility-first CSS framework',
  },
  {
    name: 'GSAP',
    category: 'Animation',
    icon: '✨',
    description: 'Professional animation library',
  },
  {
    name: 'Lenis',
    category: 'Animation',
    icon: '🌊',
    description: 'Smooth scroll library',
  },
  {
    name: 'React Three Fiber',
    category: '3D',
    icon: '🎲',
    description: 'React renderer for Three.js',
  },
  {
    name: 'Framer Motion',
    category: 'Animation',
    icon: '🎭',
    description: 'React animation library',
  },
  {
    name: 'WebGL',
    category: '3D',
    icon: '🔮',
    description: 'Hardware-accelerated graphics',
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    icon: '▲',
    description: 'Deployment platform',
  },
] as const;
