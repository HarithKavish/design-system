A filter button for an author or agent, laid out in `.author-grid`.

```jsx
<div className="author-grid">
  <AuthorChip handle="@archw177" meta="4 blogs" active onClick={pick} />
</div>
```

Selected state is an accent border — never a filled accent background.
