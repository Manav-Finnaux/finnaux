import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
        pathname: '/public/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/uploads/**'
      },
      new URL('http://192.168.0.27:1337/uploads/*'),
      {
        protocol: 'https',
        hostname: 'strapi.loancrm.xyz',
        pathname: '/uploads/*'
      }
    ]
  }
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     unoptimized: true,
//     domains: [
//       "source.unsplash.com",
//       "images.unsplash.com",
//       "ext.same-assets.com",
//       "ugc.same-assets.com",
//     ],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "source.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "ext.same-assets.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "ugc.same-assets.com",
//         pathname: "/**",
//       },
//     ],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// module.exports = nextConfig;
