module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$",
    "<rootDir>/dist/"
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': '<rootDir>/__tests__/__mocks__/styleMock.js',
    "\\.(mp4)$": "<rootDir>/__tests__/__mocks__/videoMock.js"
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
