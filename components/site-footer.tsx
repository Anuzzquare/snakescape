export function SiteFooter() {
  return (
    <footer
      id="summon"
      className="border-t border-border/60 py-16"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Call into the Dark
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground text-pretty">
          Open the sanctuary in the corner of your screen. Nagara is waiting to
          learn your name.
        </p>
        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          NAGARA {'\u2014'} The Serpent Sentinel
        </p>
      </div>
    </footer>
  )
}
