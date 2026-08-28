import React from 'react';

export function UserCard({ name, email, avatarSrc, emptyLabel = 'Not signed in' }) {
  if (!name) return <div className="user-card user-card--empty">{emptyLabel}</div>;
  return (
    <div className="user-card">
      {avatarSrc ? <img className="user-card__avatar" src={avatarSrc} alt="" /> : null}
      <span className="user-card__meta">
        <span className="user-card__name">{name}</span>
        {email ? <span className="user-card__email">{email}</span> : null}
      </span>
    </div>
  );
}
