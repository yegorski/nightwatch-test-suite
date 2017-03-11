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

// var chromedriver = require('chromedriver');

var utils = require('../lib/utils');

var logError = function (client, callback) {
  client.end(function () {
    console.log(client.err);
    callback();
  });
};

var closeBrowser = function (client, callback) {
  if (client.sessionId) {
    client.end(function () {
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

  init: (client, done) => {
    // chromedriver.start();

    client.util = new utils(client);
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
