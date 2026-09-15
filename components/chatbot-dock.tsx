'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Msg = { from: 'nagara' | 'visitor'; text: string }

type Step = 'name' | 'age' | 'location' | 'email' | 'grievance' | 'sending' | 'done'

type Answers = {
  name: string
  age: string
  location: string
  email: string
  grievance: string
}

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export function ChatbotDock() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: 'nagara',
      text: "Greetings. I am Nagara. I may look powerful, but you don't need to be afraid of me. I am here to listen. What is your name?",
    },
  ])
  const [step, setStep] = useState<Step>('name')
  const [input, setInput] = useState('')
  const [answers, setAnswers] = useState<Answers>({
    name: '',
    age: '',
    location: '',
    email: '',
    grievance: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  useEffect(() => {
    if (open && !typing) inputRef.current?.focus()
  }, [open, step, typing])

  const say = (from: Msg['from'], text: string) =>
    setMessages((m) => [...m, { from, text }])

  // Nagara "composes" her reply — the pause scales with how much she has to say,
  // so she reads as a living presence rather than an instant script.
  const nagaraSay = (text: string) => {
    setTyping(true)
    const delay = Math.min(2200, 700 + text.length * 22)
    setTimeout(() => {
      setTyping(false)
      say('nagara', text)
    }, delay)
  }

  function submit(final: Answers) {
    setStep('sending')
    nagaraSay('Stay a moment. I am carrying your words to where they need to go...')

    const firstSubmission = !window.localStorage.getItem('formsubmit-approved')
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://formsubmit.co/anupamaanilammus@gmail.com'
    form.target = firstSubmission ? '_blank' : 'formsubmit-response'
    form.style.display = 'none'

    const fields = {
      name: final.name,
      age: final.age,
      location: final.location,
      email: final.email,
      grievance: final.grievance,
      _subject: 'Someone Needs Your Help!',
      _template: 'table',
      _captcha: 'false',
    }

    Object.entries(fields).forEach(([name, value]) => {
      const field = document.createElement('input')
      field.type = 'hidden'
      field.name = name
      field.value = value
      form.appendChild(field)
    })

    document.body.appendChild(form)
    form.submit()
    form.remove()
    window.localStorage.setItem('formsubmit-approved', 'true')

    nagaraSay(
      firstSubmission
        ? 'The first message has opened FormSubmit\'s approval page in a new tab. Approve the address there, then return here for future messages.'
        : `It is done, ${final.name}. Your request has been carried through, and help has been alerted. You don't have to fight alone — you were heard.`,
    )
    setStep('done')
  }

  function handleSend() {
    const value = input.trim()
    if (!value || step === 'sending' || step === 'done') return
    setError(null)

    if (step === 'age' && !/^\d{1,3}$/.test(value)) {
      setError('Please tell me your age as a number.')
      return
    }
    if (step === 'email' && !isValidEmail(value)) {
      setError('That does not look like an email I can reach. Try again.')
      return
    }

    say('visitor', value)
    setInput('')

    if (step === 'name') {
      const next = { ...answers, name: value }
      setAnswers(next)
      setStep('age')
      nagaraSay(`Nice to meet you, ${value}. May I know your age?`)
    } else if (step === 'age') {
      const next = { ...answers, age: value }
      setAnswers(next)
      setStep('location')
      nagaraSay('Thank you. And where are you from?')
    } else if (step === 'location') {
      const next = { ...answers, location: value }
      setAnswers(next)
      setStep('email')
      nagaraSay('If you are comfortable sharing, what is your email address?')
    } else if (step === 'email') {
      const next = { ...answers, email: value }
      setAnswers(next)
      setStep('grievance')
      nagaraSay('Thank you for trusting me. Now forget the formalities. Tell me... what is troubling you?')
    } else if (step === 'grievance') {
      const next = { ...answers, grievance: value }
      setAnswers(next)
      submit(next)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault()
      handleSend()
    }
  }

  const placeholder =
    step === 'age'
      ? 'Your age...'
      : step === 'email'
        ? 'you@example.com'
        : step === 'grievance'
          ? 'Describe your problem or request...'
          : step === 'done'
            ? 'The sanctuary is closed for now'
            : 'Type your reply...'

  return (
    <>
      <iframe name="formsubmit-response" title="FormSubmit response" className="hidden" />
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-accent/50 bg-card/90 py-2 pl-2 pr-5 shadow-[0_0_35px_-8px_oklch(0.82_0.16_155/0.8)] backdrop-blur transition-transform hover:scale-105"
          aria-label="Open chat with Nagara"
        >
          <span className="relative flex h-11 w-11 overflow-hidden rounded-full ring-2 ring-accent/60">
            <Image src="/nagara-hero.webp" alt="" width={44} height={44} className="h-full w-full object-cover object-top" />
          </span>
          <span className="text-left">
            <span className="block text-sm font-semibold leading-tight">Nagara</span>
            <span className="block text-xs text-accent">Ask for help</span>
          </span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[560px] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <header className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary/25 to-accent/15 px-4 py-3">
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full ring-2 ring-accent/60">
              <Image src="/nagara-hero.webp" alt="Nagara" width={40} height={40} className="h-full w-full object-cover object-top" />
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-bold leading-tight">NAGARA</p>
              <p className="flex items-center gap-1.5 text-xs text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Here to listen
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'visitor' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed text-pretty ${
                    m.from === 'visitor'
                      ? 'rounded-br-sm bg-primary text-primary-foreground'
                      : 'rounded-bl-sm bg-secondary text-secondary-foreground'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start" aria-live="polite" aria-label="Nagara is typing">
                <span className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-secondary px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
                </span>
              </div>
            )}
          </div>

          <div className="border-t border-border px-3 py-3">
            {error && <p className="mb-2 px-1 text-xs text-destructive">{error}</p>}
            <div className="flex items-end gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={step === 'sending' || step === 'done'}
                placeholder={placeholder}
                inputMode={step === 'age' ? 'numeric' : step === 'email' ? 'email' : 'text'}
                className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-accent/50 transition focus:ring-2 disabled:opacity-60"
              />
              <button
                onClick={handleSend}
                disabled={step === 'sending' || step === 'done' || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
