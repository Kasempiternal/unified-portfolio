'use client'

import { Container, Button } from '@components/shared'

export function CTASection() {
  return (
    <section className="py-32 relative">
      <Container>
        <div className="relative rounded-3xl border border-[--site-accent]/20 bg-gradient-to-br from-[--site-accent]/10 via-purple-500/10 to-pink-500/10 p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,217,255,0.1),transparent)]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-bold text-4xl md:text-5xl mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already automating their work with FlowSync
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[--site-accent] text-black hover:bg-[--site-accent]/90 px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-[--site-accent]">
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              No credit card required &bull; 14-day free trial &bull; Cancel anytime
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
