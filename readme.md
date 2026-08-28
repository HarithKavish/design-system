# Harith Kavish Design System

Harith Kavish is an independent, one-person software business. It is not a portfolio and not
a startup: it publishes a small catalogue of specialized online services and an ecosystem of
single-purpose subdomains, each with one job, all sharing one design language and one
(future) account layer.

The public identity is deliberately faceless — no founder photograph, no team page, no
social proof. The site's own words: *"Specialized software services designed independently,
built thoughtfully, and continuously improved."*

## Products and surfaces represented here

| Surface | Address | What it is | Kit |
| --- | --- | --- | --- |
| Public website | `harithkavish.com` | Product catalogue, ecosystem index, updates, status, legal, contact | `ui_kits/website/` |
| Blog | `blog.harithkavish.com` | A publishing surface for humans *and* agents; index + long-form article view | `ui_kits/blog/` |
| Converse | chat app | Google-auth peer-to-peer chat, no backend, messages stored locally | `ui_kits/converse/` |
| Declared, not yet built | `api` · `search` · `sites` · `store` · `vm` · `vr` · Account · Dashboard · Service Desk | Named in the site data with a live/planned status | — |

## Sources this system was built from

Everything here is lifted from code, not from screenshots. The reader is not assumed to have
access; the links are recorded so they can be explored further — **going back to these
repositories is the best way to design accurately for this brand.**

- **https://github.com/HarithKavish/harith-design-system** — the published, versioned system
  (`v1.0.0/tokens.css`, `base.css`, `components.css`, `harith-shell.js`, `theme-toggle.js`).
  Served from `harithkavish.github.io/harith-design-system/v1.0.0/…` and still consumed live
  by Converse.
- **https://github.com/HarithKavish/harithkavish.github.io** — the current flagship site.
  `style.css` is the canonical token source for this design system; `site.js` is the React
  tree for every page; `site-data.js` holds all product copy. `logo.png` and `favicon.svg`
  came from here.
- **https://github.com/HarithKavish/blog** — `assets/blog.css`, the reading layer. Its code
  comments are the single clearest statement of the brand's layout philosophy anywhere.
- **https://github.com/HarithKavish/converse** — the chat product (`index.html`,
  `styles.css`, `app.js`).
- **https://github.com/HarithKavish/design-system** — the repo named in the brief. It is
  **empty (no commits)**; the published system lives in `harith-design-system`, which is what
  was read instead.

## Resolved inconsistencies

Two visual identities were live at once. This system picks one.

| | v1.0.0 shared theme (2025, still on Converse) | Current site (`harithkavish.com`, blog) | **This system** |
| --- | --- | --- | --- |
| Page | 3-stop pastel gradient `#e3f2fd → #f3e5f5 → #fff9c4` | `#f4f9fb` + one radial wash + 120px grid at 3% | Current site |
| Accent | `#38bdf8` sky (Converse: `#2563eb` / `#6dd3ff`) | `#123f50` deep slate-teal | Current site |
| Material | Heavy glassmorphism, `blur(10–20px) saturate(180%)` on every panel | Blur only on the sticky header/footer; cards are opaque surfaces | Current site |
| Type | `Segoe UI` (Converse: Space Grotesk) | `Aptos` stack, headings at 650 | Current site |
| Radius | 8/12/16/20px | 1.4rem cards, 1.1rem small, 999px controls | Current site |
| Motion | `translateY(-4px) scale(1.08)` + coloured glow on hover | `translateY(-1px)`, 160ms ease | Current site |
| Shell | Fixed header **and** footer, 4.5rem each, emoji theme toggle | Sticky header, static footer, worded toggle | Current site |
| Theme switch | `body.dark-mode` class | `:root[data-theme='dark']` | Current site |

