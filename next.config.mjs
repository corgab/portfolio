/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://dashboard.craftedhub.it/**')],
  },
};

export default nextConfig;
