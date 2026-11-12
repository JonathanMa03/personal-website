# Styling guide

Select your presets with `data-color` and `data-font` on the `<html>` element in `index.html`. All shipped preset files are already linked there. Selection is site-wide and fixed by the owner, with no visitor preferences or storage required.

| Palette | Character |
| --- | --- |
| `ocean` | Warm paper, blue-green accents |
| `forest` | Soft cream, botanical greens |
| `plum` | Pale rose, muted plum accents |
| `slate` | Cool gray, restrained blue accents |
| `terracotta` | Warm ivory, earthy rust accents |
| `ochre` | Cream, deep golden-brown accents |
| `ink` | White, monochrome charcoal accents |

| Font | Heading / body |
| --- | --- |
| `editorial` | Georgia serif / system sans-serif |
| `modern` | System sans-serif / system sans-serif |
| `classic` | Palatino serif / Georgia serif |
| `humanist` | Trebuchet MS sans-serif / Segoe UI or Candara sans-serif |
| `literary` | Baskerville serif / Palatino serif |
| `technical` | System monospace / system sans-serif |

Fonts fall back to what is installed on each visitor's device; no fonts are downloaded.

## Suggested combinations

All seven palettes work with all six font presets (42 combinations). Try `ocean` + `editorial` for the default, `forest` + `humanist` for a softer feel, `plum` + `classic` for a traditional portfolio, `slate` + `modern` for a professional profile, `terracotta` + `literary` for a warm reading experience, `ochre` + `editorial` for a paper-like style, or `ink` + `technical` for a minimal technical portfolio.

```html
<html lang="en" data-color="terracotta" data-font="literary">
```

## Add a palette

Copy a file in `colors/`, change its selector to `[data-color="your-palette"]`, and adjust all seven tokens: `--background`, `--surface`, `--text`, `--muted`, `--accent`, `--on-accent`, and `--border`. Add a stylesheet link in `index.html`, then select it with `data-color="your-palette"`. Keep body text and links readable on their backgrounds and check visible focus states.

## Add a font preset

Copy a file in `fonts/`, use a unique `[data-font="your-font"]` selector, and set `--font-heading` and `--font-body`. Include generic serif, sans-serif, or monospace fallbacks. Link it in `index.html`, then set the matching attribute. If you self-host licensed fonts, put them in `public/fonts/` and define `@font-face` with `font-display: swap`.

## Change layout

Edit `main.css` for spacing, grids, typography sizes, and components. The main responsive breakpoint is 760px. Test long names, publication titles, narrow screens, zoom, and keyboard focus after changing layouts.
