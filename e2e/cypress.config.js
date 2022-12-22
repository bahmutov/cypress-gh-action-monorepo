const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    fixturesFolder: false,
    specPattern: 'cypress/integration/*.cy.js',
  },
})
