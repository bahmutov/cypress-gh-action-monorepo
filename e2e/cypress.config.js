const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    fixturesFolder: false,
    specPattern: 'e2e/cypress/integration/*.cy.js',
  },
})
