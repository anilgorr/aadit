export function KeyTakeaways({
  id,
  items,
}: {
  id: string
  items: { claim: string; text: string }[]
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="rounded-2xl border border-border bg-muted/50 p-6 md:p-8">
      <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight">Key takeaways</h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-muted-foreground">
        {items.map(({ claim, text }) => (
          <li key={claim} className="pl-1 leading-relaxed">
            <strong className="text-foreground">{claim}.</strong> {text}
          </li>
        ))}
      </ul>
    </section>
  )
}
