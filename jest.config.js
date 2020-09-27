/**
 * # Jest Configuration
 *
 * See: https://jestjs.io/ - https://jestjs.io/docs/en/configuration
 */

module.exports = {
  verbose: true,
  testRunner: 'jest-circus/runner',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/test/setup-dom.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/mocks/object-loader.js',
    '\\.graphql$': '<rootDir>/test/mocks/graphql-queries.js',
  },
  testMatch: ['<rootDir>/src/**/?(*.)spec.{ts,tsx}'],
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/src/types.ts',
    '!**/src/backend/**/index.ts',
    '!**/src/**/__support__/*.{ts,tsx}',
    // skip directory as files are parsed as Next.js pages
    '!**/src/pages/**',
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 45,
      functions: 53,
      lines: 60,
    },
  },
};
