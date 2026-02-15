'use client'

import { useState } from 'react'
import { Container } from '@components/shared'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-5xl md:text-7xl mb-8">
            Let's make something
            <span className="block text-primary">BOLD</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-bold mb-2 uppercase text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-2 uppercase text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-bold mb-2 uppercase text-sm">
                Tell us about your project
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-bold px-8 py-4 border-3 border-black shadow-brutal-lg hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all uppercase text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}
