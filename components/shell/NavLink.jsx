import React from 'react';

export function NavLink({ label, href, active = false, onClick }) {
  return (
    <a
      className={`site-nav__link${active ? ' is-active' : ''}`}
      href={href}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
