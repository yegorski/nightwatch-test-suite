var config = require('config');

module.exports = (client) => {
  this.url = `${config.baseUrl}/testimonials`;

  this.selectors = {
    home: 'h2 a[href="/welcome"]'
  };

  this.nav = () => {
    client.url(this.url);
  };
};
