import React from 'react';

export function StepList({ steps = [] }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
      {steps.map((s, i) => (
        <li key={i} style={{ display: 'grid', gridTemplateColumns: '64px minmax(0,1fr)', gap: 12, padding: '20px 0', borderTop: '1px solid var(--filet-clair)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, lineHeight: 1, color: 'var(--vert)', letterSpacing: 'var(--tracking-display)' }}>{String(i + 1).padStart(2, '0')}</span>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 12px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, lineHeight: 1.2, margin: 0, letterSpacing: 'var(--tracking-display)' }}>{s.title}</h3>
              {s.control && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', background: 'var(--vert-profond)', color: 'var(--blanc-os)', padding: '3px 8px', whiteSpace: 'nowrap' }}>{s.control}</span>}
            </div>
            <p style={{ margin: '8px 0 0', fontSize: 17, lineHeight: 1.62, maxWidth: '62ch' }}>{s.text}</p>
            {s.signal && <p style={{ margin: '6px 0 0', fontSize: 15, lineHeight: 1.5, color: 'var(--noir-2)' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir)', textTransform: 'uppercase' }}>Contrôle</span> — {s.signal}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
