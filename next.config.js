/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.3.22.3",
        port: "9000",
        pathname: "/picture-bucket/**",
      },
    ],
  },
};

module.exports = nextConfig;