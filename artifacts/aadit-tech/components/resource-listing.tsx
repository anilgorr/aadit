import Link from "next/link"
import { Download, Lock, ArrowRight, type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { buttonVariants } from "@/components/ui/button"
import type { Resource } from "@/lib/resources"

export function ResourceListing({
  title,
  tagline,
  href,
  icon: Icon,
  resources,
}: {
  title: string
  tagline: string
  href: string
  icon: LucideIcon
  resources: Resource[]
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Section background="muted" className="border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: title, href },
              ]}
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {tagline}
            </p>
          </div>
        </Section>

        <Section>
          {resources.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <Card key={resource.slug} className="flex h-full flex-col p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <Badge variant={resource.gated ? "accent" : "muted"}>
                      {resource.gated ? "Gated" : "Free"}
                    </Badge>
                  </div>
                  <h2 className="mb-3 text-xl font-bold leading-snug">
                    {resource.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  {resource.gated ? (
                    <Link
                      href="/contact"
                      className={buttonVariants({ variant: "primary", size: "md" })}
                    >
                      <Lock className="h-4 w-4" />
                      Request Access
                    </Link>
                  ) : (
                    <a
                      href={resource.fileUrl ?? "#"}
                      className={buttonVariants({ variant: "secondary", size: "md" })}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold">New {title.toLowerCase()} are on the way</h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                We&apos;re preparing in-depth {title.toLowerCase()} on cybersecurity,
                compliance, and managed IT. Get in touch to be notified when they&apos;re
                published, or to request a specific topic.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  Get Notified
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </div>
  )
}
