---
name: Aadit Technologies Netlify deploy
description: How the aadit-tech Next.js app deploys to Netlify from the pnpm monorepo
---

# Netlify deploy for aadit-tech

The user deploys aadit-tech to Netlify via GitHub (repo auto-builds on push), NOT via Replit Publish.

Config lives in root `netlify.toml`:
- Build runs from repo root (default base) so pnpm can resolve the workspace, then `--filter @workspace/aadit-tech run build`.
- `publish = "artifacts/aadit-tech/.next"`.
- `@netlify/plugin-nextjs` plugin is required for the App Router.
- `NODE_VERSION = "22"` (Netlify LTS; local dev is Node 24).
- Root `package.json` has `packageManager: pnpm@10.26.1` so Netlify/Corepack uses the right pnpm.

**Why:** monorepo with the app in a subfolder — Netlify won't build it correctly without telling it the workspace filter, publish path, and Next.js runtime plugin.

**How to apply:** git write ops are blocked for the agent; the user must commit/push `netlify.toml` + `package.json` from the Replit Git pane for Netlify to pick up changes. Verify prod builds locally with an isolated dist dir (`NEXT_DIST_DIR` override) to avoid clobbering the running dev server's `.next`.

Known non-fatal build warning: `next build` reports `Cannot find package '@eslint/eslintrc'` (referenced by eslint.config.mjs but not installed). It does NOT fail the build. Install `@eslint/eslintrc` as a devDependency if a clean lint pass is wanted.
