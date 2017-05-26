const commonSelectors = require('../selectors/common');

module.exports = function testimonials(client) {
  this.selectors = {
    pageLoaded: '.horizontalrule-block'
  };

  this.url = '/testimonials';

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
