import { urlFor } from '@/lib/sanity'

interface ImageAsset {
  asset: {
    _ref: string
  }
  alt?: string
  caption?: string
}

/**
 * Génère une URL d'image Sanity avec gestion d'erreur
 */
export function generateImageUrl(
  imageAsset: ImageAsset,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'jpg' | 'png'
  } = {}
): string | null {
  if (!imageAsset?.asset?._ref) {
    console.warn('generateImageUrl: Missing asset reference')
    return null
  }

  try {
    const { width = 800, height = 400, quality = 80, format = 'webp' } = options
    
    const imageBuilder = urlFor(imageAsset)
    
    if (!imageBuilder) {
      console.warn('generateImageUrl: Failed to create image builder')
      return null
    }
    
    return imageBuilder
      .width(width)
      .height(height)
      .quality(quality)
      .format(format)
      .url()
  } catch (error) {
    console.error('generateImageUrl error:', error)
    return null
  }
}

/**
 * Génère des URLs d'image responsive pour différentes tailles
 */
export function generateResponsiveImageUrls(
  imageAsset: ImageAsset,
  sizes: Array<{ width: number; height?: number }> = [
    { width: 640, height: 320 },
    { width: 768, height: 384 },
    { width: 1024, height: 512 },
    { width: 1280, height: 640 }
  ]
): Array<{ src: string; width: number; height: number }> {
  if (!imageAsset?.asset?._ref) {
    return []
  }

  return sizes
    .map(({ width, height }) => {
      const calculatedHeight = height || Math.round(width * 0.5) // Ratio 2:1 par défaut
      const url = generateImageUrl(imageAsset, { width, height: calculatedHeight })
      
      if (!url) return null
      
      return {
        src: url,
        width,
        height: calculatedHeight
      }
    })
    .filter(Boolean) as Array<{ src: string; width: number; height: number }>
}

/**
 * Génère un placeholder base64 pour les images
 */
export function generateImagePlaceholder(width = 800, height = 400): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
        Loading...
      </text>
    </svg>
  `
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

/**
 * Valide si une référence d'asset Sanity est valide
 */
export function isValidImageAsset(imageAsset: unknown): imageAsset is ImageAsset {
  if (typeof imageAsset !== 'object' || imageAsset === null) {
    return false
  }
  
  const obj = imageAsset as Record<string, unknown>
  
  if (!('asset' in obj) || typeof obj.asset !== 'object' || obj.asset === null) {
    return false
  }
  
  const asset = obj.asset as Record<string, unknown>
  
  return (
    '_ref' in asset &&
    typeof asset._ref === 'string' &&
    asset._ref !== ''
  )
}
