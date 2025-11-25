# Copilot / AI Agent Instructions for this repository

This repository is a static documentation site built with MkDocs (Material for MkDocs). The guidance below highlights repository-specific structure, development workflows, and concrete examples so an AI coding agent can be productive immediately.

1. Big picture
- The site is an MkDocs site whose config is `mkdocs.yml` at the repo root. Content lives under `docs/` and static assets under `docs/assets/`.
- The `overrides/` directory contains theme customizations (templates and partials) for the Material theme—see `overrides/main.html` and `overrides/partials/comments.html` for examples.
- Navigation and site structure are driven by the `nav` section in `mkdocs.yml` — update that when adding/removing top-level pages.

2. Build / deploy / CI
- CI workflow: `.github/workflows/ci.yml` installs Python, required mkdocs plugins, and runs `mkdocs gh-deploy --force` to publish the site.
- The CI explicitly installs these Python packages; mirror these locally when developing:
  - `mkdocs-material`
  - `pillow`
  - `cairosvg`
  - `mkdocs-git-authors-plugin`
  - `mkdocs-git-revision-date-localized-plugin`
  - `mkdocs-glightbox`
  - `mkdocs-git-committers-plugin-2`
  - `mkdocs-redirects`
  - `mkdocs-material[imaging]`

- Local dev: install the above packages (or replicate CI steps) then run:
```
mkdocs serve
```
to preview the site at `http://127.0.0.1:8000`.

3. Project-specific conventions & patterns
- Content: markdown pages live at `docs/` (e.g., `docs/devops_projects/11micro.md`). Use the same relative structure and naming conventions when adding new sections.
- Assets: images and other static files go under `docs/assets/` and are referenced in pages relative to the `docs/` root (e.g., `assets/images/favicon.png`).
- Theme overrides: `overrides/` is the custom theme directory configured in `mkdocs.yml` via `theme.custom_dir`. Editing templates here changes the site layout.
- Extra CSS/JS: Additional styling and scripts are in `docs/stylesheets/extra.css` and `docs/javascripts/` — keep small UI/behavior edits here. The `mkdocs.yml` lists the extra files loaded on every page.
- Plugins: The site relies on several MkDocs plugins (tags, blog, git-committers, redirects, glightbox, etc.). Changes to plugin configuration must go into `mkdocs.yml` and may require installing the corresponding Python package.

4. Integration points & notable automation
- `mkdocs.yml` contains `edit_uri: edit/main/docs/` — GitHub "Edit" links target the `docs/` folder.
- CI does a `sed` replacement to substitute `{{ current_year }}` in `mkdocs.yml` before building; avoid changing that token without updating the CI step.
- `.github/workflows/ci.yml` uses sparse-checkout to include only `docs`, `overrides`, `blog`, and `mkdocs.yml` — changes outside those paths will not be deployed by the existing workflow unless the workflow is updated.

5. How to make common changes (examples)
- Add a new doc page: create `docs/<section>/<page>.md`, add the path to the `nav` in `mkdocs.yml`.
- Add an image: put it in `docs/assets/images/` and reference as `assets/images/<name>` in markdown.
- Change layout/partials: update files under `overrides/` and preview with `mkdocs serve`.
- Add plugin configuration: update `mkdocs.yml` and ensure the CI `pip install` list includes the new plugin package.

6. What not to change without coordination
- Do not rename `docs/`, `overrides/`, or move `mkdocs.yml` without updating CI and `edit_uri` accordingly.
- Avoid removing the `{{ current_year }}` placeholder in `mkdocs.yml`—CI depends on it.

7. Troubleshooting hints
- If pages render differently locally vs GitHub Pages, verify installed plugin versions match CI; the Actions workflow installs specific packages.
- If build fails in CI, check the action logs for missing Python packages and ensure `pip install` steps in `.github/workflows/ci.yml` are up to date.

8. Where to look for examples in this repo
- `mkdocs.yml` — full site configuration and plugin list.
- `docs/` — all content and assets.
- `overrides/` — theme templates and partials.
- `.github/workflows/ci.yml` — exact CI build & deploy steps.
- `docs/javascripts/tablesort.js` and `docs/stylesheets/extra.css` — examples for small client-side scripts and styling.

If anything here is unclear or you want more detail on a specific area (plugin configs, deploy process, or local environment setup), tell me what to expand and I'll iterate.
