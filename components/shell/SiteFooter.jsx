import React from 'react';
import { NavLink } from './NavLink.jsx';

export function SiteFooter({ owner = 'Harith Kavish', year = new Date().getFullYear(), links = [], activeLabel }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">{`© ${year} ${owner}`}</p>
        <nav className="site-footer__nav" aria-label="Footer">
          {links.map((item) => (
            <NavLink key={item.label} label={item.label} href={item.href} active={item.label === activeLabel} />
          ))}
        </nav>
      </div>
    </footer>
  );
}
