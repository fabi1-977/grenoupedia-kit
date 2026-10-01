const Ligne = p => React.createElement(window.GNS.Ligne, p);
const mono = { fontFamily: 'var(--font-mono)', fontSize: 14 };

function Frame({ ratio, w, bg = 'var(--vert)', fg = 'var(--blanc-os)', children }) {
  return <div style={{ width: w, aspectRatio: ratio, background: bg, color: fg, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 'none' }}>{children}</div>;
}
function Instagram() {
  const R = window.RECETTE, S = R.social, n = R.ingredients.reduce((a, g) => a + g.items.length, 0);
  const slides = [['Couverture', S.cover], ['L\u2019erreur', S.erreur], ['Ingrédients', n + ' ingrédients · 4 personnes'], ['Chronologie', S.chrono], ['CTA', S.cta]];
  return <div style={{ display: 'flex', gap: 16, overflowX: 'auto', overflowY: 'hidden', paddingBottom: 8 }}>
    {slides.map(([k, t], i) => <Frame key={i} ratio="4/5" w={232} bg={i % 2 ? 'var(--blanc-os)' : 'var(--vert)'} fg={i % 2 ? 'var(--noir)' : 'var(--blanc-os)'}>
      <div style={{ ...mono, display: 'flex', justifyContent: 'space-between' }}><span>0{i + 1}/05</span><span>{k.toUpperCase()}</span></div>
      <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: 1.08, letterSpacing: '-0.02em' }}>{t}</div><Ligne tone={i % 2 ? 'acier' : 'acier'} style={{ marginTop: 10 }} /></div>
      <div style={mono}>GRENOUCERIE</div>
    </Frame>)}
  </div>;
}
function Reel() {
  const S = window.RECETTE.social;
  const rows = [['0–3 s', 'Accroche', S.reelHook, S.reelHookText], ['3–22 s', 'Nœud', S.reelBody, S.reelBodyText], ['22–30 s', 'CTA', 'Dressage sur assiette chaude, plan zénithal.', 'Recette complète : lien Grenoupedia.']];
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
    <Frame ratio="9/16" w={220}>
      <div style={mono}>00:07 / 00:30</div>
      <div><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 40 }}>{S.reelBig}</div><Ligne /><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.1 }}>{S.reelSmall}</div></div>
      <div style={mono}>GRENOUCERIE</div>
    </Frame>
    <ol style={{ flex: '1 1 360px', listStyle: 'none', margin: 0, padding: 0 }}>
      {rows.map(([t, l, p, x]) => <li key={t} style={{ display: 'grid', gridTemplateColumns: '88px minmax(0,1fr)', gap: 16, padding: '16px 0', borderTop: '1px solid var(--filet-clair)' }}>
        <span style={{ ...mono, fontWeight: 500 }}>{t}</span>
        <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 }}>{l}</div><p style={{ margin: '4px 0 0', fontSize: 15 }}><span style={mono}>PLAN</span> — {p}</p><p style={{ margin: '2px 0 0', fontSize: 15 }}><span style={mono}>TEXTE</span> — {x}</p></div>
      </li>)}
    </ol>
  </div>;
}
function LinkedIn() {
  const S = window.RECETTE.social, args = S.linkedinArgs;
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
    <Frame ratio="1/1" w={320}>
      <div style={mono}>DONNÉE · POUR LES CHEFS</div>
      <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1 }}>{S.linkedinBig}</div><Ligne /><div style={{ fontSize: 16 }}>{S.linkedinSub}</div></div>
      <div style={mono}>GRENOUCERIE</div>
    </Frame>
    <ul style={{ flex: '1 1 360px', listStyle: 'none', margin: 0, padding: 0 }}>
      {args.map((a, i) => <li key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', padding: '14px 0', borderTop: '1px solid var(--filet-clair)', fontSize: 16 }}><span style={{ ...mono, fontWeight: 500 }}>0{i + 1}</span>{a}</li>)}
    </ul>
  </div>;
}
window.SocialFormats = { Instagram, Reel, LinkedIn };
