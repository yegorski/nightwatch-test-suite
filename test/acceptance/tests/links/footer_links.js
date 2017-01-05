var commonSelectors = require('../../selectors/common');

module.exports = {
  'Verify able to open Home page': (client) => {
    client.home.navAndVerify();
  },

  'Verify able to navigate to the Home page': (client) => {
    client
      .util.click(commonSelectors.footer.home)
      .home.verifyPageLoaded()
      .home.nav();
  },

  'Verify able to navigate to the About page': (client) => {
    client
      .util.click(commonSelectors.footer.about)
      .about.verifyPageLoaded()
      .home.nav();
  },

  'Verify able to navigate to the Blog page': (client) => {
    client
      .util.click(commonSelectors.footer.blog)
      .blog.verifyPageLoaded()
      .home.nav();
  },

  'Verify able to navigate to the Testimonials page': (client) => {
    client
      .util.click(commonSelectors.footer.testimonials)
      .testimonials.verifyPageLoaded()
      .home.nav();
  },

  'Verify able to navigate to the Contact page': (client) => {
    client
      .util.click(commonSelectors.footer.contact)
      .contact.verifyPageLoaded();
  }
};

