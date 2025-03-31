module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
   reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,  // ✅ Enable HTML report generation
      json: true,
      timestamp: "mmddyyyy_HHMMss",
  },
};
