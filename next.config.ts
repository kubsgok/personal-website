import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move the dev-only indicator off the bottom-left theme toggle.
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
