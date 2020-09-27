/**
 * # Tailwind Configuration
 *
 * See: https://tailwindcss.com/docs/configuration
 *      https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  purge: {
    content: ['./src/*.tsx', './src/**/*.tsx'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
