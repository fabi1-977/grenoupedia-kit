import React from 'react';

const TONES = { acier: 'var(--acier)', vert: 'var(--vert)', blanc: 'var(--blanc-os)', noir: 'var(--noir)' };

export function Ligne({ repere = 74, tone = 'acier', label, weight = 2, style }) {
  const c = TONES[tone] || TONES.acier;
  return (
    <div role="presentation" style={{ position: 'relative', paddingTop: 8, paddingBottom: label ? 30 : 8, ...style }}>
      <div style={{ position: 'relative', height: weight, background: c }}>
        <span style={{ position: 'absolute', left: repere + '%', top: weight / 2 - 8, width: 2, height: 16, marginLeft: -1, background: c }} />
      </div>
      {label && (
        <span style={{ position: 'absolute', left: repere + '%', top: 26, transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', whiteSpace: 'nowrap', color: tone === 'blanc' ? 'var(--blanc-os)' : 'var(--noir-2)' }}>{label}</span>
      )}
    </div>
  );
}