**What was kept from v1.0.0:** the idea of a versioned shared theme consumed by every
subdomain; the named spacing / radius / z-index / transition scales (re-based on the real
values); the three-state status vocabulary (live / in progress / planned) and the status dot;
theme persistence in `localStorage`; and the header-plus-footer shell contract.

**What was dropped:** the pastel gradients, the glass panels, the sky-blue accent, the
`scale()` hovers, the coloured glows, the chat-widget gradient (`#667eea → #764ba2`), and the
emoji toggle. The site's own changelog calls this out — *"Legacy integrations removed: old
chat widgets, tracking hooks, and the previous routing structure were removed."*

The one screen that is **not** a colour-faithful recreation is `ui_kits/converse/` — it shows
Converse *after* migration. Its README says so at the top.

---

# Content fundamentals

**Declarative, third person, full stops.** Copy states what a thing is and stops. Headlines
are noun phrases terminated with a period, not verb phrases with an exclamation mark:
"Products." · "Status." · "Specialized software services." · "Recent work, not a blog."

**It says what it is by saying what it isn't.** A recurring move: *"A short release feed is
more useful than a traditional blog for a small software business."* · *"The site avoids
portfolio language, startup language, and unnecessary noise."* · *"not a startup pitch deck
or a freelancer profile."*

**Person.** The business is "Harith Kavish" or "the business" — third person, even on
About Me: *"Harith Kavish is the founder and sole creator."* First-person plural appears only
inside a `NotePanel`, where the voice is allowed to reflect: *"Software should get more useful
over time."* Second person is used only for instructions to the reader: *"Use the smallest
possible path for the conversation you need."* No "we're excited", ever.

**Casing.** Sentence case in prose and titles. Uppercase is reserved for eyebrows, pills,
and small labels, always with wide tracking. Nav labels are Title Case ("About Us",
"Sign In") because they are names of pages. Handles and tags keep the casing their owner
chose — the blog explicitly overrides the pill's uppercase for this reason: *"a handle is a
name… the shared pill uppercases, which turns a long agent handle into shouting."*

**Length.** Section leads are one sentence. Card bodies are one or two. Principles are five
to nine words: *"No custom forks."* · *"Improvements benefit every customer."* Nothing is
padded to fill a box; an empty-feeling card gets less content, not more.

**Vocabulary.** *calm · careful · steady · durable · quiet confidence · stewardship ·
long-term · minimal surface area · one job · shared design language.* Avoided: *powerful,
seamless, revolutionary, cutting-edge, journey, unlock, delight, blazing-fast.*

**Emoji: no.** The only emoji in the entire codebase are `🌙`/`☀️` in the deprecated v1 theme
toggle — replaced here by the words "Dark mode" / "Light mode".

**Status is a word, not a colour.** "Live", "In progress", "Planned", "Ready" — written out,
in a pill. Never a green tick or a red cross.

---

# Visual foundations

## Colour

One neutral field, one accent, three muted status tones. Light is the default and dark is a
complete token swap on `:root[data-theme='dark']`, never a filter.

- **Field** — `--bg #f4f9fb`, a very pale cool grey-blue, with a single
  `radial-gradient(circle at top, #e4eef2, transparent 42%)` wash. That is the *only*
  gradient in the system.
- **Surfaces** — `--surface rgba(255,255,255,.86)` for cards, `--surface-strong #ffffff` for
  raised elements (card links, mobile nav, factbox cells), `--surface-soft rgba(255,255,255,.58)`
  for hover fills and inline notes.
- **Ink** — `--text #182028`, `--muted #5a646d`. Muted carries leads, card bodies, dates,
  labels — the majority of the running text.
- **Accent** — `--accent #123f50`, the deep slate-teal of the HK mark. `--accent-strong
  #081f29` exists only as the primary button's hover. In dark mode the accent *inverts* to
  `#cedfe6`, so the primary button becomes light-on-dark.
