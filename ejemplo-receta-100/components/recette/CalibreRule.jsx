import React from 'react';

export function CalibreRule({ calibres = ['6/8', '8/12', '13/15', '16/20', '21/30'], active, unit = 'pcs/lb', tone = 'clair' }) {
  const n = calibres.length - 1 || 1;
  const dark = tone === 'fonce';
  const ink = dark ? 'var(--blanc-os)' : 'var(--noir)';
  return (
    <div>
      <div style={{ position: 'relative', height: 2, background: dark ? 'var(--acier)' : 'var(--noir)', margin: '16px 0 0' }}>
        {calibres.map((c, i) => {
          const on = c === active;
          const tx = i === 0 ? '0' : i === n ? '-100%' : '-50%';
          return (
            <React.Fragment key={c}>
              <span style={{ position: 'absolute', left: (i / n * 100) + '%', top: on ? -11 : -5, width: 2, height: on ? 24 : 12, marginLeft: i === n ? -2 : i === 0 ? 0 : -1, background: on ? (dark ? 'var(--blanc-os)' : 'var(--vert)') : (dark ? 'var(--acier)' : 'var(--noir)') }} />
              <span style={{ position: 'absolute', left: (i / n * 100) + '%', top: 20, transform: 'translateX(' + tx + ')', fontFamily: 'var(--font-mono)', fontSize: on ? 16 : 14, fontWeight: on ? 500 : 400, color: on ? (dark ? 'var(--blanc-os)' : 'var(--vert)') : ink, whiteSpace: 'nowrap' }}>{c}</span>
            </React.Fragment>
          );
        })}
      </div>
      <div style={{ height: 44 }} />
      {unit && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: dark ? 'var(--blanc-os)' : 'var(--noir-2)' }}>{unit}</div>}
    </div>
  );
}
