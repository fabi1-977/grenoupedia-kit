import React from 'react';

const VARIANTS = {
  primary: { bg: 'var(--vert)', fg: 'var(--blanc-os)', bd: 'var(--vert)', hover: 'var(--vert-survol)' },
  secondary: { bg: 'transparent', fg: 'var(--vert)', bd: 'var(--vert)', hover: 'var(--blanc-os-2)' },
  inverse: { bg: 'transparent', fg: 'var(--blanc-os)', bd: 'var(--blanc-os)', hover: 'var(--vert-survol)' },
  ghost: { bg: 'transparent', fg: 'var(--vert)', bd: 'transparent', hover: 'transparent' }
};

export function Button({ variant = 'primary', size = 'md', arrow = false, disabled = false, href, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const ghost = variant === 'ghost';
  const bg = disabled ? v.bg : press && !ghost ? 'var(--state-press)' : hover ? v.hover : v.bg;
  const s = {
    display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', boxSizing: 'border-box',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: size === 'sm' ? 14 : 16, lineHeight: 1,
    padding: ghost ? '6px 0' : size === 'sm' ? '10px 14px' : '14px 20px',
    borderRadius: 'var(--radius-1)', border: '1px solid ' + v.bd, background: bg,
    color: press && variant === 'secondary' ? 'var(--blanc-os)' : v.fg,
    textDecoration: ghost && hover ? 'underline' : 'none', textDecorationColor: 'var(--vert-sauge)', textUnderlineOffset: 4,
    transition: 'background var(--dur-fast) var(--ease-standard)', ...style
  };
  const El = href ? 'a' : 'button';
  return (
    <El href={href} type={href ? undefined : 'button'} disabled={href ? undefined : disabled} aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick} style={s}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      {children}{arrow && <span aria-hidden="true">→</span>}
    </El>
  );
}
