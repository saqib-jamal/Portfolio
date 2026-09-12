import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#F7F5F2',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: 20,
                fontFamily: 'monospace',
                color: '#2B3A67',
                marginBottom: 20,
              },
              children: 'Software Engineer — security & cryptography',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 80,
                fontWeight: 500,
                color: '#1B1B18',
                lineHeight: 1.1,
              },
              children: 'Saqib Jamal',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 32,
                fontWeight: 500,
                color: '#4A4740',
                marginTop: 24,
              },
              children: 'I build systems, then ask what breaks them.',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
}