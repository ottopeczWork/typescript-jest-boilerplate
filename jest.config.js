module.exports = {
  preset: 'ts-jest',
  testMatch: ["**/tests/**/*.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  globals: {
    'ts-jest': {
      diagnostics: true
    }
  }
};
