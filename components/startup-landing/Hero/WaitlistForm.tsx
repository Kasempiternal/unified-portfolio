'use client'

import { useState, useRef, FormEvent } from 'react'
import gsap from 'gsap'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setErrorMessage('')
    setStatus('idle')

    if (!email) {
      setStatus('error')
      setErrorMessage('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setEmail('')

        if (successRef.current) {
          gsap.fromTo(
            successRef.current,
            {
              scale: 0.8,
              opacity: 0,
              y: 20,
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'back.out(1.7)',
            }
          )
        }
      } else {
        setStatus('error')
        setErrorMessage(
          data.error || 'Something went wrong. Please try again.'
        )
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        'Network error. Please check your connection and try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      {status === 'success' ? (
        <div
          ref={successRef}
          className="glass-effect rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">You&apos;re on the list!</h3>
          <p className="text-white/70">
            We&apos;ll notify you as soon as we launch. Get ready for something
            amazing.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 glass-effect rounded-full text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm text-center animate-pulse">
              {errorMessage}
            </p>
          )}

          <p className="text-sm text-white/50 text-center">
            Join 2,847 others waiting for early access
          </p>
        </form>
      )}
    </div>
  )
}
