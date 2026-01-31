import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages/Static hosting
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js Image Optimization API
  },
};

export default nextConfig;
