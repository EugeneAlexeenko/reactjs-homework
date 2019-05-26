module.exports = {
  moduleNameMapper: {
    "\\.(scss)$": "babel-jest"
  },
  "setupFilesAfterEnv": ["<rootDir>src/setupTests.js"],
  modulePathIgnorePatterns: ["<rootDir>/cypress/"]
};
