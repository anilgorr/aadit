# Aadit Technologies

A B2B marketing website for Aadit Technologies — a cybersecurity, compliance, and IT managed-services provider. Built with Next.js 15 (App Router) and lives at `artifacts/aadit-tech/`.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Product

Marketing site for a cybersecurity/compliance/IT managed-services firm: dark "command-center" hero + CTA + footer (with a glass Threat-Monitor console) alternating with light content sections, mega-menu navigation, service pages, testimonials, and stats. Brand logo + favicon are in `artifacts/aadit-tech/public` and `app/icon.png`.

## Where things live

- App: `artifacts/aadit-tech/` (package `@workspace/aadit-tech`), workflow `artifacts/aadit-tech: Next.js` on port 3000
- Theme tokens & animation utilities: `artifacts/aadit-tech/styles/globals.css` (Tailwind v4, OKLCH vars)
- Layout components: `artifacts/aadit-tech/components/` (header, footer, ui/*)
- MDX content (Velite): `services` and `posts` collections → `.velite/`
- Deploy config: root `netlify.toml`

## Architecture decisions

- **Deployment is via GitHub → Netlify, NOT Replit Publish.** User commits/pushes from the Replit Git pane; Netlify builds `pnpm --filter @workspace/aadit-tech run build` and publishes `artifacts/aadit-tech/.next` via `@netlify/plugin-nextjs`.
- Velite runs via npm `predev`/`prebuild` scripts, never inside `next.config.ts` (which cannot use top-level await).
- Design uses dark + light sections for depth/contrast (an earlier "all-light" constraint was intentionally reversed).

## User preferences

- Ship via GitHub → Netlify; do not rely on Replit Publish for this site.
- Design should feel unique and beautiful with real depth/contrast (dark sections are welcome).

## Gotchas

- Git writes are performed by the user from the Replit Git pane, not the agent.
- Keep `next/image` width/height at true logo ratios (logo.png 2.25:1, logo-white.png 2.46:1) to avoid distortion.
- Verify with `pnpm --filter @workspace/aadit-tech run typecheck`, not `build` (build needs workflow-provided env).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
