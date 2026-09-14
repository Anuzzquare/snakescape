import { NextResponse } from 'next/server'

type HelpRequest = {
  name?: string
  age?: string
  location?: string
  email?: string
  grievance?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let body: HelpRequest
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim()
  const age = body.age?.trim()
  const location = body.location?.trim()
  const email = body.email?.trim()
  const grievance = body.grievance?.trim()

  if (!name || !age || !location || !email || !grievance) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 },
    )
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 })
  }

  const submittedAt = new Date().toISOString()
  const apiKey = process.env.RESEND_API_KEY
  const notifyTo = process.env.NOTIFY_EMAIL

  // Attempt to send the hero's owner an email notification, if configured.
  let emailSent = false
  if (apiKey && notifyTo) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Nagara <onboarding@resend.dev>',
          to: [notifyTo],
          subject: 'Someone Needs Your Help!',
          text: [
            'A visitor has called into the dark and asked for Nagara.',
            '',
            `Name: ${name}`,
            `Age: ${age}`,
            `Location: ${location}`,
            `Email: ${email}`,
            `Submitted: ${submittedAt}`,
            '',
            'Their request:',
            grievance,
          ].join('\n'),
        }),
      })
      emailSent = res.ok
    } catch {
      emailSent = false
    }
  }

  // Always record the request server-side so nothing is lost.
  console.log('[v0] New help request for Nagara:', {
    name,
    age,
    location,
    email,
    grievance,
    submittedAt,
    emailSent,
  })

  return NextResponse.json({ ok: true, submittedAt, emailSent })
}
