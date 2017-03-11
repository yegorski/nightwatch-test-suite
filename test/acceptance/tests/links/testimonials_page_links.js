var commonSelectors = require('../../selectors/common');

describe('/testimonials Page Links', function () {
  before(function (client, done) {
    client.globals.init(client, done);
  });

  after(function (client, done) {
    client.globals.teardown(client, done);
  });

  it('should be able to open Testimonials page', function (client) {
    client.testimonials.navAndVerify();
  });

  it('should be able to navigate to the Home page', function (client) {
    client
      .util.click(commonSelectors.header.home)
      .home.verifyPageLoaded();
  });

  it('should be able to navigate to the About page', function (client) {
    client
      .testimonials.nav()
      .util.click(commonSelectors.header.about)
      .about.verifyPageLoaded();
  });

  it('should be to navigate to the Blog page', function (client) {
    client
      .testimonials.nav()
      .util.click(commonSelectors.header.blog)
      .blog.verifyPageLoaded();
  });

  it('should be able to navigate to the Testimonials page', function (client) {
    client
      .testimonials.nav()
      .util.click(commonSelectors.header.testimonials)
      .testimonials.verifyPageLoaded();
  });

  it('should be able to navigate to the Contact page', function (client) {
    client
      .testimonials.nav()
      .util.click(commonSelectors.header.contact)
      .contact.verifyPageLoaded();
  });
});
