import React from 'react';
import { CUTS } from './CutBadge.jsx';
import { CalibreRule } from './CalibreRule.jsx';

export function FicheTechnique({ cut = 'g1', calibres, calibre, rows = [], origine = 'Indiquée sur chaque lot', sku, note }) {
  const c = CUTS[cut] || CUTS.g1;
  const filet = c.gamme === 'coupes' ? 'var(--gamme-coupes)' : 'var(--acier)';
  const rowStyle = { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 12, padding: '9px 0', borderBottom: '1px solid var(--filet-clair)', alignItems: 'baseline' };
  return (
    <section style={{ border: '1px solid var(--filet-clair)', background: 'var(--surface-page)' }}>
      <header style={{ background: 'var(--vert)', color: 'var(--blanc-os)', padding: '16px 18px', borderTop: '3px solid ' + filet }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)' }}>
          <span>FICHE TECHNIQUE</span>{sku && <span>{sku}</span>}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, lineHeight: 1.05, marginTop: 10, letterSpacing: 'var(--tracking-display)' }}>{c.name}</div>
        <div style={{ fontSize: 15, marginTop: 4 }}>{c.desc}</div>
      </header>
      <div style={{ padding: '4px 18px 18px' }}>
        {calibre && <CalibreRule calibres={calibres} active={calibre} />}
        <dl style={{ margin: 0 }}>
          {rows.map((r, i) => (
            <div key={i} style={rowStyle}>
              <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)', textTransform: 'uppercase' }}>{r.label}</dt>
              <dd style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 15, textAlign: 'right' }}>{r.value}</dd>
            </div>
          ))}
          <div style={rowStyle}>
            <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)', textTransform: 'uppercase' }}>Origine</dt>
            <dd style={{ margin: 0, fontSize: 15, textAlign: 'right' }}>{origine}</dd>
          </div>
        </dl>
        {note && <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.5, color: 'var(--noir-2)' }}>{note}</p>}
      </div>
    </section>
  );
}
