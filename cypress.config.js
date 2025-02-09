const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6tu1rs',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle:'Curso de Cypress',
      reportPageTitle:'Curso de Cypress'
    },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
