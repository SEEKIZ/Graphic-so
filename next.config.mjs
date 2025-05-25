/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.clerk.dev', 'uploadcare.com', 'ucarecdn.com'],
  },
  // Disable HTTPS in development
  devServer: {
    https: false
  }
};

export default nextConfig;