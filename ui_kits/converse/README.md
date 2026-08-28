# UI kit — Converse (chat app)

Sign in, then a two-panel conversation view: identity and recent chats on the left, the
thread and composer on the right. Sending a message appends it locally, and typing a new
email address opens an empty thread — the same behaviour the real app has, minus the
Google Identity round trip.

## Source

- `https://github.com/HarithKavish/converse` — `index.html` (panel structure, the
  `input-with-button` start form, the recent-chats list, the message form),
  `styles.css` (layout, bubble geometry, breakpoints), `README.md` (behaviour and limits).

## Migration notice — read this

**This is the one screen in the design system that is not a faithful colour recreation.**
The live Converse still loads `harith-design-system/v1.0.0`: a pastel three-stop gradient
page (`#e3f2fd → #f3e5f5 → #fff9c4`), heavy glassmorphism (`blur(10px) saturate(180%)`),
a `#2563eb` / `#6dd3ff` accent and Space Grotesk. None of that exists anywhere else in the
ecosystem any more.

Layout, structure, geometry and behaviour are reproduced exactly. Colour, type, radius,
shadow and motion have been moved onto the unified tokens, so this kit shows what Converse
looks like *once migrated*. The old values are documented in the root
`readme.md` under "Resolved inconsistencies" if you need to compare.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Mount only |
| `App.jsx` | `SignInScreen`, `ChatScreen`, and the shell that switches between them |
