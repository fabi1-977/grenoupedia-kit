import React from 'react';
import { CUTS } from './CutBadge.jsx';

export function CutSelector({ value, defaultValue = 'g1', onChange, cuts = ['premium', 'g1', 'perle', 'grenouchup', 'lollifrog'] }) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return (
    <div role="radiogroup" aria-label="Découpe" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {cuts.map(id => {
        const on = id === cur;
        return (
          <button key={id} type="button" role="radio" aria-checked={on} onClick={() => { setInner(id); onChange && onChange(id); }}
            style={{ cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: on ? 600 : 400, padding: '8px 12px', borderRadius: 'var(--radius-1)', border: '1px solid ' + (on ? 'var(--vert)' : 'var(--filet-clair)'), background: on ? 'var(--vert)' : 'transparent', color: on ? 'var(--blanc-os)' : 'var(--noir)' }}>
            {(CUTS[id] || {}).name || id}
          </button>
        );
      })}
    </div>
  );
}
