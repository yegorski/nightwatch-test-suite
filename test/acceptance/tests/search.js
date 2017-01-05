var commonSelectors = require('../selectors/common');

module.exports = {
  before: (client, done) => {
    client
      .url("about:blank")
      .waitForElementVisible("body", 1)
      .resizeWindow(1280, 800, () => {
        done();
      });
  },

  'Verify results are returns after search': (client) => {
    var searchTerm = 'backup';

    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.searchIcon)
      .search.performSearch(searchTerm)
      .elements('css selector', client.search.selectors.searchResults, function(numberOfResults) {
        client.assert.ok(numberOfResults.value.length > 0, 'There were 0 search results.');
      });
  },

  'Verify able to open one of the results': (client) => {
    var firstSearchResult = client.search.selectors.nthSearchResultLink.replace('INDEX', 1);

    client
      .util.click(firstSearchResult)
      .blog.verifyBlogPostLoaded();
  }
};
