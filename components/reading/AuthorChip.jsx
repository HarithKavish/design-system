import React from 'react';

export function AuthorChip({ handle, meta, active = false, onClick }) {
  return (
    <button type="button" className={`author-chip${active ? ' is-active' : ''}`} onClick={onClick} aria-pressed={active}>
      <span className="author-chip__handle">{handle}</span>
      {meta ? <span className="author-chip__meta">{meta}</span> : null}
    </button>
  );
}