- **Line** — `--border rgba(24,32,40,.11)`. One hairline value for every divider in the system.
- **Status** — desaturated green `#267f57`, amber-brown `#8b6a31`, each with a ~10% tint and
  ~20% border. No signal red anywhere; the only warm-red is the offline dot.

Imagery: there is essentially none. No photography, no illustration, no stock. The brand is
type, hairlines and one gradient monogram. Where an image would go, the surface stays empty
or a factbox carries the information instead.

## Type

`--font-sans: "Aptos", "Segoe UI", "Helvetica Neue", Arial, sans-serif` — one family for
everything, display through tabular figures.

- **Display** — hero `clamp(2.8rem, 6.5vw, 5.3rem)` / line-height `0.94` / tracking `-0.05em`
  / weight **650**, capped at `11ch` so it always breaks into a stack of short lines.
  Article titles `clamp(2.4rem, 5.5vw, 4rem)` at `18ch`.
- **Headings** — section titles `clamp(1.6rem, 3vw, 2.2rem)` at `-0.03em`; card titles
  `1.2rem`; panel titles `1.05rem`. Prose `h2` carries a full-column hairline underneath,
  `h3` does not.
- **Body** — `1.02rem` / `1.6`, measure `68ch`, leads `62ch`.
- **Labels** — eyebrows `0.82rem` uppercase at `0.18em`; small labels `0.74rem` at `0.12em`.
- **Weights** — 400 body, 600 controls and active nav, **650** every heading. 650 (not 600,
  not 700) is the house heading weight and the most identifiable type decision in the system.
- **Figures** — `font-variant-numeric: tabular-nums` on every date, count, stat and TOC number.

## Spacing and layout

- One container: `min(1160px, calc(100% - 2rem))`, shared by header, main and footer, so the
  brand, the hero title and the article title all line up on the same left edge.
- Section rhythm `clamp(3rem, 7vw, 5.25rem)`; main padding `clamp(2rem, 5vw, 4rem)` top.
- Grid gap is a flat `1rem` everywhere; card padding `1.25rem`.
- Grids: 3-up (`.card-grid`), 4-up (`--four`), a 1.4fr/0.9fr `.split-grid`, and the article's
  three-track `232px / 68ch / auto`. All collapse to 2 columns at 1040px and 1 at 760px.
- Fixed elements: **only** the sticky header (and, on article pages, the 2px progress hairline
  riding its bottom edge). The footer is static. No floating action buttons — the v1 chat
  bubble was removed.

## Borders, radii, cards

Cards are a `--surface` fill, a `1px` hairline border, `1.4rem` radius and the resting
shadow. Small cards, notes, the TOC panel and bubbles use `1.1rem`; post rows `1rem`;
anything interactive that is pill-shaped is `999px`. There are no coloured left borders, no
accent-tinted card headers, and exactly one dashed border in the system (the signed-in
`UserCard`, marking it as state rather than content).

Where a group of values needs structure, the system prefers a **hairline grid over separate
boxes**: `Factbox` and `StatRow` set `gap: 1px` on a `--border` background so the gap *is* the
rule. The contents rail is a single `border-left`, not a panel. The blog CSS states the
principle outright: *"structure carried by a single rule, not a box"* and *"the Wikipedia
contents panel without the panel."*

## Shadow, transparency, blur

Two shadows, both nearly invisible: `0 12px 30px rgba(15,23,42,.05)` at rest and
`0 16px 36px rgba(15,23,42,.08)` on hover. Nothing else. No inner shadows, no glows, no
coloured shadows (the v1 sky-blue `box-shadow` on hover is gone).

Transparency is used for *layering over the page field*: card surfaces at 86%, hover fills at
58%, header/footer plates at 84–92%. Blur is used **only** on the sticky header
(`blur(16px)`) and the footer (`blur(12px)`) — never on cards, never on modals. Glassmorphism
as a look is retired.

## Motion, hover, press, focus

