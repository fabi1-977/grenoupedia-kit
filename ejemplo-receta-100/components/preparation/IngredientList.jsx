import React from 'react';

export function IngredientList({ groups = [] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {groups.map((g, gi) => (
        <div key={gi}>
          {g.title && <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 4px', letterSpacing: 'var(--tracking-display)' }}>{g.title}</h3>}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {g.items.map((it, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 16, alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid var(--filet-clair)' }}>
                <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 10px', fontSize: 17 }}>
                  {it.name}
                  {it.allergen && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', border: '1px solid var(--noir-2)', padding: '1px 6px' }}>{it.allergen}</span>}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 16, textAlign: 'right', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{it.qty}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
