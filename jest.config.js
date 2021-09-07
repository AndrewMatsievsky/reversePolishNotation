module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/tests/**/*.test.ts"],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
