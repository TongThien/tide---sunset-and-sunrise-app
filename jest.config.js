module.exports = {
    moduleDirectories: ['./node_modules', 'src'],
    // other important stuff
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
    testEnvironment: 'jest-environment-jsdom'
  }