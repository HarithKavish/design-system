The sticky, blurred header shared by every surface in the ecosystem — brand left, nav and theme toggle right, hamburger below 760px.

```jsx
<SiteHeader logoSrc="assets/logo.png" navigation={nav} activeLabel="Products" theme={theme} onToggleTheme={toggle} />
```

Pass `progress` only on reading surfaces. The header never gains a shadow on scroll; the hairline border and the backdrop blur do that work.
