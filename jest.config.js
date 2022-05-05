/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')
module.exports = {
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ["<rootDir>/src/apis/"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["<rootDir>/test/**/*.test.ts?(x)"],
  collectCoverage: true,
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  coveragePathIgnorePatterns: [
    "node_modules",
    "<rootDir>/src/pages/_app.tsx",
    "<rootDir>/src/pages/",
    "<rootDir>/src/stores/"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.ts?(x)",
    "<rootDir>/src/pages/**/*.ts?(x)"
  ]
};