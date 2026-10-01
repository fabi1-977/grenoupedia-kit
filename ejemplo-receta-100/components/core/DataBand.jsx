import React from 'react';

export function DataBand({ items = [], tone = 'profond' }) {
  return (
    <dl style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px', margin: 0, padding: '14px 18px', background: tone === 'vert' ? 'var(--vert)' : 'var(--vert-profond)', color: 'var(--blanc-os)', fontFamily: 'var(--font-mono)', fontSize: 15, lineHeight: 1.4 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <dt style={{ fontSize: 14, letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase' }}>{it.label}</dt>
          <dd style={{ margin: 0, fontWeight: 500 }}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
