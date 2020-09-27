/**
 * # Babel Configuration
 *
 * See: https://babeljs.io
 */

const tsconfigJSON = require('./tsconfig.json');

const pathMapping = tsconfigJSON.compilerOptions.paths;
const pathAliases = Object.keys(pathMapping).reduce((pathAliases, key) => {
  pathAliases[key.replace('/*', '')] = pathMapping[key][0].replace('/*', '');
  return pathAliases;
}, {});

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          loose: true,
          modules: false,
          useBuiltIns: 'entry',
          corejs: {
            version: 3,
            proposals: true,
          },
          targets: {
            esmodules: true,
          },
          bugfixes: true,
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: pathAliases,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
              targets: {
                node: '12.16.1',
              },
            },
          },
        ],
      ],
    },
  },
};
