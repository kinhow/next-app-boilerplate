/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BUILD_ENV: process.env.BUILD_ENV,
    STAGING: process.env.STAGING,
  },
};

module.exports = nextConfig;
