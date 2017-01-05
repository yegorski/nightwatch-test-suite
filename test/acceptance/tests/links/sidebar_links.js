var commonSelectors = require('../../selectors/common');

module.exports = {
  'Verify able to open the sidebar': (client) => {
    client
      .home.navAndVerify()
      .util.click(commonSelectors.header.openSidebar);
  },

  'Verify able to navigate to the Home page': (client) => {
    client
      .util.click(commonSelectors.sidebar.home)
      .home.verifyPageLoaded()
      .util.click(commonSelectors.header.openSidebar);
  },

  'Verify able to navigate to the About page': (client) => {
    client
      .util.click(commonSelectors.sidebar.about)
      .about.verifyPageLoaded()
      .util.click(commonSelectors.header.openSidebar);
  },

  'Verify able to navigate to the Blog page': (client) => {
    client
      .util.click(commonSelectors.sidebar.blog)
      .blog.verifyPageLoaded()
      .home.navAndVerify()
      .util.click(commonSelectors.header.openSidebar);
  },

  'Verify able to navigate to the Testimonials page': (client) => {
    client
      .util.click(commonSelectors.sidebar.testimonials)
      .testimonials.verifyPageLoaded()
      .util.click(commonSelectors.header.openSidebar);
  },

  'Verify able to navigate to the Contact page': (client) => {
    client
      .util.click(commonSelectors.sidebar.contact)
      .contact.verifyPageLoaded();
  }
};
