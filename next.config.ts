import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/blue-liberty" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/blue-liberty" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
