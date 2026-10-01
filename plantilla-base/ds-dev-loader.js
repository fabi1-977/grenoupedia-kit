/* Preview loader: uses the compiled _ds_bundle.js namespace when present; otherwise
   transpiles components/*.jsx in the browser (needs React + Babel standalone loaded first). */
window.loadDS = async function (base) {
  const find = () => { for (const k of Object.keys(window)) { try { const v = window[k]; if (v && typeof v === 'object' && v.Ligne && v.CookingTimeline) return v; } catch (e) {} } return null; };
  let hit = find(); if (hit) return hit;
  const bundle = base + '_ds_' + 'bundle.js';
  const ok = await fetch(bundle, { method: 'HEAD' }).then(r => r.ok).catch(() => false);
  if (ok) await new Promise(res => { const s = document.createElement('script'); s.src = bundle; s.onload = res; s.onerror = res; document.head.appendChild(s); });
  hit = find(); if (hit) return hit;
  const files = ['core/Button', 'core/Tag', 'core/Ligne', 'core/DataBand', 'navigation/Breadcrumbs', 'navigation/Tabs',
    'recette/CutBadge', 'recette/CutSelector', 'recette/CalibreRule', 'recette/FicheTechnique', 'recette/MetaBar', 'recette/ErrorCallout', 'recette/PairingCard',
    'preparation/IngredientList', 'preparation/StepList', 'preparation/CookingTimeline'];
  const srcs = await Promise.all(files.map(f => fetch(base + 'components/' + f + '.jsx').then(r => r.text())));
  const NS = {};
  srcs.forEach(src => {
    const names = [...src.matchAll(/export\s+(?:function|const)\s+(\w+)/g)].map(m => m[1]);
    const body = src.replace(/^import .*$/gm, '').replace(/export\s+(function|const)\s/g, '$1 ');
    const keys = Object.keys(NS);
    const pre = keys.length ? 'const {' + keys.join(',') + '} = NS;\n' : '';
    const code = Babel.transform(pre + body, { presets: ['react'] }).code;
    new Function('React', 'NS', code + '\n' + names.map(n => 'NS.' + n + ' = ' + n + ';').join('\n'))(React, NS);
  });
  return NS;
};
