import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { generateImagePlaceholder } from '@/lib/image-utils'

interface SanityImageProps {
  image: {
    asset: {
      _ref?: string
      _id?: string
      url?: string
    }
    alt?: string | { fr?: string; en?: string; ru?: string }
    caption?: string
  }
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

export default function SanityImage({
  image,
  width = 800,
  height = 400,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 85
}: SanityImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Helper function to get alt text from localized or string format
  const getAltText = (alt?: string | { fr?: string; en?: string; ru?: string }): string => {
    if (typeof alt === 'string') {
      return alt
    }
    if (typeof alt === 'object' && alt !== null) {
      return alt.fr || alt.en || alt.ru || 'Image'
    }
    return 'Image'
  }

  if (!image?.asset || (!image.asset._ref && !image.asset._id)) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <span className="text-gray-400 text-sm">Image non disponible</span>
      </div>
    )
  }

  try {
    let imageUrl: string | null = null

    // Si c'est un asset avec _ref (format Sanity standard)
    if (image.asset._ref) {
      imageUrl = urlFor({ asset: { _ref: image.asset._ref } })?.width(width).height(height).quality(quality).url() || null
    }
    // Si c'est un asset avec _id et url (format direct)
    else if (image.asset._id && image.asset.url) {
      imageUrl = urlFor({ _id: image.asset._id, url: image.asset.url })?.width(width).height(height).quality(quality).url() || null
    }
    
    if (!imageUrl) {
      throw new Error('Failed to generate image URL')
    }

    if (hasError) {
      return (
        <div 
          className={`bg-gray-200 flex items-center justify-center ${className}`}
          style={!fill ? { width, height } : undefined}
        >
          <span className="text-gray-400 text-sm">Erreur de chargement</span>
        </div>
      )
    }

    return (
      <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
        <Image
          src={imageUrl}
          alt={getAltText(image.alt)}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          priority={priority}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={generateImagePlaceholder(width, height)}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
        
        {/* Loading skeleton */}
        {isLoading && (
          <div 
            className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
            style={!fill ? { width, height } : undefined}
          />
        )}
        
        {/* Caption si présent */}
        {image.caption && !fill && (
          <p className="text-sm text-gray-500 mt-2 italic text-center">
            {image.caption}
          </p>
        )}
      </div>
    )
  } catch (error) {
    console.error('SanityImage error:', error)
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <span className="text-gray-400 text-sm">Erreur de chargement</span>
      </div>
    )
  }
}
