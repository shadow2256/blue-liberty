import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blue-liberty",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
