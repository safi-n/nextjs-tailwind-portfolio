/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/photos/**',
      },
    ],
    domain: ['source.unsplash.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'style')],
  },
}

// to Add Webpack try this one and add webpack to model.export = nextconfig, !webpack
// const webpack = {
//   module: {
//     rules: [
//       {
//         test: /\.svg$/i,
//         issuer: /\.[jt]sx?$/,
//         use: ['@svgr/webpack'],
//       },
//     ],
//   },
  
// }

module.exports = nextConfig
