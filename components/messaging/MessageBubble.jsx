import React from 'react';

export function MessageBubble({ from = 'them', children, timestamp }) {
  return (
    <div className={`bubble bubble--from-${from === 'me' ? 'me' : 'them'}`}>
      {children}
      {timestamp ? <span className="bubble__timestamp">{timestamp}</span> : null}
    </div>
  );
}
