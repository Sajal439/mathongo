/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  reactStrictMode: true,
};

export default nextConfig;
