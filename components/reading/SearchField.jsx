import React from 'react';

export function SearchField({ value, onChange, placeholder = 'Search', count }) {
  return (
    <div className="index-tools">
      <div className="search">
        <span className="search__glyph" aria-hidden="true" />
        <input
          className="search__input"
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          aria-label={placeholder}
        />
      </div>
      {count != null ? <span className="index-count">{count}</span> : null}
    </div>
  );
}
