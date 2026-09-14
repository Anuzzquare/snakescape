const powers = [
  {
    title: 'Whisper-Sense',
    body: 'Her forked senses catch fear, lies, and cries for help from miles away. No plea goes unheard.',
  },
  {
    title: 'Coil of Ages',
    body: 'Her serpent tail can shield a child or crush a fortress gate. It is patient, and it never lets go.',
  },
  {
    title: 'Venom of Truth',
    body: 'A single touch dissolves illusion and deceit, forcing the corrupt to face what they have hidden.',
  },
  {
    title: 'Shedding',
    body: 'She sheds wounds like old skin, healing from any blow and rising renewed to guard another day.',
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
          The Gifts of the Deep
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
