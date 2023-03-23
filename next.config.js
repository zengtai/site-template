/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === "development" ? false : true,
  },
  // basePath: "",
  // trailingSlash: true,
};

module.exports = nextConfig;
