var config = require('config');
var commonSelectors = require('../selectors/common');

module.exports = function(client) {
  this.selectors = {
    pageLoaded: 'img[alt="headshot.jpg"]'
  };

  this.url = '/about';

  this.nav = () => {
    client.url(`${config.url}${this.url}`);
    return client;
  };

  this.verifyPageLoaded = () => {
    client.waitForElementVisible(this.selectors.pageLoaded);
    client.waitForElementVisible(commonSelectors.footer.footerImage);
    return client;
  };
};
