import React from 'react';

export function Pill({ children, tone = 'neutral', preserveCase = false }) {
  return <span className={`pill pill--${tone}${preserveCase ? ' pill--handle' : ''}`}>{children}</span>;
}

export function statusTone(state) {
  const value = String(state).toLowerCase();
  if (value.includes('live') || value.includes('ready')) return 'live';
  if (value.includes('progress')) return 'progress';
  if (value.includes('planned')) return 'planned';
  return 'neutral';
}
