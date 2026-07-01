export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">Aadit Technologies</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Cybersecurity · Compliance · IT Managed Services
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Bangalore, India</p>
      </div>
      <div className="mt-4 flex gap-3 text-sm text-muted-foreground">
        <span className="rounded-full border px-3 py-1">Healthcare</span>
        <span className="rounded-full border px-3 py-1">BFSI</span>
        <span className="rounded-full border px-3 py-1">Fintech</span>
        <span className="rounded-full border px-3 py-1">SaaS</span>
      </div>
    </main>
  )
}
