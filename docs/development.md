# Development and verification

## Prerequisites

Use Node.js 24 and npm. `.nvmrc` records the development version. No database, API credential, Docker daemon, or AI subscription is needed to build these docs.

```sh
nvm use
npm ci
npm run docs:dev
```

The development server prints its URL. The site uses `/awareness-briefing/` as its base path to match GitHub Pages.

## Verify

```sh
npm run check
npm run docs:preview
```

`check` produces the production site with VitePress's default dead-link validation, then checks generated internal links, asset URLs, and fragment targets. Preview serves the built output; open the printed URL with `/awareness-briefing/` appended. Review navigation, local search, mobile layout, theme switching, and keyboard focus when changing the UI.

VitePress 1.6.4 is pinned for a stable documentation API. Its Vite dependency is overridden to patched version 6.4.5; recheck compatibility and `npm audit` when updating either dependency.

Commit `package-lock.json` for reproducible dependency installation. Build output and local caches are ignored.

## Publishing

Pull requests run the build/link check and a PR-description traceability check. Pushes to `main` build and publish through the official Pages actions. GitHub repository Settings → Pages must use GitHub Actions as the source. Deployment needs `pages: write` and `id-token: write`; pull-request builds have read-only repository access and do not publish.

The canonical public URL is [Awareness Briefing](https://kaw393939.github.io/awareness-briefing/). If deployment fails, inspect the Actions run before changing the site configuration. A green build alone does not confirm that Pages deployed.

Deployment follows the [VitePress 1 deployment guide](https://vuejs.github.io/vitepress/v1/guide/deploy). Hosting is static: keep all provider secrets and private research out of site files and configuration.
