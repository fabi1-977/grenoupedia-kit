import React from 'react';

export function PairingCard({ vin, sansAlcool }) {
  const Item = ({ label, d }) => d ? (
    <div style={{ padding: '12px 0', borderBottom: '1px solid var(--filet-clair)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir-2)', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, lineHeight: 1.2, marginTop: 4 }}>{d.name}</div>
      {d.note && <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--noir-2)', marginTop: 4 }}>{d.note}</div>}
    </div>
  ) : null;
  return (
    <section>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-mono)', color: 'var(--noir)', textTransform: 'uppercase', paddingBottom: 6, borderBottom: '1px solid var(--noir)' }}>Accords</div>
      <Item label="Accord vin" d={vin} />
      <Item label="Sans alcool" d={sansAlcool} />
    </section>
  );
}
