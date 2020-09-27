/**
 * # ESLint Configuration
 *
 * See: https://eslint.org
 *      https://eslint.org/docs/rules
 *      https://github.com/typescript-eslint/typescript-eslint
 */

// eslint-disable-next-line import/no-extraneous-dependencies,node/no-unpublished-require
const typescriptEslintRecommendedRequiringTypeChecking = require('@typescript-eslint/eslint-plugin')
  .configs['recommended-requiring-type-checking'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['import', 'module-resolver', '@typescript-eslint', 'prettier', 'unicorn'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:node/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:compat/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: {
    radix: 'warn',
    // NOTE: allow overriding of caught errors for appropriate masking
    'no-ex-assign': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        // https://prettier.io/docs/en/rationale.html#imports
        ignorePattern: '^import\\W.*',
      },
    ],
    'max-params': 'warn',
    'consistent-return': 'off',
    'no-console': 'off',
    'no-magic-numbers': [
      'warn',
      {
        enforceConst: true,
        ignore: [-1, 0, 1],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // transpiling code through babel (bundling using rollup/webpack)
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    // adjust for workspace usage
    'node/no-extraneous-import': 'off',
    // NOTE: currently doesn't correctly recognize path aliases
    'import/no-unresolved': 'off',
    'import/no-anonymous-default-export': 'warn',
    'import/no-default-export': 'warn',
    'module-resolver/use-alias': 'warn',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'sibling',
          },
        ],
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'unicorn/no-null': 'off',
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          params: {
            parameters: false,
          },
          args: {
            arguments: false,
          },
          db: {
            database: false,
          },
          props: {
            properties: false,
          },
          doc: {
            document: false,
          },
          ref: {
            reference: false,
          },
          mod: {
            module: false,
          },
          req: {
            request: false,
          },
          res: {
            response: false,
          },
          ctx: {
            context: false,
          },
        },
      },
    ],
    'unicorn/no-reduce': 'off',
  },
  overrides: [
    // JavaScript
    {
      files: ['*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: null,
      },
      // exclude all the rules from 'plugin:@typescript-eslint/recommended-requiring-type-checking'
      // eslint-disable-next-line unicorn/no-reduce
      rules: Object.keys(typescriptEslintRecommendedRequiringTypeChecking.rules).reduce(
        (rules, key) => {
          rules[key] = 'off';
          return rules;
        },
        {
          '@typescript-eslint/no-var-requires': 'off',
          '@typescript-eslint/explicit-member-accessibility': 'off',
          'import/no-anonymous-default-export': 'off',
          'import/no-default-export': 'off',
        },
      ),
    },
    // markdown
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      plugins: ['markdown'],
    },
    // tests
    {
      files: ['test/**', '**/*.spec.tsx', '**/*.spec.ts'],
      env: {
        jest: true,
      },
      plugins: ['jest', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
        'plugin:testing-library/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        'no-magic-numbers': 'off',
        'max-len': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    // stories
    {
      files: ['**/*.stories.tsx', '**/*.stories.ts'],
      rules: {
        'no-magic-numbers': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    // react
    {
      files: ['**.tsx'],
      plugins: ['react', 'react-hooks', 'jsx-a11y'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // using typescript prop-types check are not necessary
        'react/prop-types': 'off',
      },
    },
  ],
};
