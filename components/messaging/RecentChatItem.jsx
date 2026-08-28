import React from 'react';

export function RecentChatItem({ name, email, avatarSrc, active = false, onClick }) {
  const initial = (name || email || '?').trim().charAt(0).toUpperCase();
  return (
    <button type="button" className={`recent-chat-item${active ? ' is-active' : ''}`} onClick={onClick} aria-pressed={active}>
      {avatarSrc
        ? <img className="recent-chat-item__avatar" src={avatarSrc} alt="" />
        : <span className="recent-chat-item__initial" aria-hidden="true">{initial}</span>}
      <span className="recent-chat-item__info">
        <span className="recent-chat-item__name">{name || email}</span>
        {email ? <span className="recent-chat-item__email">{email}</span> : null}
      </span>
    </button>
  );
}
