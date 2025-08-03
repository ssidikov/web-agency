/** @type {import('next').NextConfig} */
const nextConfig = {
  // Simple transpilation for Sanity
  transpilePackages: ['@sanity/client'],
  
  // Image optimization configuration
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'sidikoff.com',
        pathname: '/images/**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Webpack configuration with minimal polyfills
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'self': 'globalThis'
        })
      )
    }
    
    return config
  },
  
  // Basic redirects
  async redirects() {
    return []
  },
  
  // Disable source maps for faster builds
  productionBrowserSourceMaps: false,
}

export default nextConfig
