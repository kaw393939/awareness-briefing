# Awareness Briefing

A proposed news discovery system that expands awareness beyond past searches, preserves topic history, and produces a shared daily briefing and podcast, with personalized subscriber editions.

**Current state:** documentation and planning only. No ingestion service, database, subscriber login, AI integration, or podcast generator has been implemented.

- [Documentation website](https://kaw393939.github.io/awareness-briefing/)
- [Project overview](docs/project-overview.md)
- [Architecture](docs/architecture.md)
- [Roadmap and tracked work](docs/roadmap.md)
- [Contribution workflow](CONTRIBUTING.md)
- [Project map and handoff](docs/project-map.md)
- [Development and verification](docs/development.md)
- [Issues](https://github.com/kaw393939/awareness-briefing/issues)

## Run the documentation

Use Node.js 24 (`nvm use` if available).

```sh
npm ci
npm run docs:dev
```

```sh
npm run check
npm run docs:preview
```

GitHub Actions validates pull requests and publishes `main` to GitHub Pages. Documents are local Markdown files in `docs/`; edit them in the same pull request as the work they explain.
