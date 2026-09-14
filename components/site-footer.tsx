export function SiteFooter() {
  return (
    <footer
      id="summon"
      className="border-t border-border/60 py-16"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-balance">
          Have something you can{'\u2019'}t say to anyone?
        </h2>
        <p className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.15em] text-accent">
          Nagara is listening.
        </p>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground text-pretty">
          You don{'\u2019'}t have to fight alone. When truth needs a voice,
          Nagara stands with you.
        </p>
        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          NAGARA {'\u2014'} The Guardian of Truth
        </p>
      </div>
    </footer>
  )
}
