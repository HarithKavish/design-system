import React from 'react';

export function CardLink({ href, children, onClick }) {
  return <a className="card__link" href={href} onClick={onClick}>{children}</a>;
}
