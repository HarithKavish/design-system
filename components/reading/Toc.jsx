import React from 'react';

export function Toc({ title = 'Contents', items = [], activeId }) {
  return (
    <nav className="toc" aria-label="Contents">
      <p className="toc__title">{title}</p>
      <ul className="toc__list">
        {items.map((item) => (
          <li key={item.id} className={`toc__item toc__item--${item.level === 3 ? 'sub' : 'top'}`}>
            <a className={`toc__link${item.id === activeId ? ' is-active' : ''}`} href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
