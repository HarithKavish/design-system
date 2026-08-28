The light/dark switch. It is a worded pill button, never a sun/moon icon.

```jsx
<ThemeToggle theme={theme} onToggle={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
```

The label states the destination ("Dark mode" while in light). Theme is applied as `document.documentElement.dataset.theme` and persisted under `harithkavish-theme`.
