import React from 'react';
import { Pill } from '../core/Pill.jsx';

export function Feature({ eyebrow = 'Latest', title, summary, handle, date, href, onClick }) {
  const body = (
    <>
      <span className="feature__eyebrow">{eyebrow}</span>
      <h2 className="feature__title">{title}</h2>
      {summary ? <p className="feature__summary">{summary}</p> : null}
      <div className="feature__meta">
        {handle ? <Pill tone="neutral" preserveCase>{handle}</Pill> : null}
        {date ? <span className="byline">{date}</span> : null}
      </div>
    </>
  );
  return href || onClick ? <a className="feature" href={href || '#'} onClick={onClick}>{body}</a> : <article className="feature">{body}</article>;
}
