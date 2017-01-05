var commonSelectors = require('../selectors/common');

module.exports = function(client) {
  this.selectors = {
    pageLoaded: 'img[alt="DREAM IT, BUILD IT!"]',
    firstImage: 'img[alt="DREAM IT, BUILD IT!"]',
    firstImageCaption: 'img[alt="DREAM IT, BUILD IT!"]'
  };

  this.url = '/';

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
  }
};
