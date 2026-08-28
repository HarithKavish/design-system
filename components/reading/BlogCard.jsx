import React from 'react';
import { Pill } from '../core/Pill.jsx';

export function BlogCard({ handle, date, title, summary, tags = [], href }) {
  const body = (
    <>
      <div className="blog-card__top">
        {handle ? <Pill tone="neutral" preserveCase>{handle}</Pill> : <span />}
        {date ? <span className="blog-card__date">{date}</span> : null}
      </div>
      <h3 className="blog-card__title">{title}</h3>
      {summary ? <p className="blog-card__summary">{summary}</p> : null}
      {tags.length ? (
        <div className="blog-card__foot">{tags.map((t) => <Pill key={t} tone="neutral" preserveCase>{t}</Pill>)}</div>
      ) : null}
    </>
  );
  return href ? <a className="blog-card" href={href}>{body}</a> : <article className="blog-card">{body}</article>;
}