- One duration (`160ms`) and one curve (`ease`).
- **Hover** — buttons, card links, author chips and the theme toggle lift `translateY(-1px)`;
  cards, blog cards and the feature lift `-2px` and step up to the strong shadow. Nav links
  and post rows fill with `--surface-soft` instead of moving. The primary button darkens to
  `--accent-strong`. No scale, no rotation, no glow.
- **Press** — nothing separate. The system has no distinct active state; the 1px lift
  returning to 0 reads as the press.
- **Focus** — `2px solid var(--accent)` with `3px` offset, on `:focus-visible` only. Input
  focus instead swaps the border to the accent and raises the shadow — no ring, no glow.
- **Selected** — an accent *border*, never an accent fill (`AuthorChip.is-active`,
  `RecentChatItem.is-active`).
- Keyframe animations: `fadeIn`, `slideUp`, `slideDown` existed in v1 and are unused here.
  All decorative motion is dropped under `prefers-reduced-motion`.

## Backgrounds and texture

One texture in the whole system: a 120px × 120px line grid at 3% grey, fixed, pointer-events
none, masked out with `linear-gradient(to bottom, rgba(0,0,0,.38), transparent 80%)` so it
fades before it reaches the fold. It should be felt, not seen. No noise, no grain, no
repeating patterns, no full-bleed imagery.

---

# Iconography

**There is no icon set, and that is deliberate.** Nothing in any of the four repositories
loads an icon font, an SVG sprite, or an icon library. Nothing here adds one. The brand's
approach, in order of preference:

1. **Words.** Controls are labelled in text wherever there is room: "Dark mode", "Send",
   "Sign out", "Open product page", "Visit blog.harithkavish.com".
2. **Unicode characters**, used sparingly as affordances: `→` (submit a peer address), `←`
   (back, on narrow chat layouts), `↗` (external link, v1), `∨` (expand, v1).
3. **CSS-drawn shapes** when a glyph is genuinely needed. Two live examples: the hamburger is
   three 2px `<span>` bars that rotate into an ✕; the search magnifier is a 0.72rem circle
   with a rotated 1.5px pseudo-element handle — the blog CSS notes it is drawn *"from two
   shapes, so the page carries no icon asset."*
4. **A tinted initial** where an avatar is missing (`RecentChatItem`), never a placeholder
   silhouette.
5. **Status is a pill or a 0.62em dot** — not a tick, cross, or warning triangle.

Emoji are not used (see Content fundamentals). If you are building something that truly needs
an icon set, ask first; the honest answer today is that the brand doesn't have one, and
adding Lucide or Heroicons would be a visible new decision rather than a match.

## Assets in `assets/` — actually at project root

- **`logo.png`** (1024×1024) — the HK monogram, a light-to-deep slate-blue gradient on
  transparent. Used at `2.6rem` in the header. Never recoloured, never placed on a dark
  plate, never cropped to a single letter.
- **`favicon.svg`** — the browser mark, as shipped.

No other imagery exists upstream, so none was invented. Where a brand illustration would go,
this system leaves type.

---

# Index

## Root

| File | What it is |
| --- | --- |
| `readme.md` | This document: context, sources, content and visual foundations, iconography, index |
| `SKILL.md` | Agent-skill front matter, for use outside this project |
| `github.md` | Source-repo association and screen map, for one-click upstream sync |
| `styles.css` | **The one file consumers link.** `@import` list only |
| `base.css` | Reset, page field, grid texture, link and focus behaviour |
| `thumbnail.html` | Homepage tile |
| `logo.png`, `favicon.svg` | Real brand assets, copied from `harithkavish.github.io` |

## `compat/` and `v1.0.0/` — the retired distribution

`HarithKavish/harith-design-system` published seven asset files and is now
retired. Its consumers are served from this repository instead, at the same
filenames, from GitHub Pages:

`https://harithkavish.com/design-system/v1.0.0/{tokens,base,components,utils}.css`
and `.../{theme-toggle,harith-shell,widget-loader}.js`

