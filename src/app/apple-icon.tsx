import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          fontWeight: 'bold',
          background: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '22%',
          border: '2px solid #E5E7EB',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #374151 50%, #000000 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '80px',
            fontWeight: 'bold',
          }}
        >
          S
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
