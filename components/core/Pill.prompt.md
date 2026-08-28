A small uppercase status or category pill. It is the system's only use of colour as information.

```jsx
<Pill tone={statusTone(product.status)}>{product.status}</Pill>
<Pill tone="neutral" preserveCase>@archw177</Pill>
```

Tones are muted on purpose — a desaturated green and an amber-brown, never signal-red. Use `preserveCase` for handles and names.
