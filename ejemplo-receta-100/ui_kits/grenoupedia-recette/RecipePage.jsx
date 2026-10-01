
function SectionHead({ n, kicker, title }) {
  return <div style={{ marginBottom: 24 }}>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--noir-2)' }}>{n} — {kicker}</div>
    <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 36px)', margin: '8px 0 0' }}>{title}</h2>
  </div>;
}

function RecipePage({ R }) {
  const { Breadcrumbs, CutSelector, MetaBar, FicheTechnique, PairingCard, ErrorCallout, IngredientList, CookingTimeline, StepList, Ligne, Button, CUTS } = window.GNS;
  const [cut, setCut] = React.useState(R.cutId || 'premium');
  const asideRef = React.useRef(null);
  const [stick, setStick] = React.useState(24);
  React.useEffect(() => {
    const m = () => { const a = asideRef.current; if (a) setStick(Math.min(24, window.innerHeight - a.offsetHeight - 24)); };
    m(); window.addEventListener('resize', m);
    const ro = window.ResizeObserver ? new ResizeObserver(m) : null; ro && asideRef.current && ro.observe(asideRef.current);
    return () => { window.removeEventListener('resize', m); ro && ro.disconnect(); };
  }, []);
  const toc = [['erreur', 'L\u2019erreur à éviter'], ['ingredients', 'Ingrédients'], ['cuisson', 'Infographie de cuisson'], ['etapes', 'Pas à pas'], ['conservation', 'Conservation']];
  const go = id => { const el = document.getElementById('s-' + id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' }); };
  return <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '22px 0', borderBottom: '1px solid var(--filet-clair)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: 'var(--tracking-wordmark)' }}>GRENOUCERIE</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--noir-2)' }}>GRENOUPEDIA</span>
    </header>
    <section style={{ paddingTop: 36 }}>
      <Breadcrumbs items={[{ label: 'Accueil', href: '#' }, { label: 'Grenoupedia', href: '#' }, { label: 'Recettes', href: '#' }, { label: R.categorie }]} />
      <div style={{ marginTop: 28 }}><CutSelector value={cut} onChange={setCut} /></div>
      <h1 style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.04, margin: '22px 0 0', maxWidth: '18ch', textWrap: 'balance' }}>{R.titre}</h1>
      <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--noir-2)', maxWidth: '56ch', margin: '20px 0 28px' }}>{R.chapo}</p>
      {R.statut && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--noir-2)', border: '1px dashed var(--filet-clair)', padding: '8px 12px', margin: '0 0 20px', maxWidth: '72ch' }}>{R.statut}</div>}
      <MetaBar items={R.meta} />
      <figure style={{ margin: '32px 0 0' }}>
        <div style={{ aspectRatio: '16/9', background: 'var(--blanc-os-2)', border: '1px solid var(--filet-clair)', display: 'flex', alignItems: 'flex-end', padding: 16, fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--noir-2)' }}>Photo LA MATIÈRE · 16:9 · plat dressé</div>
        <figcaption style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginTop: 10, fontSize: 15, color: 'var(--noir-2)' }}><span>{R.legende}</span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>Photographie Grenoucerie</span></figcaption>
      </figure>
    </section>
    <div style={{ display: 'grid', gridTemplateColumns: 'var(--sidebar-width) minmax(0,1fr)', gap: 56, marginTop: 64, alignItems: 'start' }}>
      <aside ref={asideRef} style={{ position: 'sticky', top: stick, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <nav aria-label="Sommaire">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, borderBottom: '1px solid var(--noir)', paddingBottom: 6 }}>SOMMAIRE</div>
          {toc.map(([id, l], i) => <button key={id} type="button" onClick={() => go(id)} style={{ cursor: 'pointer', display: 'flex', gap: 10, width: '100%', textAlign: 'left', background: 'none', border: 0, borderBottom: '1px solid var(--filet-clair)', padding: '9px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--noir)' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--noir-2)' }}>0{i + 1}</span>{l}</button>)}
        </nav>
        <FicheTechnique cut={cut} calibre={undefined} rows={[{ label: 'Calibre', value: R.calibre || 'Selon fiche du lot' }, { label: 'Usage', value: CUTS[cut].usage }]} note="Données nutritionnelles : uniquement avec la fiche technique du lot." />
        <PairingCard vin={R.vin} sansAlcool={R.sansAlcool} />
        <div style={{ background: 'var(--vert)', color: 'var(--blanc-os)', padding: 18 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>CHEFS & RESTAURATION</div>
          <p style={{ fontSize: 15, lineHeight: 1.5, margin: '8px 0 14px' }}>Calibres, fiches techniques et conditionnements pour la brigade.</p>
          <Button variant="inverse" size="sm" arrow href="#">Dossier technique & découpes 2026</Button>
        </div>
      </aside>
      <article style={{ minWidth: 0 }}>
        <div id="s-erreur"><ErrorCallout title={R.erreur.title} rule={R.erreur.rule}>{R.erreur.text}</ErrorCallout></div>
        <section id="s-ingredients" style={{ marginTop: 72, maxWidth: '68ch' }}><SectionHead n="02" kicker="La fiche ingrédients" title="Ingrédients pour 4 personnes" /><IngredientList groups={R.ingredients} /></section>
        <section id="s-cuisson" style={{ marginTop: 72 }}><SectionHead n="03" kicker="L’infographie de cuisson" title={R.cuissonTitre} /><CookingTimeline phases={R.phases} note={R.cuissonNote} /></section>
        <section id="s-etapes" style={{ marginTop: 72, maxWidth: '68ch' }}><SectionHead n="04" kicker="La recette pas à pas" title="La recette pas à pas" /><StepList steps={R.steps} /></section>
        <section id="s-conservation" style={{ marginTop: 72, maxWidth: '68ch' }}>
          <SectionHead n="05" kicker="Si vous n’avez pas tout mangé" title="Conservation et régénération" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[['Conserver', R.conservation], ['Régénérer', R.regeneration]].map(([t, x]) => <div key={t} style={{ border: '1px solid var(--filet-clair)', padding: 20 }}><h3 style={{ fontSize: 20 }}>{t}</h3><p style={{ margin: '8px 0 0', fontSize: 16, lineHeight: 1.6 }}>{x}</p></div>)}
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, marginTop: 12 }}>Réchauffer ne remet pas le délai à zéro.</p>
        </section>
      </article>
    </div>
    <div style={{ height: 96 }} />
  </div>;
}
window.RecipePage = RecipePage;
