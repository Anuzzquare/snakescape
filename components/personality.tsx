const traits = [
  {
    label: 'Powerful',
    line: 'I hold great strength, yet I have never once let it make me arrogant.',
  },
  {
    label: 'Polite',
    line: 'Even when I face those who oppose me, I meet them with respect.',
  },
  {
    label: 'Disciplined',
    line: 'I follow my principles without fail. They are the spine that holds me.',
  },
  {
    label: 'Kind-hearted',
    line: 'My heart softens most for the people who need help and have no one.',
  },
  {
    label: 'Fearless',
    line: 'When injustice rises, I do not flinch. I stand.',
  },
  {
    label: 'Truthful',
    line: 'I never support lies or deception. Truth is the only side I take.',
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
          She may look powerful and mysterious, but behind that presence is a
          kind-hearted soul who believes every person deserves to be heard.
          This is who she is when she speaks.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