`v1.0.0/` is **generated — do not edit it by hand.** Run `bash compat/build.sh`
after changing any token, `css/` file or `compat/` source.

| File | What it is |
| --- | --- |
| `compat/build.sh` | Assembles `v1.0.0/` from the canonical sources |
| `compat/legacy-vars.css` | Redefines all 95 v1.0.0 custom properties in terms of current tokens |
| `compat/legacy-shell.css` | Aliases the old `.shared-*` shell classes onto current `.site-*` styling; adds the Google button and dropdown |
| `compat/legacy-utils.css` | The v1.0.0 utilities, unchanged — they reference only legacy names, which the shim supplies |
| `compat/js/*.js` | The shell web components and theme toggle |

### The shell custom elements

`harith-shell.js` defines two elements. Both render into the **light DOM**, so the
page's own CSS styles them and no shadow boundary gets in the way.

```html
<harith-header
    site-title="Nexus"
    site-tagline="Connected systems. One place."
    brand-href="https://harithkavish.com/"
    brand-mark="/logo.png"
    nav-links='[{"label":"Home","href":"https://harithkavish.com/"}]'>
</harith-header>

<harith-footer
    copyright-text="Harith Kavish"
    links='[{"label":"Home","href":"https://harithkavish.com/"}]'>
</harith-footer>
```

`<harith-header>`

| Attribute | Default | What it does |
| --- | --- | --- |
| `site-title` | `Harith Kavish` | The brand name |
| `site-tagline` | — | Descriptor under the name |
| `brand-href` | `/` | Where the brand links |
| `brand-mark` | — | Logo image beside the name; omitted when unset |
| `nav-links` | `[]` | JSON array of `{label, href}` or `{label, action}` |
| `google-client-id` | — | Renders the Google sign-in slot |
| `reading-progress` | — | Present: renders the progress bar the page drives via `[data-progress]` |

Anything authored **inside** `<harith-header>` is treated as a surface-specific
header action and is moved into `.site-header__actions`, before the theme
toggle. The real nodes are relocated rather than re-serialised, so listeners the
page attached to them survive a re-render:

```html
<harith-header site-title="Search">
    <div class="settings"><button id="settings-toggle">⚙</button></div>
</harith-header>
```

An entry with `action` instead of `href` renders a button and dispatches a
bubbling `harith-shell-action` event carrying that action.

`<harith-footer>`

| Attribute | Default | What it does |
| --- | --- | --- |
| `copyright-text` | `Harith Kavish` | Name after the year, which is computed |
| `links` | `[]` | JSON array of `{label, href}` |

The header always renders its own `#darkModeToggle`; `theme-toggle.js` binds it
through one delegated listener. A page must not add a second toggle of its own.

Two deliberate behavioural changes from v1.0.0:

- The header is `position: sticky`, not `position: fixed`, so it occupies flow.
  Consumers that padded the body to clear the old fixed header must drop it.
- `theme-toggle.js` sets `data-theme` **and** the legacy `.dark-mode` class, so
  this system's tokens and consumers' own `.dark-mode` rules both work. It also
  owns the toggle click through one delegated listener; in v1.0.0 both scripts
  bound the same button, so every click toggled twice and dark mode never
  engaged.

## `tokens/`

`fonts.css` · `colors.css` · `status.css` · `typography.css` · `spacing.css` · `radius.css` ·
`elevation.css` · `motion.css` · `layers.css` — 133 custom properties, base values plus
semantic aliases, all reachable from `styles.css`.

## `css/`

The class layer the components render into, lifted from the production stylesheets:
`shell.css` (header, brand, nav, footer) · `core.css` (hero, sections, buttons, pills, cards,
panels, status, hairline grids) · `reading.css` (article, rail, prose, infobox, index) ·
`messaging.css` (the migrated Converse surfaces).

## `components/` — 35 components

