/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["firebasestorage.googleapis.com", "cloud.geethg.com"],
    },
};

module.exports = nextConfig
