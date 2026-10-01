import React from 'react';

export function ErrorCallout({ kicker = 'L\u2019erreur à éviter', title, children, rule }) {
  return (
    <section style={{ background: 'var(--vert)', color: 'var(--blanc-os)', padding: 'clamp(24px, 4vw, 40px)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase' }}>{kicker}</div>
      {title && <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.2vw, 36px)', lineHeight: 1.1, letterSpacing: 'var(--tracking-display)', margin: '12px 0 14px', color: 'var(--blanc-os)' }}>{title}</h2>}
      <div style={{ fontSize: 17, lineHeight: 1.62, maxWidth: '60ch' }}>{children}</div>
      {rule && (
        <div style={{ marginTop: 22 }}>
          <div style={{ position: 'relative', height: 2, background: 'var(--acier)' }}><span style={{ position: 'absolute', left: '74%', top: -7, width: 2, height: 16, background: 'var(--acier)' }} /></div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 500, marginTop: 14 }}>{rule}</div>
        </div>
      )}
    </section>
  );
}
