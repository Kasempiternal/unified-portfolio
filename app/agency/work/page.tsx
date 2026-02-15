import { Container } from '@components/shared'
import { WorkGrid } from '@components/agency/Work/WorkGrid'

export const metadata = {
  title: 'Our Work - Agency Portfolio',
  description: 'Browse our portfolio of bold branding and web design projects',
}

export default function WorkPage() {
  return (
    <main>
      <section className="py-20 md:py-32">
        <Container>
          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-16">
            Projects that push boundaries and make statements. Each one designed to be impossible to ignore.
          </p>
        </Container>
      </section>

      <WorkGrid />
    </main>
  )
}
