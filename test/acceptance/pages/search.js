var commonSelectors = require('../selectors/common');

module.exports = function(client) {
  this.selectors = {
    pageLoaded: '.search-result',
    searchInput: '.header-search-form-input',
    searchResults: '.search-result .ContentItem',
    nthSearchResultLink: '.search-result:nth-child(INDEX) .sqs-title'
  };

  this.url = '/search?q=';

  this.nav = (searchTerm) => {
    client.url(`${client.globals.url}${this.url}${searchTerm}`);
    return client;
  };

  this.verifyPageLoaded = () => {
    client
      .waitForElementVisible(this.selectors.pageLoaded)
      .waitForElementVisible(commonSelectors.footer.footerImage);
    return client;
  };

  this.performSearch = (searchTerm) => {
    client
      .util.setValue(this.selectors.searchInput, [searchTerm, client.Keys.ENTER])
      .waitForElementVisible(this.selectors.searchResults);
    return client;
  };
};
