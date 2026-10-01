import React from 'react';

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none', margin: 0, padding: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)' }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <React.Fragment key={i}>
              <li aria-current={last ? 'page' : undefined} style={{ color: last ? 'var(--noir)' : 'var(--noir-2)' }}>
                {last || !it.href ? it.label : <a href={it.href} style={{ color: 'inherit', textDecoration: 'none' }}>{it.label}</a>}
              </li>
              {!last && <li aria-hidden="true">/</li>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
