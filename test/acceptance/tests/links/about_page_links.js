var commonSelectors = require('../../selectors/common');

module.exports = {
  'Verify able to open Home page': (client) => {
    client.about.navAndVerify();
  },

  'Verify able to navigate to the Home page': (client) => {
    client
      .util.click(commonSelectors.header.home)
      .home.verifyPageLoaded()
      .about.nav();
  },

  'Verify able to navigate to the About page': (client) => {
    client
      .util.click(commonSelectors.header.about)
      .about.verifyPageLoaded()
      .about.nav();
  },

  'Verify able to navigate to the Blog page': (client) => {
    client
      .util.click(commonSelectors.header.blog)
      .blog.verifyPageLoaded()
      .about.nav();
  },

  // Testimonials page
  'Verify able to navigate to the Testimonials page': (client) => {
    client
      .util.click(commonSelectors.header.testimonials)
      .testimonials.verifyPageLoaded()
      .about.nav();
  },

  'Verify able to navigate to the Contact page': (client) => {
    client
      .util.click(commonSelectors.header.contact)
      .contact.verifyPageLoaded();
  }
};
