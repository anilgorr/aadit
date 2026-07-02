import type { Post } from "@/.velite"

export function TableOfContents({ toc }: { toc: Post["toc"] }) {
  if (!toc || toc.length < 3) return null

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-border bg-muted/40 p-6"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-2 text-sm">
        {toc.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {item.title}
            </a>
            {item.items && item.items.length > 0 && (
              <ul className="mt-2 space-y-2 border-l border-border pl-4">
                {item.items.map((sub) => (
                  <li key={sub.url}>
                    <a
                      href={sub.url}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
