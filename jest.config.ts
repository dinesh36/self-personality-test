import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  // verbose: true,
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/build/**',
    '!<rootDir>/*.__mocks__.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/jest-helper/**',
    '!.eslintrc.js',
    '!babel.config.js',
    '!jest.config.ts',
    '!next.config.js',
    '!<rootDir>/**/*.type.ts',
    '!<rootDir>/**/*.types.ts',
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    //
    // // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': '<rootDir>/__mocks__/fileMock.js',

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '@jestHelper/(.*)$': '<rootDir>/jest-helper/$1',
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest-helper/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/build/',
    '<rootDir>/coverage/',
    '<rootDir>/src/modules/test/test/test.tsx',
    '<rootDir>/pages/test.tsx',
    '<rootDir>/jest-helper/',
  ],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};

export default config;
