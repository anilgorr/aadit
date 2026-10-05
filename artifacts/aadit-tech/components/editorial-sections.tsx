import Link from "next/link"

export interface EditorialSection {
  heading: string
  paragraphs: string[]
  links?: { href: string; label: string }[]
}

export function EditorialSections({ sections }: { sections: EditorialSection[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-2xl font-bold tracking-tight">{section.heading}</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {section.links && (
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {section.links.map((link) => <li key={link.href}><Link className="font-medium text-primary underline underline-offset-4" href={link.href}>{link.label}</Link></li>)}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
