import React from 'react';

export function Infobox({ title = 'At a glance', rows = [] }) {
  return (
    <aside className="infobox">
      <p className="infobox__title">{title}</p>
      <dl className="infobox__list">
        {rows.map((row) => (
          <div className="infobox__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
