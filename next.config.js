const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  rules: { 'react/no-unescaped-entities': 0 },
  images: {
    domains: [
      'img.flawlessfiles.com',
      'cdn.amediatv.uz',
      'via.placeholder.com',
      'i.imgur.com',
      'uzbeklar.biz',
    ],
  },
};

module.exports = withNextVideo(nextConfig);
// module.exports = nextConfig;
