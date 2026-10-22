# Editing this template with Codex or another agent

## Purpose

Maintain a lightweight academic portfolio template for GitHub Pages, created by Jonathan Ma (https://github.com/JonathanMa03). Help each user personalize it without adding unnecessary infrastructure.

## File ownership and content

- Edit `index.html` for page content, metadata, navigation, and active `data-color` / `data-font` values.
- Put publicly downloadable files in `public/documents/`, images in `public/images/`, and logos in `public/logos/`.
- CV and resume use `public/documents/cv.pdf` and `public/documents/resume.pdf`. Replace these files to personalize downloads; if renaming, update both Open and Download links in the matching HTML panel. Keep both panels accessible without JavaScript.
- Social links are grouped at `EDIT SOCIAL LINKS` in `index.html`. Update URLs there and preserve text labels and the Font Awesome icon license.
- Keep template attribution in `LICENSE`. Preserve the creator footer by default; distinguish the site owner from the template creator.
- Sample biography, publications, news, and courses are placeholders. Never invent credentials, affiliations, publications, or contact details for the user. Ask for missing facts or retain clearly marked placeholders.
- Do not publish private material. `public/` is not a security boundary, and all tracked files may be accessible.

## Implementation rules

- Use plain HTML/CSS and minimal progressive-enhancement JavaScript. No build step is required. Do not add a framework or dependency unless the task calls for it.
- Keep local URLs relative (`public/images/photo.jpg`, not `/public/images/photo.jpg`) so project Pages sites work at `/repository-name/`.
- Preserve `.nojekyll` and branch-root GitHub Pages deployment compatibility.
- Color variables live in `styling/colors/`; font variables live in `styling/fonts/`. Scope new presets with `[data-color="name"]` or `[data-font="name"]`, then link the stylesheet in `index.html` and document the option.
- Keep semantic headings, descriptive link text and image alternatives, visible keyboard focus, sufficient contrast, and responsive layouts. Respect reduced-motion preferences.
- Keep navigation and core content usable with JavaScript disabled. Don't introduce external trackers or remote font dependencies by default.
- Add HTML pages for website content; Markdown is documentation only. For nested pages, adjust relative links to the root resources.

## Verification and handoff

1. Run `npm run check` (Node 18+; no installation needed).
2. Preview with `python3 -m http.server 8000 --bind 127.0.0.1` and review desktop/mobile layout and keyboard navigation when a browser is available.
3. Check downloads, contact links, metadata, and any edited theme combinations. Check links under a repository subpath as well as at the root.
4. Update README or styling documentation if setup, file structure, or presets change.
5. Report changes and actual verification results. Don't claim browser testing or deployment if not performed. Don't push, deploy, or change repository settings unless requested.
