import React from 'react';

export function StatusDot({ state = 'unknown', label }) {
  return (
    <span>
      <span className={`status-dot status-dot--${state}`} aria-hidden="true" />
      {label}
    </span>
  );
}
