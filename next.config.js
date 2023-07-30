/** @type {import('next').NextConfig} */
const nextConfig = {}


// module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        // {
        //   protocol: 'http',
        //   hostname: 'localhost',
        //   port: '8000',
        //   pathname: '/**',
        // },
        // {
        //   protocol: 'http',
        //   hostname: 'localhost',
        //   port: '8000',
        //   pathname: '/media/**',
        // },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
     eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  }
