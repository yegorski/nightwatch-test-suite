var commonSelectors = require('../selectors/common');

describe('Search', function () {
  before(function (client, done) {
    client.globals.init(client, done);
  });

  after(function (client, done) {
    client.globals.teardown(client, done);
  });

  it('should be able to perform search and open one of the results ', function (client) {
    var searchTerm = 'backup';
    var firstSearchResult = client.search.selectors.nthSearchResultLink.replace('INDEX', 1);

    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.searchIcon)
      .search.performSearch(searchTerm)
      .elements('css selector', client.search.selectors.searchResults, function (numberOfResults) {
        client.assert.ok(numberOfResults.value.length > 0, 'There were 0 search results.');
      });

    client
      .util.click(firstSearchResult)
      .blog.verifyBlogPostLoaded();
  });
});
