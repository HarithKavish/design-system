import React from 'react';

export function ThemeToggle({ theme = 'light', onToggle }) {
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme-toggle="true"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
