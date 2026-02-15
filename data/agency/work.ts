export interface Project {
  slug: string
  title: string
  category: string
  year: string
  description: string
  color: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  mockupColors: string[]
}

export const projects: Project[] = [
  {
    slug: 'techflow-rebrand',
    title: 'TechFlow Rebrand',
    category: 'Branding',
    year: '2026',
    description: 'Complete visual identity redesign for a leading fintech startup',
    color: '#2563eb',
    challenge:
      'TechFlow was losing market share to competitors with more modern, approachable branding. Their existing identity felt corporate and dated, failing to connect with their millennial and Gen-Z target audience who value transparency and innovation in financial technology.',
    solution:
      'We created a bold, electric visual system centered around dynamic gradients and geometric patterns that evoke digital transactions and financial flow. The new brand voice is confident yet approachable, with a vibrant blue palette that stands out in the typically conservative fintech space. We designed a comprehensive brand book, UI kit, and marketing collateral system.',
    results: [
      '156% increase in brand recognition among target demographic',
      '43% improvement in user sign-up conversion rates',
      'Featured in 8 major design publications',
      '92% positive sentiment in social media brand mentions',
    ],
    technologies: ['Figma', 'Illustrator', 'After Effects', 'Brand Guidelines'],
    mockupColors: ['#2563eb', '#1e40af', '#60a5fa', '#93c5fd', '#dbeafe', '#eff6ff'],
  },
  {
    slug: 'urban-eats',
    title: 'Urban Eats',
    category: 'Web Design',
    year: '2026',
    description: 'Bold e-commerce platform for sustainable food delivery',
    color: '#ff6b6b',
    challenge:
      'Urban Eats needed to differentiate themselves in a crowded food delivery market. Standard platforms prioritize speed and convenience, but Urban Eats wanted to emphasize sustainability, local sourcing, and the human stories behind their partner restaurants.',
    solution:
      'We designed a vibrant, image-forward e-commerce experience with bold typography and energetic interactions. Large, appetizing food photography takes center stage, while custom illustrations highlight sustainability practices. The checkout flow integrates carbon footprint tracking and allows users to round up orders for local food banks.',
    results: [
      '89% increase in order completion rates',
      '2.3x longer average session duration',
      '67% of users engaged with sustainability features',
      'Average order value increased by $18.50',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Shopify API'],
    mockupColors: ['#ff6b6b', '#ff8787', '#fa5252', '#ffc9c9', '#fff5f5', '#c92a2a'],
  },
  {
    slug: 'momentum-app',
    title: 'Momentum App',
    category: 'Product Design',
    year: '2025',
    description: 'Fitness tracking app with gamification features',
    color: '#10b981',
    challenge:
      'Most fitness apps suffer from high abandonment rates after the first month. Users struggle with motivation and find traditional tracking interfaces boring and clinical. Momentum needed a fresh approach that would keep users engaged long-term without feeling overwhelming.',
    solution:
      'We reimagined fitness tracking as an adventure game, where workouts unlock achievements, virtual locations, and community challenges. The interface uses vibrant gradients and playful animations to celebrate every milestone. Social features allow friends to embark on fitness journeys together, creating accountability through shared goals.',
    results: [
      '71% of users still active after 6 months (industry avg: 19%)',
      '4.8 star rating with 12,000+ reviews',
      'Featured by Apple as App of the Day',
      'Average 5.2 workouts per week per active user',
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'HealthKit'],
    mockupColors: ['#10b981', '#059669', '#34d399', '#6ee7b7', '#d1fae5', '#064e3b'],
  },
  {
    slug: 'creative-lab',
    title: 'Creative Lab',
    category: 'Branding',
    year: '2025',
    description: 'Playful identity for a design education platform',
    color: '#f59e0b',
    challenge:
      'Creative Lab was launching as a new online design school targeting career-switchers and self-taught designers. They needed to stand out against established competitors like Skillshare and Coursera while conveying both playfulness and professional credibility.',
    solution:
      'We developed a dynamic identity system based on colorful, morphing shapes that represent creative transformation. The logo itself is a living element that changes based on context with different shapes for different course categories. Typography is bold and energetic, paired with a bright orange and yellow palette that radiates optimism and creativity.',
    results: [
      '8,500 students enrolled in first 6 months',
      'Organic social reach of 2.1M impressions',
      'Partnerships with 23 industry-leading designers',
      '94% student satisfaction rating',
    ],
    technologies: ['Figma', 'Illustrator', 'Webflow', 'Lottie'],
    mockupColors: ['#f59e0b', '#d97706', '#fbbf24', '#fcd34d', '#fef3c7', '#78350f'],
  },
  {
    slug: 'nexus-platform',
    title: 'Nexus Platform',
    category: 'Web Design',
    year: '2025',
    description: 'Enterprise SaaS dashboard with complex data visualization',
    color: '#8b5cf6',
    challenge:
      'Nexus needed to consolidate multiple legacy systems into a unified platform. Their users, data analysts and operations managers, were drowning in data but starving for insights. The challenge was making complex data accessible without dumbing it down.',
    solution:
      'We designed a modular dashboard system with customizable widgets and intelligent data prioritization. Advanced visualizations use progressive disclosure, starting simple and revealing complexity on demand. A dark-mode-first approach reduces eye strain during long analysis sessions. Micro-interactions provide real-time feedback on every action.',
    results: [
      '58% reduction in time-to-insight for analysts',
      '91% user adoption rate (vs 34% for previous system)',
      '$2.4M saved annually in reduced training costs',
      'NPS score of 68 (industry avg: 31)',
    ],
    technologies: ['React', 'TypeScript', 'D3.js', 'GraphQL'],
    mockupColors: ['#8b5cf6', '#7c3aed', '#a78bfa', '#c4b5fd', '#ede9fe', '#581c87'],
  },
  {
    slug: 'echo-studio',
    title: 'Echo Studio',
    category: 'Branding',
    year: '2024',
    description: 'Music production studio with bold typographic identity',
    color: '#ec4899',
    challenge:
      'Echo Studio, a boutique recording studio in Brooklyn, was attracting amateur musicians but struggling to book high-profile artists. Their existing brand felt amateurish and did not reflect the world-class acoustics and equipment they offered.',
    solution:
      'We created an identity built entirely on bold, experimental typography that echoes sound waves and audio equipment. The logo is a custom typeface that can be remixed for different contexts. Black and hot pink create a striking, memorable color story. Large-format posters and a minimal website put the focus on their impressive client roster.',
    results: [
      'Bookings from Grammy-nominated artists increased 340%',
      'Studio rate increased from $150/hr to $400/hr',
      'Won Best Recording Studio Brand at Design Awards',
      'Featured in Rolling Stone studio spotlight',
    ],
    technologies: ['Illustrator', 'InDesign', 'Next.js', 'GSAP'],
    mockupColors: ['#ec4899', '#db2777', '#f472b6', '#f9a8d4', '#fce7f3', '#831843'],
  },
]
