# Contributing

Read the [working process](docs/process.md) and [development guide](docs/development.md).

1. Open a feature/task, research/decision, or bug issue. Include documentation links, affected code paths (or state “not implemented”), and verifiable acceptance criteria.
2. Discuss uncertainty in the issue. Update durable requirements in `docs/`; record architectural decisions in `docs/decisions/`.
3. Assign an owner and apply one status label. Create `codex/<issue>-<short-description>`.
4. Change documentation and code together. Add a backlink to the issue in the relevant document.
5. Open a PR using the template. Include `Closes #123` only when completing the issue; use `Refs #123` for partial work. Include a documentation URL and verification evidence.
6. Get review and passing checks. Merge into `main`; Pages publishes automatically. Verify the published result before calling deployment complete.

For code in another repository use `Refs owner/repo#123` or `Closes owner/repo#123` and link the specific source/PR back to this project's issue. Coordinate cross-repository completion explicitly.

No API key is needed for documentation. Never put secrets in Markdown, GitHub issues, or VitePress configuration; static site content is public.
