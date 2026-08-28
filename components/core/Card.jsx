import React from 'react';
import { Pill, statusTone } from './Pill.jsx';
import { CardLink } from './CardLink.jsx';

export function Card({ status, route, title, meta, body, details, link, interactive = false, children }) {
  return (
    <article className={`card${interactive ? ' card--interactive' : ''}`}>
      {status || route ? (
        <div className="card__topline">
          {status ? <Pill tone={statusTone(status)}>{status}</Pill> : <span />}
          {route ? <span className="card__route">{route}</span> : null}
        </div>
      ) : null}
      {title ? <h3 className="card__title">{title}</h3> : null}
      {meta ? <p className="card__meta">{meta}</p> : null}
      {body ? <p className="card__body">{body}</p> : null}
      {details && details.length ? (
        <ul className="card__list">{details.map((d) => <li key={d}>{d}</li>)}</ul>
      ) : null}
      {children}
      {link ? <CardLink href={link.href}>{link.label}</CardLink> : null}
    </article>
  );
}
