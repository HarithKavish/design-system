import React from 'react';

export function ChatHeader({ peer = 'No peer selected', status, onBack, actions }) {
  return (
    <div className="chat-header">
      <div className="chat-header__left">
        {onBack ? <button type="button" className="chat-back" onClick={onBack} aria-label="Back to conversations">{'\u2190'}</button> : null}
        <span className="chat-header__peer">{peer}</span>
      </div>
      {actions || (status ? <span className="chat-header__status">{status}</span> : null)}
    </div>
  );
}
