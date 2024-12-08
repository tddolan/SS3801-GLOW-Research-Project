import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/ss3801-glow-research-project",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
