import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  distDir: 'dist', // Output directory
  images: {
    unoptimized: true, // Disable built-in image optimization
  },
};

export default nextConfig;
