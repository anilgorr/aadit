#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

echo "[post-merge] Installing dependencies from the committed lockfile"
CI=true pnpm install --frozen-lockfile --prefer-offline --reporter=append-only

# The database schema is an empty template. Blindly pushing it after a
# content-only merge could propose deleting unrelated existing tables.
# If database models are introduced, add an explicitly approved migration here.
echo "[post-merge] Dependencies ready; no database migration is required"
