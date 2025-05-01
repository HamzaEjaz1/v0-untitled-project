/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
