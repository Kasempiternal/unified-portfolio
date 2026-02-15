import { Hero } from '@components/saas-landing/Hero/Hero'
import { LogoCarousel } from '@components/saas-landing/SocialProof/LogoCarousel'
import { BentoGrid } from '@components/saas-landing/Features/BentoGrid'
import { PricingSection } from '@components/saas-landing/Pricing/PricingSection'
import { CTASection } from '@components/saas-landing/CTA/CTASection'
import { Footer } from '@components/saas-landing/Footer/Footer'
import { SmoothScrollProvider } from '@components/saas-landing/SmoothScrollProvider'
import { NoiseOverlay } from '@components/shared'

export default function SaasLandingPage() {
  return (
    <SmoothScrollProvider>
      <main className="relative">
        <NoiseOverlay />
        <Hero />
        <LogoCarousel />
        <BentoGrid />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
