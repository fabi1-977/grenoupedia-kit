const Ligne = p => React.createElement(window.GNS.Ligne, p);
const mono = { fontFamily: 'var(--font-mono)', fontSize: 14 };

function Frame({ ratio, w, bg = 'var(--vert)', fg = 'var(--blanc-os)', children }) {
  return <div style={{ width: w, aspectRatio: ratio, background: bg, color: fg, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 'none' }}>{children}</div>;
}
function Instagram() {
  const slides = [['Couverture', '90 s par face. Pas une de plus.'], ['L\u2019erreur', 'La cuisson longue sèche la chair.'], ['Ingrédients', '9 ingrédients · 4 personnes'], ['Chronologie', '75 s · 60 s · 15 s hors du feu'], ['CTA', 'La recette complète sur la Grenoupedia.']];
  return <div style={{ display: 'flex', gap: 16, overflowX: 'auto', overflowY: 'hidden', paddingBottom: 8 }}>
    {slides.map(([k, t], i) => <Frame key={i} ratio="4/5" w={232} bg={i % 2 ? 'var(--blanc-os)' : 'var(--vert)'} fg={i % 2 ? 'var(--noir)' : 'var(--blanc-os)'}>
      <div style={{ ...mono, display: 'flex', justifyContent: 'space-between' }}><span>0{i + 1}/05</span><span>{k.toUpperCase()}</span></div>
      <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: 1.08, letterSpacing: '-0.02em' }}>{t}</div><Ligne tone={i % 2 ? 'acier' : 'acier'} style={{ marginTop: 10 }} /></div>
      <div style={mono}>GRENOUCERIE</div>
    </Frame>)}
  </div>;
}
function Reel() {
  const rows = [['0–3 s', 'Accroche', 'Plan serré : les cuisses tombent dans le beurre qui mousse.', '« 75 secondes sans y toucher. »'], ['3–22 s', 'Nœud', 'Retournement, ail confit, arrosage, persil hors du feu. Chrono à l\u2019écran.', 'Les trois gestes, chronométrés.'], ['22–30 s', 'CTA', 'Dressage sur assiette chaude, plan zénithal.', 'Recette complète : lien Grenoupedia.']];
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
    <Frame ratio="9/16" w={220}>
      <div style={mono}>00:07 / 00:30</div>
      <div><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 40 }}>75 s</div><Ligne /><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.1 }}>Sans y toucher.</div></div>
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
  const args = ['Découpe prête à cuire : aucun parage en cuisine.', 'Calibre régulier : portions et temps de cuisson prévisibles.', 'Cuisson minute : la poêle se libère en moins de trois minutes.'];
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
    <Frame ratio="1/1" w={320}>
      <div style={mono}>DONNÉE · POUR LES CHEFS</div>
      <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1 }}>150 s</div><Ligne /><div style={{ fontSize: 16 }}>De la poêle à l'assiette.</div></div>
      <div style={mono}>GRENOUCERIE</div>
    </Frame>
    <ul style={{ flex: '1 1 360px', listStyle: 'none', margin: 0, padding: 0 }}>
      {args.map((a, i) => <li key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', padding: '14px 0', borderTop: '1px solid var(--filet-clair)', fontSize: 16 }}><span style={{ ...mono, fontWeight: 500 }}>0{i + 1}</span>{a}</li>)}
    </ul>
  </div>;
}
window.SocialFormats = { Instagram, Reel, LinkedIn };
