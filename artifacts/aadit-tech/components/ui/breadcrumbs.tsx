import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"

export interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
            {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}