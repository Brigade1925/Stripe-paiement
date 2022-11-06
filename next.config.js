/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.pravatar.cc',
      'platform-lookaside.fbsbx.com',
      'source.unsplash.com',
    ],
  },
  i18n: {
    locales: ['en', 'ar', 'de', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
