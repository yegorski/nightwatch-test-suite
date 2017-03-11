var commonSelectors = require('../../selectors/common');

describe('Siderbar Menu Links', function () {
  before(function (client, done) {
    client.globals.init(client, done);
  });

  after(function (client, done) {
    client.globals.teardown(client, done);
  });

  it('should be able to navigate to the Home page', function (client) {
    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.home)
      .home.verifyPageLoaded();
  });

  it('should be able to navigate to the About page', function (client) {
    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.about)
      .about.verifyPageLoaded();
  });

  it('should be to navigate to the Blog page', function (client) {
    client
      .about.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.blog)
      .blog.verifyPageLoaded();
  });

  it('should be able to navigate to the Testimonials page', function (client) {
    client
      .blog.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.testimonials)
      .testimonials.verifyPageLoaded();
  });

  it('should be able to navigate to the Contact page', function (client) {
    client
      .testimonials.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.contact)
      .contact.verifyPageLoaded();
  });
});
