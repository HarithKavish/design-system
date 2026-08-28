The contents rail: sticky, 232px, structured by a single left-hand rule rather than a panel.

```jsx
<Toc items={[{ id: 'origins', label: 'Origins', level: 2 }, { id: 'tokens', label: 'Tokens', level: 3 }]} activeId="origins" />
```

Top-level items are auto-numbered with tabular figures. Below 1040px it becomes a bordered two-column card and sub-items are dropped.
