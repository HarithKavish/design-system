import React from 'react';
import { Pill, statusTone } from './Pill.jsx';

export function StatusRow({ label, state, detail }) {
  return (
    <div className="status-row">
      <div className="status-row__label">{label}</div>
      <div className="status-row__state"><Pill tone={statusTone(state)}>{state}</Pill></div>
      <p className="status-row__detail">{detail}</p>
    </div>
  );
}
