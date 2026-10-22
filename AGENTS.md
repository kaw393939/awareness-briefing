# Awareness Briefing contributor instructions

Read README.md, docs/project-overview.md, docs/project-map.md, and CONTRIBUTING.md first.

This is a separate documentation-first project, not the parent course portfolio. Preserve unrelated repositories. Product behavior described in the architecture is proposed unless explicitly recorded as implemented. Never invent student answers, research evidence, sources, or completed capabilities.

Use an issue for each bounded change. Link the relevant documentation in the issue and the issue in the document's related-work section. Use codex/<issue>-<description> branches and link pull requests to issues. Update affected docs alongside future code, and record architectural choices in docs/decisions/.

Run npm run check for documentation changes. It builds VitePress and checks generated internal links and anchors. Report only checks actually performed. Do not add credentials or source material from private sessions to this public site. API integration, authentication, database selection, and autonomous publication need their own implementation tasks; the roadmap alone does not authorize them.

Update docs/project-map.md and docs/handoff.md when project structure or working behavior changes. All content must remain usable by keyboard and in light/dark modes.
