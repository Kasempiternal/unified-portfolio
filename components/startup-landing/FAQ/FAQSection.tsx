'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (faqsRef.current) {
        gsap.from(faqsRef.current.children, {
          scrollTrigger: { trigger: faqsRef.current, start: 'top 80%' },
          y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const faqs = [
    { question: 'When will LaunchPad be available?', answer: 'We\'re currently in private beta and plan to launch publicly in Q2 2025. Join our waitlist to get early access and be among the first to experience the platform.' },
    { question: 'What pricing plans will you offer?', answer: 'We\'ll offer flexible plans for individuals, teams, and enterprises. Early adopters who join the waitlist will receive special launch pricing with lifetime discounts.' },
    { question: 'How does the AI automation work?', answer: 'Our AI learns from your workflow patterns and automatically suggests optimizations, creates templates, and automates repetitive tasks. It gets smarter the more you use it.' },
    { question: 'Is my data secure?', answer: 'Absolutely. We use military-grade encryption, are SOC 2 compliant, and regularly conduct third-party security audits. Your data is always encrypted in transit and at rest.' },
    { question: 'Can I integrate with my existing tools?', answer: 'Yes! We support integrations with over 50 popular tools including Slack, Google Workspace, GitHub, Salesforce, and more. Our API also allows custom integrations.' },
    { question: 'Do you offer a free trial?', answer: 'We\'ll offer a 14-day free trial with full access to all features. No credit card required. Waitlist members will get an extended 30-day trial.' },
    { question: 'What kind of support do you provide?', answer: 'All plans include email support. Premium and Enterprise plans get priority support, dedicated account managers, and 24/7 phone support.' },
    { question: 'Can I cancel anytime?', answer: 'Yes, you can cancel your subscription at any time with no penalties or fees. We also offer a 30-day money-back guarantee if you\'re not satisfied.' },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-wider mb-4">Got Questions?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Frequently Asked<br /><span className="gradient-text">Questions</span></h2>
          <p className="text-white/70 text-lg">Everything you need to know about LaunchPad.</p>
        </div>

        <div ref={faqsRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-effect rounded-xl overflow-hidden transition-all hover:bg-white/10">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group">
                <span className="text-lg font-semibold group-hover:text-purple-500 transition-colors">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all ${openIndex === index ? 'rotate-180 bg-purple-500/20' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5 pt-0">
                  <div className="border-l-2 border-purple-500/30 pl-4">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-white/70 mb-6">Can&apos;t find what you&apos;re looking for? Reach out to our team.</p>
          <a href="mailto:hello@launchpad.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
