import React from 'react';

export function ArticleHead({ kicker, title, lead, meta = [] }) {
  return (
    <header className="article-head">
      {kicker ? <p className="article-kicker">{kicker}</p> : null}
      <h1 className="article-title">{title}</h1>
      {lead ? <p className="article-lead">{lead}</p> : null}
      {meta.length ? (
        <div className="article-meta">{meta.map((m, i) => <span key={i}>{m}</span>)}</div>
      ) : null}
    </header>
  );
}