**`shell/`** — `Brand` · `NavLink` · `ThemeToggle` · `SiteHeader` · `SiteFooter`

**`core/`** — `Button` · `Pill` (with `statusTone`) · `CardLink` · `Card` · `SectionHead` ·
`Hero` · `Panel` · `NotePanel` · `PrinciplesList` · `StatusRow` · `StatusDot` · `Factbox` ·
`StatRow`

**`reading/`** — `ArticleHead` · `Toc` · `Prose` · `Infobox` · `Note` · `Feature` ·
`BlogCard` · `PostItem` · `SearchField` · `AuthorChip` · `ReadingProgress`

**`messaging/`** — `UserCard` · `InputWithButton` · `RecentChatItem` · `MessageBubble` ·
`MessageComposer` · `ChatHeader`

Each has a `.d.ts` props contract and a `.prompt.md` with a one-line "what & when", a usage
example, and its variants. Each directory has one `@dsCard` HTML showing every state.

### Intentional additions

`--scrim` — the page field at 62%, in both themes. `search` had defined it
locally for the panel it lays over a user-supplied background, and any lightbox
or dialog elsewhere needs the same value. A scrim reads as the page dimming, not
as a grey wash, which is why it is derived from `--bg` rather than from black.

`code`, `kbd`, `samp` and `pre` are styled in `base.css`. `--font-mono` was
defined from the start with nothing consuming it, so every surface needing to
show an endpoint or a command invented its own treatment — `api` had hard-coded
`#22d3ee` on `#0f172a`, from the retired palette. Inline code takes the pill
surface tinted with the accent; a block takes the card surface and hairline, and
resets the inline treatment so the two do not stack.

`<harith-header>` renders a linked brand with an optional mark (`brand-href`,
`brand-mark`), matching `components/shell/Brand.jsx` and the existing
`.brand__mark` styling. Before this the web component emitted a bare
`<div class="brand">` with text only, so the two implementations of one
component disagreed and no consumer of the distribution could show its logo.


The inventory above is drawn entirely from the sources. Four items are compositions the
source expressed as ad-hoc markup rather than a named component, promoted here so consumers
reuse them consistently: `Factbox` and `StatRow` (both exist as CSS-only patterns in the blog
layer), `PrinciplesList` (a class in the site CSS), and `Prose` (the blog's `.prose` scope).
No primitive was invented — there is no Toast, Avatar, Tooltip, Tabs, Accordion or Dialog
here, because there is none upstream.

## `guidelines/` — 18 specimen cards

Colours (surfaces, ink and line, accent, status, dark mode) · Type (display, body and lead,
eyebrows and labels, weights) · Spacing (scale, container and rhythm) · Shape (radii,
elevation, hairline structures) · Motion · Brand (the mark, page field, voice).

## `templates/`

`ecosystem-page/` — a ready-to-edit page in the house layout: sticky shell, hero with two
actions, a section head, a three-up card grid with all three status tones, and the
split-grid + note-panel pattern. Consuming projects start here.

## `ui_kits/`

| Kit | Screens |
| --- | --- |
| `website/` | Home, Products, Updates, About Us, Contact, Status, Sign In, Legal — all navigable |
| `blog/` | Discover index (live search, author filters) and the article view with rail, infobox and progress |
| `converse/` | Sign-in, then the two-panel conversation — **migrated**, see its README |

Each kit has its own README naming the exact upstream files it was recreated from.

---

## Known substitution — please confirm

`Aptos` is the first family in the production font stack. It is a system font on Microsoft
platforms and none of the source repositories ship a webfont for it, so no font binary could
be copied in. No substitute family is loaded — `Aptos` stays first and machines that have it
render correctly; everywhere else the stack falls back to Segoe UI / Helvetica Neue, which is
exactly what the production sites do today. **If you have a licensed Aptos webfont, upload it
and add its `@font-face` to `tokens/fonts.css` — then the system is exact on every machine.**
