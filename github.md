repo: HarithKavish/design-system
branch: main

## Last sync

date: 2026-08-28T00:00:00Z

### Updated in this project

- Unified the v1.0.0 token set with the current harithkavish.com stylesheet; the site values win.
- Rebuilt 35 components as React primitives across shell, core, reading and messaging.
- Added UI kits for the public website, the blog, and Converse.
- Recorded the glassmorphism-to-calm migration in readme.md under "Resolved inconsistencies".
- Published this system to HarithKavish/design-system and retired
  harith-design-system, which now holds only a pointer README.
- Added compat/ and the generated v1.0.0/ distribution, so the seven asset
  files the retired repo served are published from here, rebuilt on the
  current tokens.
- Repointed ai-lab and converse at the new URLs and verified both render in
  light and dark; dropped converse's 80px body padding, which had reserved
  space for the old position:fixed header.

## Also read from

- HarithKavish/harithkavish.github.io (main) — style.css, site.js, site-data.js, index.html, logo.png, favicon.svg
- HarithKavish/blog (main) — assets/blog.css, index.html
- HarithKavish/converse (main) — index.html, styles.css, README.md
- HarithKavish/harith-design-system (main) — retired; its v1.0.0 assets are
  reproduced from compat/ and remain in that repository's git history
- HarithKavish/ai-lab (main), HarithKavish/converse (main) — index.html,
  styles.css; both consume the v1.0.0 distribution published from here

## Screen map

| Project file | Built from |
| --- | --- |
| tokens/*.css, base.css | harithkavish.github.io/style.css; harith-design-system/v1.0.0/tokens.css, base.css |
| css/shell.css, css/core.css | harithkavish.github.io/style.css |
| css/reading.css | blog/assets/blog.css |
| css/messaging.css | converse/styles.css, converse/index.html |
| components/shell/*, components/core/* | harithkavish.github.io/site.js |
| components/reading/* | blog/assets/blog.css |
| components/messaging/* | converse/index.html, converse/app.js structure |
| ui_kits/website/* | harithkavish.github.io/site.js, site-data.js |
| ui_kits/blog/* | blog/assets/blog.css, blog/index.html |
| ui_kits/converse/* | converse/index.html, converse/styles.css |
| assets: logo.png, favicon.svg | harithkavish.github.io |
