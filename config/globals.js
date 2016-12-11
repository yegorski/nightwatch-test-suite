/*
 * Requiring chromedriver is another way of communicating with teh browser.
 * Do this when you do not start up Selenium when Nightwatch runs
 * via
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

module.exports = {
  waitForConditionTimeout: 5000,

  beforeEach: (client, done) => {
    // chromedriver.start();
    done();
  },

  afterEach: (client, done) => {
    // chromedriver.stop();
    client.end();
    done();
  }
};
