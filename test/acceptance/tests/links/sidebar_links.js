const commonSelectors = require('../../selectors/common');

describe('Siderbar Menu Links', () => {
  before((client, done) => {
    client.globals.setup(client, done);
  });

  after((client, done) => {
    client.globals.teardown(client, done);
  });

  it('should be able to navigate to the Home page', (client) => {
    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.home)
      .home.verifyPageLoaded();
  });

  it('should be able to navigate to the About page', (client) => {
    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.about)
      .about.verifyPageLoaded();
  });

  it('should be to navigate to the Blog page', (client) => {
    client
      .about.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.blog)
      .blog.verifyPageLoaded();
  });

  it('should be able to navigate to the Testimonials page', (client) => {
    client
      .blog.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.testimonials)
      .testimonials.verifyPageLoaded();
  });

  it('should be able to navigate to the Contact page', (client) => {
    client
      .testimonials.navAndVerify()
      .util.click(commonSelectors.header.openSidebar)
      .util.click(commonSelectors.sidebar.contact)
      .contact.verifyPageLoaded();
  });
});
