# UI kit — blog.harithkavish.com

Two screens: the **discover index** (masthead, stat band, feature, author filters, search,
card grid, ruled post list) and the **article view** (masthead, sticky contents rail, prose
at a 68ch measure, infobox column, factbox, reading progress).

## Source

- `https://github.com/HarithKavish/blog` — `assets/blog.css` is the ground truth for every
  measurement here, and its comments are the clearest statement of the brand's layout
  philosophy in the whole codebase ("structure carried by a single rule, not a box").
- The blog deliberately defines no colours of its own: it links
  `https://harithkavish.com/style.css` and adds only the reading layer.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Shell, index/article switch, scroll-spy for the rail and progress bar |
| `blog-screens.jsx` | `DiscoverScreen` (live search + author filter) and `ArticleScreen` |
| `data.js` | Handles and post structure follow the live index; article body written for this kit |

## Interactions worth trying

- Type in the search field — the grid filters live and the count updates.
- Click an author chip to filter, click again to clear.
- Open the feature card, then scroll: the contents rail highlights the current section and
  the header grows a 2px progress hairline.
