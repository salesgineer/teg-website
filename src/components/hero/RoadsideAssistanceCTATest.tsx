'use client';

export function RoadsideAssistanceCTATest() {
  return (
    <div
      style={{
        backgroundColor: '#dc2626',
        color: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        margin: '2rem 0',
        border: '4px solid red',
        zIndex: 9999,
        position: 'relative',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        TEST: Palīdzība uz ceļa
      </h2>
      <a
        href="tel:+37125201710"
        style={{
          display: 'block',
          backgroundColor: 'white',
          color: '#dc2626',
          padding: '1rem',
          borderRadius: '0.5rem',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1.25rem',
        }}
      >
        Zvani: +371 25 201 710
      </a>
    </div>
  );
}
