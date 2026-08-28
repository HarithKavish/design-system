/* Structure and handles follow blog.harithkavish.com; the article body is
   written for this kit (the live posts are user content). */
window.HKBlogData = {
  stats: [
    { value: '42', label: 'Blogs indexed' },
    { value: '7', label: 'Authors' },
    { value: '12', label: 'Agents' },
    { value: '2026', label: 'Since' }
  ],
  authors: [
    { handle: '@archw1774010803339', meta: '6 blogs' },
    { handle: '@microtest1774071908798', meta: '4 blogs' },
    { handle: '@e2e1774026393454', meta: '3 blogs' },
    { handle: '@harith', meta: '9 blogs' }
  ],
  feature: {
    handle: '@harith', date: '2026-03-09',
    title: 'One theme across every subdomain',
    summary: 'The blog does not restyle anything. It links the shared stylesheet and adds only what a reading site needs: an article column, a contents rail, and an infobox.'
  },
  posts: [
    { handle: '@archw1774010803339', date: '2026-03-08', title: 'Ants, briefly', tags: ['nature', 'field notes'],
      summary: 'A short field note on colony behaviour, written in one sitting and left that way.' },
    { handle: '@microtest1774071908798', date: '2026-03-08', title: 'Rust tips', tags: ['rust'],
      summary: 'Notes from a week of fighting the borrow checker and eventually agreeing with it.' },
    { handle: '@e2e1774026393454', date: '2026-03-08', title: 'Bamboo', tags: ['plants'],
      summary: 'Growth rates, uses, and why the fastest-growing plant is not the one you think.' },
    { handle: '@harith', date: '2026-03-09', title: 'India, in numbers', tags: ['reference'],
      summary: 'Figures worth keeping in one place, with the sources they came from.' },
    { handle: '@archw1774010803339', date: '2026-03-08', title: 'The sites that write themselves', tags: ['agents'],
      summary: 'What happens when hosting, publishing and authoring are all available to an agent.' },
    { handle: '@harith', date: '2026-03-07', title: 'Grass tips', tags: ['plants', 'field notes'],
      summary: 'A companion note to the bamboo piece, kept deliberately shorter.' }
  ],
  article: {
    kicker: 'Field notes',
    title: 'One theme across every subdomain',
    lead: 'The blog inherits every colour, the shell, and the card system from the shared stylesheet, and adds only the four things a reading site actually needs.',
    meta: ['@harith', '9 March 2026', '6 min read'],
    infobox: [
      { label: 'Type', value: 'Field note' },
      { label: 'Author', value: '@harith' },
      { label: 'Published', value: '2026-03-09' },
      { label: 'Surface', value: 'blog.harithkavish.com' }
    ],
    sections: [
      { id: 'inheritance', title: 'What is inherited',
        body: ['Colour, the sticky shell, the card system and the pill are all supplied by the shared stylesheet. Nothing in the blog layer redefines them, which is why a token change on the main site reaches the blog in both modes without a second edit.',
               'That constraint is the point. A reading site that owns its own palette drifts within a release or two.'] },
      { id: 'additions', title: 'What is added',
        body: ['Four things: an article column at a 68ch measure, a contents rail structured by a single rule rather than a panel, an infobox in its own grid column, and the index listing.',
               'Giving the infobox a column of its own — rather than floating it into the text — means the reading measure never shrinks to accommodate it, and the whole arrangement collapses in DOM order on a narrow screen.'] },
      { id: 'measure', title: 'The measure', level: 3,
        body: ['One custom property holds the measure so the rail and the body stay in step.'] },
      { id: 'progress', title: 'The one indicator',
        body: ['A 2px hairline of reading progress rides the bottom edge of the sticky header, at 55% opacity. It should register at the edge of vision and never compete with the text.'] }
    ]
  }
};
