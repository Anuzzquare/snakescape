const powers = [
  {
    title: 'Truth Sense',
    body: 'Nagara can sense when something is wrong and instantly identify deception, no matter how well it is hidden.',
  },
  {
    title: 'Serpent Transformation',
    body: 'She can call upon her serpent abilities to protect herself and shield anyone who stands beside her.',
  },
  {
    title: 'Guardian Strength',
    body: 'Her determination gives her extraordinary strength whenever she is protecting innocent people.',
  },
  {
    title: 'Silent Awareness',
    body: 'Like a snake, she observes her surroundings carefully and patiently before ever taking action.',
  },
  {
    title: 'Voice of Justice',
    body: 'Nagara gives people the courage to speak about problems and truths they were once too afraid to share.',
  },
]

export function Powers() {
  return (
    <section id="powers" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Powers &amp; Abilities
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          The Gifts of the Guardian
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {powers.map((p) => (
            <div
              key={p.title}
              className="group rounded-lg border border-border bg-card p-7 transition-colors hover:border-accent/60"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
