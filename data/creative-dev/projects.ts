export interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  image: string
  color: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Particle Dreams',
    category: 'WebGL Experience',
    year: '2024',
    description:
      'Interactive particle system exploring fluid dynamics and emergent behavior',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    color: '#ff006e',
    tags: ['Three.js', 'GLSL', 'React'],
  },
  {
    id: 2,
    title: 'Kinetic Typography',
    category: 'Motion Design',
    year: '2024',
    description:
      'Award-winning typographic experiment pushing the boundaries of web animation',
    image:
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop',
    color: '#00b4d8',
    tags: ['GSAP', 'WebGL', 'Canvas'],
  },
  {
    id: 3,
    title: 'Neural Networks',
    category: 'Data Visualization',
    year: '2024',
    description:
      'Real-time visualization of machine learning algorithms in 3D space',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    color: '#7209b7',
    tags: ['D3.js', 'Three.js', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Liquid Motion',
    category: 'Creative Coding',
    year: '2023',
    description:
      'Experimental interface exploring organic motion and morphing geometries',
    image:
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop',
    color: '#06ffa5',
    tags: ['WebGL', 'Shaders', 'React'],
  },
  {
    id: 5,
    title: 'Sonic Landscapes',
    category: 'Audio-Visual',
    year: '2023',
    description:
      'Immersive audio-reactive experience blending sound design with visuals',
    image:
      'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&h=600&fit=crop',
    color: '#ffbe0b',
    tags: ['Web Audio', 'Three.js', 'Canvas'],
  },
  {
    id: 6,
    title: 'Digital Garden',
    category: 'Interactive Art',
    year: '2023',
    description:
      'Procedurally generated botanical forms responding to user interaction',
    image:
      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop',
    color: '#4cc9f0',
    tags: ['Three.js', 'Procedural', 'WebGL'],
  },
]
