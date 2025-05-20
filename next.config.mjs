// @ts-check

// Clerk configuration is handled via environment variables and middleware, no need to import withClerkConfig or export withClerkMiddleware/getAuth here.
// Next.js configuration is done here, including images and other settings.
// You can add more configurations as needed.

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
            {
                protocol: 'https',
                hostname: 'ucarecdn.com',
            },
        ],
    },
};

// If you encounter issues with .mjs, rename this file to next.config.js and use:
// module.exports = nextConfig;

export default nextConfig;
