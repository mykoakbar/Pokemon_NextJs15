import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",

      },
      {
        protocol: "https",
        hostname: "archives.bulbagarden.net",
        pathname: "**",

      },
    ],
  },
};

export default nextConfig;
