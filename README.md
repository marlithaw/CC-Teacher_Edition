# Matchbook Learning · Culture Camp — Teacher Edition

Teacher-facing resource site for the Matchbook Learning Culture Camp launch:
ten daily lesson bundles (Days 1–10) and five schoolwide system bundles
(Arrival & First Five, Hallway Travel, Restroom, Cafeteria, Recess & Playground).

## Deployment

This repository root is the GitHub Pages deployment root.

- `index.html` — the teacher dashboard (two primary sections: 10-Day Lessons and Schoolwide Systems).
- `resources/` — professional HTML resource pages, teaching decks, DOCX teacher guides, and shared CSS/JS.
- `.nojekyll` — required. The decks load assets from `resources/_shared/`, which GitHub Pages' default Jekyll build would otherwise exclude because of the leading underscore.

All paths are relative, so the site works from a project subpath
(`https://<user>.github.io/<repo>/`) or a custom domain without changes.

## Content notes

- Dashboard links target generated `.html` pages only — never raw Markdown.
- The canonical Markdown sources, design system, link map, and QA records live
  in the offline handoff bundle (`02_CLAUDE_DESIGN_HANDOFF`, `03_QA`,
  `04_BUILD_TOOLS`), which is intentionally not deployed.
- The Restroom bundle remains labeled **Ratification needed**: no dedicated
  2026–2027 Restroom Operating Guide exists yet, and procedures must be
  ratified before that bundle is called final.
