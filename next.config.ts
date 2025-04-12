import type { NextConfig } from "next";
// import nextIntl from "next-intl/plugin";
// const {
//   withHydrationOverlay,
// } = require("@builder.io/react-hydration-overlay/next");



const nextConfig: NextConfig = {
  distDir: "out",
  // output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: 'waarta.waartaconnections.com',
      pathname: '/wp-content/uploads/**',
    }
      ,{
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
    {
      protocol: 'https',
      hostname: 'encrypted-tbn0.gstatic.com',
    },
    {
      protocol: 'https',
      hostname: 'upload.wikimedia.org',
    },
    {
      protocol: 'https',
      hostname: 'www.acmosrl.com',
    },
    ],

  },

};

export default nextConfig;


