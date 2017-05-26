const commonSelectors = require('../selectors/common');

describe('Search', () => {
  before((client, done) => {
    client.globals.setup(client, done);
  });

  after((client, done) => {
    client.globals.teardown(client, done);
  });

  it('should be able to perform search and open one of the results ', (client) => {
    const searchTerm = 'backup';
    const firstSearchResult = client.search.selectors.nthSearchResultLink.replace('INDEX', 1);

    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.searchIcon)
      .search.performSearch(searchTerm)
      .elements('css selector', client.search.selectors.searchResults, (numberOfResults) => {
        client.assert.ok(numberOfResults.value.length > 0, 'There were 0 search results.');
      });

    client
      .util.click(firstSearchResult)
      .blog.verifyBlogPostLoaded();
  });
});
