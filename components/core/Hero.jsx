import React from 'react';

export function Hero({ eyebrow, title, lead, actions, children }) {
  return (
    <section className="hero">
      {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
      <h1 className="hero__title">{title}</h1>
      {lead ? <p className="hero__lead">{lead}</p> : null}
      {actions ? <div className="hero__actions">{actions}</div> : null}
      {children}
    </section>
  );
}
