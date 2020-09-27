/**
 * # Next.js Configuration
 *
 * See: https://nextjs.org/docs/api-reference/next.config.js/introduction
 *      https://github.com/zeit/next.js/blob/canary/packages/next/next-server/server/config.ts
 */

// eslint-disable-next-line node/no-unpublished-require
const withPlugins = require('next-compose-plugins');
// eslint-disable-next-line node/no-unpublished-require
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  experimental: {
    modern: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader',
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        handleImages: ['ico'],
        optimizeImages: false,
      },
    ],
  ],
  nextConfig,
);
