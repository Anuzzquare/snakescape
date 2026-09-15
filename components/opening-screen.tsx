'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function OpeningScreen() {
  const [closing, setClosing] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const closeTimer = window.setTimeout(() => setClosing(true), 3500)
    const hideTimer = window.setTimeout(() => setHidden(true), 4600)

    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className={`opening-screen fixed inset-0 z-[100] overflow-hidden bg-[#070b0b] ${closing ? 'opening-screen-closing' : ''}`}
      aria-label="Nagara is awakening"
    >
      <div className="opening-noise absolute inset-0" />
      <div className="opening-scanline absolute inset-x-0 top-0 h-px bg-accent shadow-[0_0_18px_4px_oklch(0.82_0.16_155/.7)]" />
      <div className="opening-scale opening-scale-one absolute left-1/2 top-1/2 h-[min(80vw,720px)] w-[min(80vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />
      <div className="opening-scale opening-scale-two absolute left-1/2 top-1/2 h-[min(58vw,520px)] w-[min(58vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/35" />
      <div className="opening-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="opening-character relative h-[min(56vh,430px)] w-[min(72vw,390px)]">
          <Image
            src="/nagara-character.png"
            alt="Nagara, the serpent guardian"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
        <p className="opening-kicker mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-accent">
          A guardian is rising
        </p>
        <h1 className="opening-title mt-4 font-display text-5xl font-black tracking-[0.2em] text-foreground sm:text-7xl">
          NAGARA
        </h1>
        <p className="opening-subtitle mt-3 text-sm tracking-[0.18em] text-muted-foreground">
          Power has a pulse. Truth has a voice.
        </p>
        <div className="opening-progress mt-8 h-px w-36 overflow-hidden bg-border">
          <span className="block h-full bg-accent" />
        </div>
      </div>
    </div>
  )
}