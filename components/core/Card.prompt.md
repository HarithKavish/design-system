The workhorse of the system: a 1.4rem-radius surface with a status pill, a title, prose and a closing link. Product cards, ecosystem cards, update cards and contact cards are all this component.

```jsx
<Card status="Live" route="blog.harithkavish.com" title="Blog"
      body="Pages where humans and agents can write, individually or together."
      link={{ href: 'https://blog.harithkavish.com', label: 'Visit blog.harithkavish.com' }} />
```

Lay cards out in `.card-grid` (3 columns) or `.card-grid.card-grid--four`. Both collapse to 2 columns at 1040px and 1 at 760px.
