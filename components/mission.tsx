export function Mission() {
  return (
    <section id="mission" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Mission
        </p>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
          {'\u201C'}Protect the people. Listen to their voices. Stand with the
          truth.{'\u201D'}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Nagara doesn{'\u2019'}t fight just because she is powerful. She fights
          because someone has to stand up when the truth is being ignored. If
          you carry a burden no one else will hold, she is already listening.
        </p>
        <a
          href="#summon"
          className="mt-10 inline-flex rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_30px_-6px_oklch(0.82_0.16_155/0.7)] transition-transform hover:scale-[1.03]"
        >
          Ask for Her Help
        </a>
      </div>
    </section>
  )
}
