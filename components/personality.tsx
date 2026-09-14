const traits = [
  {
    label: 'Patient',
    line: 'I have waited a thousand years. I can wait for you to find your words.',
  },
  {
    label: 'Fierce',
    line: 'Threaten the helpless in front of me and you will learn why the old world feared the deep.',
  },
  {
    label: 'Warm',
    line: 'Come closer. You are not a burden here. You never were.',
  },
  {
    label: 'Unflinching',
    line: 'I do not look away from pain. Not yours, not anyone\u2019s.',
  },
]

export function Personality() {
  return (
    <section id="personality" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Personality
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Who She Is When She Speaks
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Nagara is ancient but never cold. She listens more than she speaks,
          and when she speaks, every word is chosen. Gentle with the wounded,
          merciless with the cruel.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map((t) => (
            <div
              key={t.label}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <h3 className="font-display text-lg font-semibold text-accent">
                {t.label}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                {'\u201C'}
                {t.line}
                {'\u201D'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
