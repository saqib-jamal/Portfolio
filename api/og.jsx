import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#F7F5F2',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontFamily: 'monospace',
            color: '#2B3A67',
            marginBottom: 20,
          }}
        >
          Software Engineer — security & cryptography
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 500,
            color: '#1B1B18',
            lineHeight: 1.1,
          }}
        >
          Saqib Jamal
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: '#4A4740',
            marginTop: 24,
          }}
        >
          I build systems, then ask what breaks them.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}