import { AgencyHero } from '@components/agency/Hero/AgencyHero'
import { MarqueeText } from '@components/agency/Hero/MarqueeText'
import { WorkGrid } from '@components/agency/Work/WorkGrid'
import { TeamSection } from '@components/agency/Team/TeamSection'
import { ContactForm } from '@components/agency/Contact/ContactForm'

export default function AgencyHome() {
  return (
    <main>
      <AgencyHero />
      <MarqueeText />
      <WorkGrid />
      <TeamSection />
      <ContactForm />
    </main>
  )
}
