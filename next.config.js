/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },images: {
        domains: ['cdn1.iconfinder.com','api.slingacademy.com'],
      },
}

module.exports = nextConfig