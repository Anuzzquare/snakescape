'use client'

import { FormEvent, useState } from 'react'

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [replyLink, setReplyLink] = useState<string | null>(null)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedEmail = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      setReplyLink(null)
      return
    }

    const subject = encodeURIComponent('A reply from Nagara')
    const body = encodeURIComponent(
      'You called, and I heard you. Whatever brought you here, you do not have to carry it alone. Keep going — your truth matters.\n\n— Nagara',
    )
    setError('')
    setReplyLink(`mailto:${trimmedEmail}?subject=${subject}&body=${body}`)
  }

  return (
    <footer id="summon" className="border-t border-border/60 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-balance">
          Have something you can&apos;t say to anyone?
        </h2>
        <p className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.15em] text-accent">
          Nagara is listening.
        </p>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground text-pretty">
          You don&apos;t have to fight alone. When truth needs a voice, Nagara stands with you.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-accent/30 bg-card/70 p-5 text-left shadow-[0_0_35px_-18px_oklch(0.82_0.16_155/0.8)]">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent">Receive a reply from Nagara</p>
          <p className="mt-2 text-sm text-muted-foreground">Leave your email and your mail app will open with a personal reply from her.</p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <label htmlFor="nagara-email" className="sr-only">Email address</label>
            <input
              id="nagara-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-accent/50 focus:ring-2"
              required
            />
            <button type="submit" className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]">
              Get her reply
            </button>
          </form>
          {error && <p className="mt-2 text-xs text-destructive" role="alert">{error}</p>}
          {replyLink && (
            <a href={replyLink} className="mt-3 inline-block text-sm font-medium text-accent underline underline-offset-4">
              Open Nagara&apos;s reply in your mail app
            </a>
          )}
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          NAGARA {'—'} The Guardian of Truth
        </p>
      </div>
    </footer>
  )
}

