import { Container } from '@components/shared'
import { TeamMember } from './TeamMember'
import { team } from '@data/agency/team'

export function TeamSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="mb-12">
          <h2 className="font-black text-5xl mb-4">The Team</h2>
          <p className="text-xl text-gray-600">Passionate people doing bold work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </Container>
    </section>
  )
}
