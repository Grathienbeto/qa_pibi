const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  viewportWidth: 1500,
  viewportHeight: 800,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    screenshotOnRunFailure: false,
    // pageLoadTimeout: 5000,
    video: false,
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
  },
});
