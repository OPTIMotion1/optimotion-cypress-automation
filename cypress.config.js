const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    baseUrl: "https://dashboard.optimotion.in",

    viewportWidth: 1366,

    viewportHeight: 768,

    chromeWebSecurity: false,

    defaultCommandTimeout: 100000,

    pageLoadTimeout: 600000

  }

});