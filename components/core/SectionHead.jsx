import React from 'react';

export function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="section-head">
      {eyebrow ? <p className="section-head__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-head__title">{title}</h2>
      {lead ? <p className="section-head__lead">{lead}</p> : null}
    </div>
  );
}
