import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@vercel/font']
  }
};

export default nextConfig;
