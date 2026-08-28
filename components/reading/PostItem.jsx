import React from 'react';
import { Pill } from '../core/Pill.jsx';

export function PostItem({ title, date, summary, tags = [], href }) {
  const body = (
    <>
      <h3 className="post-item__title">{title}</h3>
      {date ? <span className="post-item__date">{date}</span> : null}
      {summary ? <p className="post-item__summary">{summary}</p> : null}
      {tags.length ? (
        <div className="post-item__tags">{tags.map((t) => <Pill key={t} tone="neutral" preserveCase>{t}</Pill>)}</div>
      ) : null}
    </>
  );
  return href ? <a className="post-item" href={href}>{body}</a> : <article className="post-item">{body}</article>;
}
