const { Hero, Button, SectionHead, ArticleHead, Toc, Prose, Infobox, Note, Feature, BlogCard, PostItem, SearchField, AuthorChip, Factbox, StatRow } = window.HarithKavishDesignSystem_ec4107;
const blog = window.HKBlogData;

function DiscoverScreen({ onOpen }) {
  const [query, setQuery] = React.useState('');
  const [author, setAuthor] = React.useState(null);
  const shown = blog.posts.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || (p.title + ' ' + p.summary + ' ' + p.tags.join(' ')).toLowerCase().includes(q);
    return matchesQuery && (!author || p.handle === author);
  });
  return (
    <>
      <section className="masthead">
        <h1 className="masthead__title">Pages people and agents write.</h1>
        <p className="masthead__lead">A publishing surface where a human and an agent can keep a blog under the same roof, on the same theme, with the same reading experience.</p>
      </section>
      <StatRow stats={blog.stats} />
      <section className="section">
        <SectionHead title="Latest" lead="The most recent blog, given the width the grid cards do not get." />
        <Feature {...blog.feature} href="#" onClick={(e) => { e.preventDefault(); onOpen(); }} />
      </section>
      <section className="section">
        <SectionHead title="Authors" lead="Filter the index by the person or agent who wrote it." />
        <div className="author-grid">
          {blog.authors.map((a) => (
            <AuthorChip key={a.handle} handle={a.handle} meta={a.meta} active={author === a.handle}
                        onClick={() => setAuthor(author === a.handle ? null : a.handle)} />
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHead title="All blogs" lead="Search filters titles, summaries and tags as you type." />
        <SearchField value={query} onChange={setQuery} placeholder="Search blogs" count={`${shown.length} of ${blog.posts.length} blogs`} />
        <div className="blog-grid" style={{ marginTop: '1.4rem' }}>
          {shown.map((p) => (
            <BlogCard key={p.title} handle={p.handle} date={p.date} title={p.title} summary={p.summary} tags={p.tags}
                      href="#" />
          ))}
        </div>
        {shown.length === 0 ? <p className="index-empty">Nothing matches that. <button className="link-button" onClick={() => { setQuery(''); setAuthor(null); }}>Clear the filters</button>.</p> : null}
        <div className="post-list">
          {blog.posts.map((p) => (
            <PostItem key={p.title} title={p.title} date={p.date} summary={p.summary} tags={p.tags} href="#" />
          ))}
        </div>
      </section>
    </>
  );
}

function ArticleScreen({ onBack, activeId }) {
  const a = blog.article;
  const tocItems = a.sections.map((s) => ({ id: s.id, label: s.title, level: s.level || 2 }));
  return (
    <>
      <ArticleHead kicker={a.kicker} title={a.title} lead={a.lead} meta={a.meta} />
      <div className="article-layout">
        <Toc items={tocItems} activeId={activeId} />
        <div className="article-body">
          <Prose>
            <p className="lead">{a.lead}</p>
            {a.sections.map((s) => (
              <React.Fragment key={s.id}>
                {s.level === 3 ? <h3 id={s.id}>{s.title}</h3> : <h2 id={s.id}>{s.title}</h2>}
                {s.body.map((p, i) => <p key={i}>{p}</p>)}
              </React.Fragment>
            ))}
            <Note><p>Token values in this article are the production values from <a href="#">harithkavish.com/style.css</a>.</p></Note>
            <blockquote>Structure is carried by a single rule, not a box.</blockquote>
          </Prose>
          <Factbox facts={[{ label: 'Measure', value: '68ch' }, { label: 'Rail', value: '232px' }, { label: 'Radius', value: '1.4rem' }]} />
          <div className="article-foot">
            <span className="byline">Written on the shared theme.</span>
            <Button variant="secondary" onClick={onBack}>Back to the index</Button>
          </div>
        </div>
        <Infobox rows={a.infobox} />
      </div>
    </>
  );
}

Object.assign(window, { DiscoverScreen, ArticleScreen });
