export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "__tests__/mocks/", "/cypress/"],
};
