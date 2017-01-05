/*
 * Requiring chromedriver is another way of communicating with teh browser.
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

// var chromedriver = require('chromedriver');

var utils = require('../lib/utils');

module.exports = {
  throwOnMultipleElementsReturned: false,

  waitForConditionTimeout: 10000,

  url: 'https://www.jakescomputerhospital.com',

  beforeEach: (client, done) => {
    // chromedriver.start();

    client.util = new utils(client);
    client.util.addPageObjectsOnClient();

    done();
  },

  afterEach: (client, done) => {
    // chromedriver.stop();
    client.end(done);
  }
};
