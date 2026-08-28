import React from 'react';

export function Panel({ title, body, wide = false, children }) {
  return (
    <article className={`panel${wide ? ' panel--wide' : ''}`}>
      {title ? <h3 className="panel__title">{title}</h3> : null}
      {body ? <p className="panel__body">{body}</p> : null}
      {children}
    </article>
  );
}
