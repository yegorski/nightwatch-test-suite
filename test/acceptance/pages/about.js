var commonSelectors = require('../selectors/common');

module.exports = function(client) {
  this.selectors = {
    pageLoaded: 'img[alt="headshot.jpg"]',
    founderPhoto: 'img[alt="headshot.jpg"]'
  };

  this.url = '/about';

  this.nav = () => {
    client.url(`${client.globals.url}${this.url}`);
    return client;
  };

  this.verifyPageLoaded = () => {
    client
      .waitForElementVisible(this.selectors.pageLoaded)
      .waitForElementVisible(commonSelectors.footer.footerImage);
    return client;
  };

  this.navAndVerify = () => {
    this.nav();
    this.verifyPageLoaded();
    return client;
  };
};
