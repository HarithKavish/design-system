import React from 'react';

export function Factbox({ facts = [] }) {
  return (
    <div className="factbox">
      {facts.map((fact) => (
        <div className="factbox__cell" key={fact.label}>
          <span className="factbox__label">{fact.label}</span>
          <span className="factbox__value">{fact.value}</span>
        </div>
      ))}
    </div>
  );
}
