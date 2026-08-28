import React from 'react';

export function Brand({ name = 'Harith Kavish', descriptor, logoSrc, href = '/', wordmarkOnly = false }) {
  return (
    <a className="brand" href={href}>
      {logoSrc && !wordmarkOnly ? <img className="brand__mark" src={logoSrc} alt="" aria-hidden="true" /> : null}
      {wordmarkOnly ? (
        <span className="brand__wordmark">{name}</span>
      ) : (
        <span className="brand__text">
          <span className="brand__name">{name}</span>
          {descriptor ? <span className="brand__descriptor">{descriptor}</span> : null}
        </span>
      )}
    </a>
  );
}
