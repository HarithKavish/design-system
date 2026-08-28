# UI kit — harithkavish.com (public website)

A click-through recreation of the public site. Eight screens, one shell: **Home, Products,
Updates, About Us, Contact, Status, Sign In, Legal**. Every nav and footer link works; the
theme toggle swaps the whole token set.

## Source

Recreated from code, not screenshots:

- `https://github.com/HarithKavish/harithkavish.github.io` — `style.css` (the canonical
  token values), `site.js` (the React `h()` tree for every page), `site-data.js` (all copy,
  reproduced verbatim in `data.js`), `index.html` (theme bootstrap).

## Files

| File | What it is |
| --- | --- |
| `index.html` | Shell, router, theme state |
| `website-screens.jsx` | One function per page, plus the shared product/ecosystem/update grids |
| `data.js` | Real site content, copied from `site-data.js` |

## Notes

- The production site is 9 static HTML files that each set `data-page` and share one React
  bundle. This kit collapses that into in-memory routing; the visual result is identical.
- `/about-me.html`, `/dashboard.html`, `/service-desk.html` and the per-product pages reuse
  the Hero + panel-grid pattern already shown on About Us and Products, so they are not
  duplicated here.
