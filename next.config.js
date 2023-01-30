/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
