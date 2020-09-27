/**
 * # PostCSS Configuration
 *
 * See: https://postcss.org
 *      https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins
 */

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      // https://github.com/csstools/postcss-preset-env#stage
      stage: 1,
    },
  },
};
