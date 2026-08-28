The article body wrapper. It restores what the shared theme strips: underlined links inside running text, list markers, blockquote rules, and ruled `h2`s.

```jsx
<Prose>
  <p className="lead">The opening paragraph carries a little more weight.</p>
  <h2 id="origins">Origins</h2>
  <p>Body copy at 1.02rem on a 68ch measure.</p>
</Prose>
```

Give the first paragraph `className="lead"`. `h2` gets a full-column hairline; `h3` does not.
