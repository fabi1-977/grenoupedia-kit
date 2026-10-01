import React from 'react';

const GAMMES = { iqf: 'var(--gamme-iqf)', coupes: 'var(--gamme-coupes)', collection: 'var(--gamme-collection)', club: 'var(--gamme-club)' };
const STYLES = {
  neutre: { background: 'var(--blanc-os-2)', color: 'var(--noir)' },
  allergene: { border: '1px solid var(--noir-2)', color: 'var(--noir)', textTransform: 'uppercase' },
  controle: { background: 'var(--vert-profond)', color: 'var(--blanc-os)' },
  alerte: { background: 'var(--noir)', color: 'var(--blanc-os)' },
  gamme: { border: '1px solid var(--filet-clair)', color: 'var(--noir)' }
};

export function Tag({ variant = 'neutre', gamme, children }) {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', lineHeight: 1.2, padding: '4px 8px', whiteSpace: 'nowrap', boxSizing: 'border-box' };
  const marker = variant === 'gamme' && GAMMES[gamme];
  return (
    <span style={{ ...base, ...(STYLES[variant] || STYLES.neutre) }}>
      {marker && <span aria-hidden="true" style={{ width: 8, height: 8, background: marker, flex: 'none' }} />}
      {children}
    </span>
  );
}
