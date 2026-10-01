import React from 'react';

const FILLS = [['var(--vert)', 'var(--blanc-os)'], ['var(--vert-sauge)', 'var(--blanc-os)'], ['var(--acier)', 'var(--noir)'], ['var(--noir)', 'var(--blanc-os)']];
const fmt = t => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');

export function CookingTimeline({ phases = [], total, note, timer = true }) {
  const T = total || (phases.length ? phases[phases.length - 1].to : 1);
  const [sel, setSel] = React.useState(0);
  const [t, setT] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => () => clearInterval(ref.current), []);
  const stop = () => { clearInterval(ref.current); setRunning(false); };
  const start = () => {
    const from = t >= T ? 0 : t; const t0 = performance.now() - from * 1000;
    setRunning(true);
    ref.current = setInterval(() => {
      const now = (performance.now() - t0) / 1000;
      if (now >= T) { clearInterval(ref.current); setT(T); setRunning(false); return; }
      setT(now);
    }, 100);
  };
  const auto = Math.max(0, phases.findIndex(p => t >= p.from && t < p.to));
  const cur = running ? auto : sel;
  const p = phases[cur] || {};
  const bounds = [0, ...phases.map(x => x.to)];
  const next = bounds.find(b => b > t);
  const btn = { cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, padding: '10px 16px', borderRadius: 'var(--radius-1)' };
  return (
    <div style={{ border: '1px solid var(--filet-clair)', padding: 'clamp(18px, 3vw, 28px)' }}>
      {timer && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 44, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{fmt(t)}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)' }}>{running ? 'prochain geste dans ' + Math.ceil(next - t) + ' s' : t >= T ? 'servez' : 'sur ' + fmt(T)}</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" onClick={running ? stop : start} style={{ ...btn, background: 'var(--vert)', color: 'var(--blanc-os)', border: '1px solid var(--vert)' }}>{running ? 'Pause' : t > 0 && t < T ? 'Reprendre' : 'Lancer le chrono'}</button>
            <button type="button" onClick={() => { stop(); setT(0); setSel(0); }} style={{ ...btn, fontWeight: 400, background: 'transparent', color: 'var(--noir)', border: '1px solid var(--noir)' }}>Réinitialiser</button>
          </div>
        </div>
      )}
      <div style={{ position: 'relative', marginTop: 28 }}>
        <div role="tablist" aria-label="Phases de cuisson" style={{ display: 'flex', gap: 3, height: 48 }}>
          {phases.map((ph, i) => {
            const [bg, fg] = FILLS[i % FILLS.length];
            return (
              <button key={i} type="button" role="tab" aria-selected={i === cur} onClick={() => { stop(); setSel(i); setT(ph.from); }}
                style={{ cursor: 'pointer', flex: (ph.to - ph.from) + ' 1 0', minWidth: 0, border: 0, padding: 0, background: bg, color: fg, opacity: i === cur ? 1 : 0.4, fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 500, transition: 'opacity var(--dur-base) var(--ease-standard)' }}>{i + 1}</button>
            );
          })}
        </div>
        <div style={{ position: 'absolute', top: -8, bottom: -8, left: 'calc(' + (t / T * 100) + '% - 1px)', width: 2, background: 'var(--noir)', pointerEvents: 'none' }} />
      </div>
      <div style={{ position: 'relative', height: 40, marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)' }}>
        {bounds.map((b, i) => (
          <span key={i} style={{ position: 'absolute', top: i === bounds.length - 1 && bounds.length > 2 && (b - bounds[i - 1]) / T < 0.15 ? 18 : 0, left: (b / T * 100) + '%', transform: i === 0 ? 'none' : i === bounds.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)', whiteSpace: 'nowrap' }}>{b} s</span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 18, marginTop: 16, paddingTop: 18, borderTop: '1px solid var(--filet-clair)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 48, lineHeight: 0.9, color: 'var(--vert)' }}>{cur + 1}</span>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)' }}>{p.from}–{p.to} s</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.15, margin: '4px 0 6px', letterSpacing: 'var(--tracking-display)' }}>{p.title}</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>{p.text}</p>
          {p.signal && <p style={{ margin: '8px 0 0', fontSize: 15, color: 'var(--noir-2)' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir)', textTransform: 'uppercase' }}>Contrôle</span> — {p.signal}</p>}
        </div>
      </div>
      {note && <p style={{ margin: '16px 0 0', fontSize: 14, lineHeight: 1.55, color: 'var(--noir-2)' }}>{note}</p>}
    </div>
  );
}
