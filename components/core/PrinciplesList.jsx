import React from 'react';

export function PrinciplesList({ items = [], compact = false }) {
  return (
    <ul className={`principles-list${compact ? ' principles-list--compact' : ''}`}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
