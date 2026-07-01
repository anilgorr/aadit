import React from "react"

const LOGOS = [
  "Acme Corp",
  "Globex",
  "Soylent",
  "Initech",
  "Umbrella",
  "Stark Ind.",
  "Wayne Ent.",
  "Cyberdyne",
]

export function LogoCloud() {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden border-b border-border bg-background py-12">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by security-conscious teams
      </p>
      <div className="relative flex w-full max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex whitespace-nowrap">
          {LOGOS.concat(LOGOS).map((logo, i) => (
            <div
              key={i}
              className="mx-10 flex items-center justify-center text-xl font-bold text-foreground/25 transition-colors hover:text-primary/70"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        `,
        }}
      />
    </div>
  )
}
