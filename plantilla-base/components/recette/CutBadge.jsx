import React from 'react';

export const CUTS = {
  premium: { name: 'Premium', desc: 'Deux cuisses unies par la selle.', usage: 'Plats avec os : persillade, meunière', gamme: null },
  g1: { name: 'Coupe G1', desc: 'Un seul os.', usage: 'Service à l\u2019assiette, geste net', gamme: 'coupes' },
  perle: { name: 'La Perle', desc: 'Cœur musculaire désossé, en médaillon.', usage: 'Médaillons poêlés, cuisson minute', gamme: 'coupes' },
  grenouchup: { name: 'Le Grenouchup', desc: 'Sucette, os dégagé.', usage: 'Apéritif, service à la main', gamme: 'coupes' },
  lollifrog: { name: 'Le Lollifrog', desc: 'Bouchées pour friture.', usage: 'Friture légère, tempura', gamme: 'coupes' }
};
const FILET = { coupes: 'var(--gamme-coupes)', iqf: 'var(--gamme-iqf)', collection: 'var(--gamme-collection)', club: 'var(--gamme-club)' };

export function CutBadge({ cut = 'g1', size = 'md', showDesc = false, tone = 'clair' }) {
  const c = CUTS[cut] || CUTS.g1;
  const filet = FILET[c.gamme] || 'var(--acier)';
  const dark = tone === 'fonce';
  if (size === 'sm') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', color: dark ? 'var(--blanc-os)' : 'var(--noir)', border: '1px solid ' + (dark ? 'var(--filet-fonce)' : 'var(--filet-clair)'), padding: '4px 8px', whiteSpace: 'nowrap' }}>
        <span aria-hidden="true" style={{ width: 8, height: 8, background: filet }} />{c.name}
      </span>
    );
  }
  return (
    <div style={{ display: 'inline-block', borderTop: '3px solid ' + filet, paddingTop: 8, color: dark ? 'var(--blanc-os)' : 'var(--noir)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: 'var(--tracking-display)' }}>{c.name}</div>
      {showDesc && <div style={{ fontSize: 15, marginTop: 4, color: dark ? 'var(--blanc-os)' : 'var(--noir-2)' }}>{c.desc}</div>}
    </div>
  );
}
