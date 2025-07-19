import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Your Company - Professional Digital Solutions'
export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 'bold',
              marginBottom: 20,
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '20px 40px',
            }}
          >
            Your Company
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 'normal',
              opacity: 0.9,
              maxWidth: '80%',
            }}
          >
            Professional Digital Solutions
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
