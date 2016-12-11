var commonSelectors = require('../selectors/common');

module.exports = {
  'Verify able to open Home page': (client) => {
    client.page.home().nav();
    client.waitForElementVisible(client.page.home().selectors.pageLoaded);
  },

  'Verify able to navigate to the About page': (client) => {
    client.click(commonSelectors.header.about);
    client.waitForElementVisible(client.page.about().selectors.pageLoaded);
  },

  'Verify able to navigate to the Contact page': (client) => {

  },

  'Verify able to navigate to the Blog page': (client) => {

  },

  'Verify footer links': (client) => {

  },

  'Verify sidebar links': (client) => {

  }
};

