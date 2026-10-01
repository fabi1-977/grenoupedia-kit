import React from 'react';

export function MetaBar({ items = [] }) {
  return (
    <dl style={{ display: 'flex', flexWrap: 'wrap', margin: 0, borderTop: '1px solid var(--noir)', borderBottom: '1px solid var(--filet-clair)' }}>
      {items.map((it, i) => (
        <div key={i} style={{ flex: '1 1 150px', padding: '16px 24px 16px 0' }}>
          <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)', textTransform: 'uppercase' }}>{it.label}</dt>
          <dd style={{ margin: '6px 0 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 22, color: 'var(--noir)', fontVariantNumeric: 'tabular-nums' }}>{it.value}</span>
            {it.alert && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', background: 'var(--noir)', color: 'var(--blanc-os)', padding: '3px 8px', whiteSpace: 'nowrap' }}>{it.alert}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
