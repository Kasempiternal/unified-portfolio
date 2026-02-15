import type { CategoryId } from '@data/hub/constants';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: CategoryId;
  url: string;
  screenshot: string;
  color: string;
  techStack: string[];
  features: string[];
  isFeatured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'agency',
    name: 'Neo-brutalist Agency',
    tagline: 'Bold design meets modern web',
    description: 'A striking agency portfolio featuring neo-brutalist design principles with sharp edges, bold typography, and vibrant blue accents. Built with Next.js and GSAP for smooth scroll-triggered animations.',
    category: 'agency',
    url: '/agency',
    screenshot: '/screenshots/agency.jpg',
    color: '#2563eb',
    techStack: ['Next.js', 'GSAP', 'Tailwind CSS', 'Lenis'],
    features: [
      'Neo-brutalist design system',
      'Scroll-triggered animations',
      'Smooth page transitions',
      'Interactive service cards',
    ],
    isFeatured: true,
  },
  {
    id: 'saas-landing',
    name: 'SaaS Landing Page',
    tagline: 'Dark elegance for modern SaaS',
    description: 'A sophisticated dark-themed SaaS landing page with animated gradient backgrounds, floating orbs, and smooth animations. Features pricing tiers, feature showcases, and conversion-optimized CTAs.',
    category: 'saas',
    url: '/saas-landing',
    screenshot: '/screenshots/saas-landing.jpg',
    color: '#00d9ff',
    techStack: ['Next.js', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Animated gradient backgrounds',
      'Interactive pricing cards',
      'Smooth scroll effects',
      'Conversion-focused design',
    ],
    isFeatured: true,
  },
  {
    id: 'creative-dev',
    name: 'Creative Developer Portfolio',
    tagline: 'WebGL-powered monochrome masterpiece',
    description: 'An artistic developer portfolio featuring WebGL animations, particle effects, and a minimalist monochrome design. Showcases creative coding skills with interactive 3D elements and fluid transitions.',
    category: 'creative',
    url: '/creative-dev',
    screenshot: '/screenshots/creative-dev.jpg',
    color: '#ffffff',
    techStack: ['Next.js', 'React Three Fiber', 'WebGL', 'GSAP'],
    features: [
      'WebGL particle system',
      '3D interactive elements',
      'Monochrome aesthetic',
      'Creative code showcase',
    ],
    isFeatured: true,
  },
  {
    id: 'photography',
    name: 'Photography Portfolio',
    tagline: 'Minimal design, maximum impact',
    description: 'A clean, minimal photography portfolio with full-bleed imagery and elegant transitions. Optimized image loading with Next.js Image component and smooth gallery interactions.',
    category: 'photography',
    url: '/photography',
    screenshot: '/screenshots/photography.jpg',
    color: '#1f1f1f',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    features: [
      'Full-bleed imagery',
      'Optimized image loading',
      'Smooth gallery transitions',
      'Mobile-first design',
    ],
    isFeatured: false,
  },
  {
    id: 'product-page',
    name: 'Product Page',
    tagline: '3D product visualization',
    description: 'An immersive product page featuring an interactive 3D viewer with React Three Fiber. Users can rotate, zoom, and explore products in detail with realistic lighting and materials.',
    category: 'ecommerce',
    url: '/product-page',
    screenshot: '/screenshots/product-page.jpg',
    color: '#8b7355',
    techStack: ['Next.js', 'React Three Fiber', 'Three.js', 'GSAP'],
    features: [
      'Interactive 3D viewer',
      '360° product rotation',
      'Realistic materials',
      'E-commerce integration ready',
    ],
    isFeatured: false,
  },
  {
    id: 'restaurant',
    name: 'Restaurant Website',
    tagline: 'Elegant dining experience online',
    description: 'A sophisticated restaurant website with burgundy and cream color palette. Features menu showcase, reservation system, and elegant animations that reflect fine dining atmosphere.',
    category: 'restaurant',
    url: '/restaurant',
    screenshot: '/screenshots/restaurant.jpg',
    color: '#8b1538',
    techStack: ['Next.js', 'GSAP', 'Tailwind CSS', 'Lenis'],
    features: [
      'Menu showcase',
      'Reservation interface',
      'Elegant animations',
      'Mobile-optimized',
    ],
    isFeatured: false,
  },
  {
    id: 'startup-landing',
    name: 'Startup Landing Page',
    tagline: 'Gradient-rich modern startup site',
    description: 'A vibrant startup landing page with gradient backgrounds, animated elements, and modern design patterns. Perfect for tech startups looking to make a bold first impression.',
    category: 'startup',
    url: '/startup-landing',
    screenshot: '/screenshots/startup-landing.jpg',
    color: '#6366f1',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    features: [
      'Vibrant gradients',
      'Animated hero section',
      'Feature showcases',
      'CTA optimization',
    ],
    isFeatured: false,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.isFeatured);
};

export const getProjectsByCategory = (category: CategoryId): Project[] => {
  if (category === 'all') return PROJECTS;
  return PROJECTS.filter((project) => project.category === category);
};
