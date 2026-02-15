interface TeamMemberProps {
  name: string
  role: string
  bio: string
}

export function TeamMember({ name, role, bio }: TeamMemberProps) {
  return (
    <div className="border-3 border-black bg-white p-6 shadow-brutal">
      <div className="aspect-square bg-accent mb-4 border-2 border-black" />
      <h3 className="font-black text-xl mb-1">{name}</h3>
      <p className="text-primary font-bold text-sm mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  )
}
