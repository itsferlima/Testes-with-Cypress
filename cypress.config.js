const { defineConfig } = require("cypress");

module.exports = defineConfig({

  //usado para q seja salvo relatorios dos testes
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false //n salvas todas as tentandas, por questoes de data
    }
  },
  chromeWebSecurity: false,
  
  e2e: {
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});
