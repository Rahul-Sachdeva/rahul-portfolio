import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  async rewrites() {
    return [
      {
        source: "/github/:path*",
        destination: "https://github.com/:path*", // Proxy to Backend
      },
      {
        source: "/leetcode/:path*",
        destination: "https://leetcode.com/graphql/:path*", // Proxy to Backend
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts',
      },
    },
  },
};

module.exports = nextConfig;
module.exports = {
  async rewrites() {
    return [
      {
        source: "/github/:path*",
        destination: "https://github.com/:path*", // Proxy to Backend
      },
      {
        source: "/leetcode/:path*",
        destination: "https://leetcode.com/graphql/:path*", // Proxy to Backend
      },
    ];
  },
};
