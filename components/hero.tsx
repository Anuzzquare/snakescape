import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.28_0.08_278/0.6),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.4_0.1_155/0.25),transparent_55%)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent 0 14px, oklch(0.82 0.16 155) 14px 15px)',
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:gap-6">
        <div className="order-2 md:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            The Serpent Sentinel
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            NAGARA
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Coiled in the marrow of the old world, she hears every whisper the
            city forgets. Where others turn away, she listens{'\u2014'}then she
            strikes for those who cannot strike for themselves.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#summon"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_30px_-6px_oklch(0.82_0.16_155/0.7)] transition-transform hover:scale-[1.03]"
            >
              Summon Nagara
            </a>
            <a
              href="#origin"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Her Legend
            </a>
          </div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2">
          <div className="nagara-aura absolute inset-0 -z-10 rounded-full bg-primary/25 blur-3xl" />
          <div className="nagara-sway">
            <Image
              src="/nagara-hero.webp"
              alt="Nagara, the Serpent Sentinel, a naga warrior with a scaled serpent tail holding a spear"
              width={520}
              height={520}
              priority
              className="nagara-float w-full max-w-[420px] object-contain drop-shadow-[0_25px_45px_oklch(0.1_0.05_275/0.8)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
