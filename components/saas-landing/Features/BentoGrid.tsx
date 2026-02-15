'use client'

import { Container } from '@components/shared'
import { FeatureCard } from './FeatureCard'

const features = [
  {
    title: 'Smart Automation',
    description:
      'Build powerful workflows with our visual editor. No code required, unlimited possibilities.',
    icon: '⚡',
  },
  {
    title: 'Real-time Sync',
    description:
      'Keep your data in sync across all your tools. Changes propagate instantly, everywhere.',
    icon: '🔄',
  },
  {
    title: 'AI-Powered',
    description:
      'Let AI handle the repetitive tasks. Smart suggestions learn from your patterns.',
    icon: '🤖',
  },
  {
    title: 'Team Collaboration',
    description:
      'Work together seamlessly. Share workflows, assign tasks, and track progress in real-time.',
    icon: '👥',
  },
  {
    title: 'Enterprise Security',
    description:
      'Bank-level encryption, SOC 2 compliant, and GDPR ready. Your data is always protected.',
    icon: '🔒',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Get insights into your workflows. Track performance, identify bottlenecks, and optimize.',
    icon: '📊',
  },
]

export function BentoGrid() {
  return (
    <section className="py-32 relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4">
            Everything you need to automate
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to make your workflow seamless and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={index === 0 ? 'md:col-span-2' : ''}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
