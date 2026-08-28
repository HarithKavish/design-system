The page opener. An 11ch-wide title at up to 5.3rem with -0.05em tracking, a 62ch lead, and at most two buttons.

```jsx
<Hero eyebrow="Independent software business" title="Specialized software services." lead={summary}
      actions={[<Button key="a" variant="primary" href="/products.html">Explore Products</Button>,
                <Button key="b" variant="secondary" href="/about-us.html#approach">Learn About the Approach</Button>]} />
```

Every page has exactly one Hero and it is the only `h1`. Titles end in a full stop.
