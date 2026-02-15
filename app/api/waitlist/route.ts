import { NextRequest, NextResponse } from 'next/server'
import { addToWaitlist, getWaitlistStats } from '@lib/waitlist-storage'

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email presence
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      )
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim()

    // Simulate network delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Add to waitlist with persistent storage
    try {
      const entry = await addToWaitlist(normalizedEmail)

      return NextResponse.json(
        {
          success: true,
          message: 'Successfully joined the waitlist',
          data: entry,
        },
        { status: 201 }
      )
    } catch (error) {
      if (error instanceof Error && error.message === 'EMAIL_EXISTS') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        )
      }
      throw error
    }
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve waitlist stats (for admin)
export async function GET() {
  try {
    const stats = await getWaitlistStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Waitlist stats error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
