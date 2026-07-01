# Aadit Technologies

**Aadit Technologies** is a cybersecurity, compliance, and IT managed services company based in
Bangalore, India, serving startups through enterprise clients with a focus on healthcare, BFSI,
fintech, and SaaS sectors.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Content | Velite (MDX collections) |
| Linting | ESLint 9 (flat config) |
| Formatting | Prettier + prettier-plugin-tailwindcss |
| Package Manager | pnpm |

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server (also builds Velite content on start)
pnpm dev

# Open http://localhost:3000
```

## Project Structure

```
.
├── app/               # Next.js App Router — layouts, pages, route segments
├── components/        # Shared React components
│   └── ui/            # shadcn/ui primitives (added via CLI)
├── content/           # MDX content collections (processed by Velite)
│   ├── services/      # Service pages
│   └── posts/         # Blog posts
├── lib/               # Utility functions (cn(), etc.)
├── public/            # Static assets
├── styles/            # Global CSS (Tailwind v4 + shadcn CSS variables)
├── components.json    # shadcn/ui configuration
├── velite.config.ts   # Velite content collection schemas
└── next.config.ts     # Next.js configuration (includes Velite build hook)
```

## Content Collections

Content is managed via [Velite](https://velite.js.org/) and lives in `content/`. Each collection
is defined in `velite.config.ts` with a Zod schema.

### Adding a Service

Create a new `.mdx` file in `content/services/`:

```mdx
---
title: My New Service
description: A brief description of the service.
slug: my-new-service
publishedAt: 2025-01-01
author: Aadit Technologies
---

Content goes here.
```

### Adding a Blog Post

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: My Blog Post
description: A brief description.
slug: my-blog-post
publishedAt: 2025-01-01
author: Jane Doe
---

Content goes here.
```

After adding content, the Velite build runs automatically when you start `pnpm dev` or
`pnpm build`. You can also trigger it manually:

```bash
pnpm velite
```

## Adding shadcn/ui Components

```bash
# From within the aadit-tech package directory
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card dialog

# From the 21st.dev registry
pnpm dlx shadcn@latest add "https://21st.dev/r/<component-name>"
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript type-check |
| `pnpm format` | Format all files with Prettier |
| `pnpm format:check` | Check formatting without writing |
| `pnpm velite` | Build Velite content collections |

## Services We Offer

- Cybersecurity consulting and penetration testing
- Compliance readiness (ISO 27001, SOC 2, HIPAA, PCI-DSS, RBI, DPDP Act)
- IT managed services and 24/7 infrastructure monitoring
- Cloud security and operations (AWS, Azure, GCP)
- Incident response planning and retainer support

---

*Aadit Technologies — Bangalore, India*
