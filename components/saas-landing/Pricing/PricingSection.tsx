'use client'

import { Container } from '@components/shared'
import { PricingCard } from './PricingCard'

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'forever',
    features: [
      'Up to 100 workflows/month',
      'Basic integrations',
      'Community support',
      '1 team member',
    ],
  },
  {
    name: 'Professional',
    price: '49',
    period: 'month',
    highlighted: true,
    features: [
      'Unlimited workflows',
      'All integrations',
      'Priority support',
      'Up to 10 team members',
      'Advanced analytics',
      'Custom branding',
    ],
  },
  {
    name: 'Enterprise',
    price: '199',
    period: 'month',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment',
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-32 relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
