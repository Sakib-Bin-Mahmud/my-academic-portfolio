import { ImageResponse } from 'next/og';

export const alt = 'Sakib Mahmud Sovon \u2014 Computer Vision & Multimodal AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0F1626',
          position: 'relative',
        }}
      >
        {/* corner brackets, matching the site's signature motif */}
        <div style={{ position: 'absolute', top: 40, left: 40, width: 28, height: 28, borderTop: '3px solid #5EEAD4', borderLeft: '3px solid #5EEAD4' }} />
        <div style={{ position: 'absolute', top: 40, right: 40, width: 28, height: 28, borderTop: '3px solid #5EEAD4', borderRight: '3px solid #5EEAD4' }} />
        <div style={{ position: 'absolute', bottom: 40, left: 40, width: 28, height: 28, borderBottom: '3px solid #5EEAD4', borderLeft: '3px solid #5EEAD4' }} />
        <div style={{ position: 'absolute', bottom: 40, right: 40, width: 28, height: 28, borderBottom: '3px solid #5EEAD4', borderRight: '3px solid #5EEAD4' }} />

        <div style={{ display: 'flex', color: '#5EEAD4', fontSize: 22, fontFamily: 'monospace', letterSpacing: 2, marginBottom: 20 }}>
          COMPUTER VISION &middot; MULTIMODAL AI &middot; ACCESSIBILITY
        </div>
        <div style={{ display: 'flex', color: '#F1EDE4', fontSize: 64, fontWeight: 600 }}>
          Sakib Mahmud Sovon
        </div>
        <div style={{ display: 'flex', color: '#8B93A7', fontSize: 26, marginTop: 20, maxWidth: 800 }}>
          Real-time Bengali Sign Language translation, 99.56% accuracy &mdash;
          published at IEEE COMPAS 2025
        </div>
      </div>
    ),
    { ...size }
  );
}
