const commonSelectors = require('../../selectors/common');

describe('/welcome Page Links', () => {
  before((client, done) => {
    client.globals.setup(client, done);
  });

  beforeEach((client, done) => {
    client.home.navAndVerify();
    done();
  });

  after((client, done) => {
    client.globals.teardown(client, done);
  });

  it('should be able to navigate to the Home page', (client) => {
    client
      .util.click(commonSelectors.header.home)
      .home.verifyPageLoaded();
  });

  it('should be able to navigate to the About page', (client) => {
    client
      .util.click(commonSelectors.header.about)
      .about.verifyPageLoaded();
  });

  it('should be to navigate to the Blog page', (client) => {
    client
      .util.click(commonSelectors.header.blog)
      .blog.verifyPageLoaded();
  });

  it('should be able to navigate to the Testimonials page', (client) => {
    client
      .util.click(commonSelectors.header.testimonials)
      .testimonials.verifyPageLoaded();
  });

  it('should be able to navigate to the Contact page', (client) => {
    client
      .util.click(commonSelectors.header.contact)
      .contact.verifyPageLoaded();
  });
});
