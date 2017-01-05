var commonSelectors = require('../selectors/common');

module.exports = function(client) {
  this.selectors = {
    pageLoaded: '.entry-title.entry-title--list',
    blogs: 'article[label="Blog Post"]',
    nthBlog: 'article[label="Blog Post"]:nth-child(INDEX)',
    blogPostLoaded: '.sqs-block-content .summary-title',
    blogImage: '.image-block-outer-wrapper',
    blogImageCaption: '.image-caption-wrapper'
  };

  this.url = '/blog';

  this.nav = () => {
    client.url(`${client.globals.url}${this.url}`);
    return client;
  };

  this.verifyPageLoaded = () => {
    client
      .waitForElementVisible(this.selectors.pageLoaded)
      .waitForElementVisible(commonSelectors.footer.footerImage);
    return client;
  };

  this.verifyBlogPostLoaded = () => {
    client.waitForElementVisible(this.selectors.blogPostLoaded);
    return client;
  };

  this.navAndVerify = () => {
    this.nav();
    this.verifyPageLoaded();
    return client;
  };

  this.openNthBlog = (index) => {
    var blogToOpen = this.selectors.nthBlog.replace('INDEX', index);
    client.util.click(blogToOpen);
    return client;
  };
};
