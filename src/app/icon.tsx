import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          background: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          border: '1px solid #E5E7EB',
        }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #374151 50%, #000000 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '20px',
            fontWeight: 'bold',
          }}>
          S
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
