# Shell contract: shell types, nav links, and site settings

This is the reference for how a surface should use the shared shell — so
the next site with its own settings, or its own sidebar, doesn't reinvent
what already exists here.

## Two shell types, one set of rules

Every surface's primary chrome is either a **topbar** or a **sidebar**.
Both carry the same content — brand, primary nav, theme toggle, profile —
in the same floating-pill visual language (inset from the edge, rounded,
bordered, shadowed, backdrop-blurred). Only the orientation differs.

| | Topbar | Sidebar |
|---|---|---|
| CSS | `css/shell.css` — `.site-header` | `css/sidebar.css` — `.site-sidebar` |
| Shape | Full pill (`--radius-pill`) | Rounded rect (`--radius-xl`) — a pill stretched down a whole viewport just looks like two round caps on a rectangle |
| Collapse | N/A | `.site-sidebar--collapsed` — icon-only, toggled by `.sidebar-collapse-toggle` |
| Vanilla `<harith-header>` implementation | Yes (`compat/js/harith-shell.js`) | No — sidebar apps are React (Next.js) and implement their own component against this CSS contract; there is no vanilla sidebar custom element because no vanilla site currently needs one |
| Who uses it | Every static site, `account` | `forge` |

A surface's shell type is a fixed property of that surface, not something a
visitor toggles — pick whichever matches how the app's content is actually
shaped (a handful of pages → topbar; a workspace with many sections →
sidebar) and stay there.

## Nav links: only this site's own pages

`nav-links` (or, for a sidebar, its nav item list) should list **only pages
that exist within the current site**. Not the flagship, not another
ecosystem surface, not a page copied from a similar site's header. The
brand mark already links home (`brand-href`), so a single-view app (a
chat surface, a console, a catalog with no distinct sub-pages) should ship
**no nav links at all** rather than a placeholder "Home" link back
somewhere else.

Getting this wrong looks like Search's header did before this contract
existed: six links to `harithkavish.com/products.html`,
`/sign-in.html`, etc. — none of which exist on the search surface itself.

## Theme toggle: exactly one implementation per runtime, same look everywhere

- **Vanilla sites**: load `theme-toggle.js` from the CDN. Never write a
  custom toggle — every vanilla site already does this correctly.
- **React apps** (`account`, `forge`): can't run the vanilla script
  (DOM manipulation clashes with SSR/hydration), so each has its own
  `ThemeToggle` component — but it must still: use the `.theme-toggle`
  CSS class (pill, bordered, shadowed — never a flat/ghost button), show
  the same 🌙/☀️ emoji every other surface shows (not a custom SVG or a
  bare Unicode glyph), and read/write theme state through
  `window.HarithStore` (or a thin wrapper around it) so toggling in one
  tab is reflected everywhere else, and toggle the `.dark-mode` class on
  `<html>`/`<body>` in addition to `data-theme`, for parity with what
  `window.HarithTheme` does.

## Site settings: the profile dropdown, not a bespoke gear icon

A page that has its own settings (Search's background-image picker and
history toggle, say) contributes them to the **shared profile dropdown**
instead of building a standalone gear-icon menu. On `<harith-header>`:

```html
<harith-header ... site-settings-label="Search">
  <template class="site-settings-items">
    <button type="button" class="user-dropdown-action" id="background-button">Background</button>
    <label class="user-dropdown-row" for="history-toggle">
      <span>History</span>
      <input id="history-toggle" type="checkbox" role="switch">
    </label>
  </template>
</harith-header>
```

- `site-settings-label` names the section ("Search" → "Search settings").
- The `<template>`'s content is captured once (`harith-shell.js`'s
  `captureSiteSettings()`) and rendered into whichever dropdown the
  visitor currently sees — it is never itself visible, so it's safe to
  leave in place regardless of where the generic authored-content sweep
  (`adoptAuthored()`) puts the emptied `<template>` tag afterward.
- Style settings items with `.user-dropdown-action` (a button/link row) or
  `.user-dropdown-row` (a labeled toggle) — not a page's own bespoke menu
  CSS, so it reads as native to the dropdown.
- The page's own script keeps wiring its controls by ID exactly as before
  (`document.getElementById('background-button')`, etc.) — moving *where*
  an element lives doesn't break an ID-based listener.

**The dropdown exists whether or not the visitor is signed in.** Signed
in, it's the full menu: identity header, a "General settings" section
(account-wide — currently "Account settings" linking to
`account.harithkavish.com/settings`, and "Sign out"), then the site's own
section if it contributed one. Signed out, there's no identity or General
section to show, but a page with settings still gets a small gear-icon
trigger opening just its own section plus "Sign in" — a page's settings
must not become unreachable just because a visitor hasn't signed in
(Search's background/history controls always worked with no account).
A page with **no** settings and a signed-out visitor still gets today's
plain "Sign in to Nexus" link — nothing changes there.

## Known gaps, tracked separately

- **harithkavish.github.io** (the flagship) never consumed this CDN at
  all — its own `site.js` reimplements the shell, including its own
  theme toggle. Out of scope here; needs its own migration.
