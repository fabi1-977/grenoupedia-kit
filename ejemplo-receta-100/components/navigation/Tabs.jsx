import React from 'react';

export function Tabs({ items = [], value, defaultValue, onChange, tone = 'clair' }) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const cur = value ?? inner;
  const dark = tone === 'fonce';
  const pick = id => { setInner(id); onChange && onChange(id); };
  return (
    <div role="tablist" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 32px', borderBottom: '1px solid ' + (dark ? 'var(--filet-fonce)' : 'var(--filet-clair)') }}>
      {items.map(it => {
        const on = it.id === cur;
        return (
          <button key={it.id} type="button" role="tab" aria-selected={on} onClick={() => pick(it.id)}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 10, background: 'none', border: 0, borderBottom: '2px solid ' + (on ? (dark ? 'var(--blanc-os)' : 'var(--vert)') : 'transparent'), marginBottom: -1, padding: '12px 0', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: on ? 600 : 400, color: dark ? 'var(--blanc-os)' : on ? 'var(--noir)' : 'var(--noir-2)', whiteSpace: 'nowrap' }}>
            {it.label}
            {it.meta && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: dark ? 'var(--blanc-os)' : 'var(--noir-2)' }}>{it.meta}</span>}
          </button>
        );
      })}
    </div>
  );
}
