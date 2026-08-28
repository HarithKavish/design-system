import React from 'react';

export function InputWithButton({ value, onChange, onSubmit, placeholder = '', buttonLabel = '\u2192', type = 'text', name }) {
  return (
    <form
      className="input-with-button"
      onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(value); }}
    >
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        aria-label={placeholder}
      />
      <button type="submit" aria-label="Submit">{buttonLabel}</button>
    </form>
  );
}
