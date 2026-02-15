import { promises as fs } from 'fs'
import path from 'path'

interface WaitlistEntry {
  email: string
  timestamp: string
  position: number
}

const STORAGE_FILE = path.join(process.cwd(), 'data', 'waitlist.json')

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Read waitlist from file
export async function getWaitlist(): Promise<WaitlistEntry[]> {
  await ensureDataDir()

  try {
    const data = await fs.readFile(STORAGE_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    // File doesn't exist yet, return empty array
    return []
  }
}

// Add email to waitlist
export async function addToWaitlist(email: string): Promise<WaitlistEntry> {
  const waitlist = await getWaitlist()

  // Check if email already exists
  const existing = waitlist.find(entry => entry.email === email)
  if (existing) {
    throw new Error('EMAIL_EXISTS')
  }

  // Create new entry
  const newEntry: WaitlistEntry = {
    email,
    timestamp: new Date().toISOString(),
    position: waitlist.length + 1,
  }

  waitlist.push(newEntry)

  // Save to file
  await fs.writeFile(STORAGE_FILE, JSON.stringify(waitlist, null, 2))

  return newEntry
}

// Get waitlist stats
export async function getWaitlistStats() {
  const waitlist = await getWaitlist()
  return {
    total: waitlist.length,
    timestamp: new Date().toISOString(),
  }
}
