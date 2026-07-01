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
    <div className="w-full overflow-hidden bg-background py-10 border-y border-border flex flex-col items-center">
      <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by leading organizations</p>
      <div className="relative flex w-full max-w-7xl overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {LOGOS.concat(LOGOS).map((logo, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        `
      }} />
    </div>
  )
}