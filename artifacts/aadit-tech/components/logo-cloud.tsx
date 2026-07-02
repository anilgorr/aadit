import Image from "next/image"

const CLIENTS = [
  { name: "Sunrise", src: "/clients/sunrise.png", width: 200, height: 108 },
  { name: "Infodrive", src: "/clients/infodrive.png", width: 200, height: 78 },
  { name: "Netradyne", src: "/clients/netradyne.png", width: 707, height: 127 },
  { name: "Alphastream", src: "/clients/alphastream.webp", width: 500, height: 112 },
  { name: "Aditi", src: "/clients/aditi.webp", width: 377, height: 134 },
  { name: "Sycomp", src: "/clients/sycomp.png", width: 444, height: 113 },
  { name: "Motherhood", src: "/clients/motherhood.png", width: 200, height: 108 },
]

export function LogoCloud() {
  return (
    <div className="w-full overflow-hidden border-b border-border bg-background py-12">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by leading organizations
      </p>

      <div className="relative flex">
        {/* duplicate list for seamless loop */}
        {[0, 1].map((pass) => (
          <ul
            key={pass}
            aria-hidden={pass === 1}
            className="marquee-track flex shrink-0 items-center gap-12 px-6"
          >
            {CLIENTS.map((client) => (
              <li key={client.name} className="flex shrink-0 items-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  loading="lazy"
                  sizes="160px"
                  className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
