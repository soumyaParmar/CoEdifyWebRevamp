/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
    productionBrowserSourceMaps: false,
    images: {
        domains: ["lh3.googleusercontent.com"],
        loader: 'custom',
        loaderFile: './imageLoader.js',
    },
};

export default nextConfig;
