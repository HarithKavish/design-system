import React from 'react';
import { Brand } from './Brand.jsx';
import { NavLink } from './NavLink.jsx';
import { ThemeToggle } from './ThemeToggle.jsx';

export function SiteHeader({
  brand = { name: 'Harith Kavish', descriptor: 'Independent software business' },
  logoSrc,
  navigation = [],
  activeLabel,
  theme = 'light',
  onToggleTheme,
  progress,
  children
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Brand name={brand.name} descriptor={brand.descriptor} logoSrc={logoSrc} href={brand.href || '/'} wordmarkOnly={brand.wordmarkOnly} />
        <div className="site-header__actions">
          <nav className={`site-nav${open ? ' is-open' : ''}`} id="primary-nav" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink key={item.label} label={item.label} href={item.href} active={item.label === activeLabel} onClick={item.onClick} />
            ))}
          </nav>
          {onToggleTheme ? <ThemeToggle theme={theme} onToggle={onToggleTheme} /> : null}
          {children}
          <button
            type="button"
            className={`nav-toggle${open ? ' is-open' : ''}`}
            aria-controls="primary-nav"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </span>
          </button>
        </div>
      </div>
      {typeof progress === 'number' ? (
        <div className="reading-progress" aria-hidden="true">
          <span className="reading-progress__bar" style={{ width: `${Math.max(0, Math.min(100, progress))}%` }} />
        </div>
      ) : null}
    </header>
  );
}
