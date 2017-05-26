/*
 * Requiring chromedriver is another way of communicating with the browser.
 * Do this when you do not start up Selenium when Nightwatch runs via the following steps:
 * Install chromedriver:
 *   npm install chromedriver --save
 * Edit noghtwatch.json:
 *   "selenium": {
 *     "start_process": false,
 *     ...
 * And then by specifying chromedriver settings:
 *   "test_settings": {
 *     "default": {
 *       "selenium_host": "localhost",
 *       "selenium_port": 9515,
 *       "default_path_prefix": "",
 *       ...
 */

// const chromedriver = require('chromedriver');

const Utils = require('../lib/utils');

const logError = (client, callback) => {
  client.end(() => {
    console.log(client.err); // eslint-disable-line no-console
    callback();
  });
};

const closeBrowser = (client, callback) => {
  if (client.sessionId) {
    client.end(() => {
      callback();
    });
  } else {
    callback();
  }
};

module.exports = {
  throwOnMultipleElementsReturned: false,

  waitForConditionTimeout: 10000,

  url: 'https://www.jakescomputerhospital.com',

  setup: (client, done) => {
    // chromedriver.start();

    client.util = new Utils(client); // eslint-disable-line no-param-reassign
    client.util.addPageObjectsOnClient();

    done();
  },

  teardown: (client, done) => {
    // chromedriver.stop();

    if (client.err) {
      logError(client, done);
    }
    closeBrowser(client, done);
  }
};
