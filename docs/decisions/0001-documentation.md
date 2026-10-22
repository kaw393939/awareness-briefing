# 0001 — Documentation and traceability

Status: Accepted  
Date: 2026-10-22

## Context

The project needs a public documentation site and a visible relationship between requirements, discussion, and future implementation. The user requested a GitHub repository, GitHub Pages hosting, and effective issue use, suggesting VitePress.

## Decision

Use VitePress with local Markdown, published by GitHub Actions to GitHub Pages. Keep documentation and project issues in `kaw393939/awareness-briefing`. Future code may live here; if separated, require explicit cross-repository issue and PR links.

Use issue forms, area/type/status labels, a PR template, build/link validation, and a lightweight PR traceability check. Keep architectural decisions in this directory.

## Consequences

Public documentation is reviewable and versioned with the work. Markdown authors need Node only for preview/build. GitHub Pages hosts static documentation; product ingestion, accounts, model calls, database operations, and audio production will require separate runtime infrastructure.

## Related work

See the [roadmap](../roadmap.md) for the bootstrap issue and remaining design work.
