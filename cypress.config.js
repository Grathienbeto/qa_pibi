const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportFilename: "[status]_[datetime]-[name]-report",
    html: true
  },

  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
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
