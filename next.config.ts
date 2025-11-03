import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Enables static export (replaces next export)
  images: {
    unoptimized: true, // ✅ Avoids image optimization errors in static build
  },
};

export default nextConfig;
