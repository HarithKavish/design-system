import React from 'react';

export function Button({ variant = 'secondary', href, children, onClick, disabled = false, type = 'button', ...rest }) {
  const className = `button button--${variant}`;
  if (href && !disabled) {
    return <a className={className} href={href} onClick={onClick} {...rest}>{children}</a>;
  }
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled} {...rest}>{children}</button>
  );
}
