import React from 'react';

export function ReadingProgress({ value = 0 }) {
  return (
    <div className="reading-progress" aria-hidden="true">
      <span className="reading-progress__bar" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
