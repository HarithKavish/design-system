import React from 'react';

export function StatRow({ stats = [] }) {
  return (
    <div className="stat-row">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <span className="stat__value">{stat.value}</span>
          <span className="stat__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
