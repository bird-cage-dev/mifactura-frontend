import type { NextConfig } from "next"

const nextConfig: NextConfig = {

  /* config options here */
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
    ],
  },
}

export default nextConfig
