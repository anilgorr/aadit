---
name: Post-merge dependency restoration
description: Cached dependency restoration can still take minutes; budget for filesystem work rather than assuming a lockfile message means completion.
---

Allow post-merge setup enough time for a cold restoration of the entire workspace, with a buffer above the measured runtime.

**Why:** A fully cached install with no package downloads still took almost three minutes to relink the workspace. The earlier twenty-second limit interrupted installation. “Lockfile is up to date” only reports resolution status, not completion.

**How to apply:** Keep the dependency restore non-interactive and lockfile-preserving. Judge completion by the command exit and final success log, not early cache/resolution messages. Re-measure before reducing the setup timeout; prefer improving restoration performance over repeatedly retrying short deadlines.
