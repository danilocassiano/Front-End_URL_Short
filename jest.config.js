/** 
 * @type {import('ts-jest').JestConfigWithTsJest} 
 * */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 20000,
  testMatch: ['**/src/__tests__/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  clearMocks: true,
  setupFiles: ['./src/utils/test-setup.ts'],
};