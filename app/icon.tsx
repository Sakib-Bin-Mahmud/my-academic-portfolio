import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F1626',
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            border: '2.5px solid #5EEAD4',
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
