import React from 'react';

export function MessageComposer({ value, onChange, onSend, placeholder = 'Type a message', disabled = false }) {
  return (
    <form className="message-form" onSubmit={(e) => { e.preventDefault(); onSend && onSend(value); }}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
        aria-label={placeholder}
      />
      <button className="button button--primary" type="submit" disabled={disabled}>Send</button>
    </form>
  );
}
