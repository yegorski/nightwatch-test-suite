module.exports = {
  'Verify able to view first image caption on hover on Home page': (client) => {
    client
      .home.navAndVerify()
      .util.hover(client.home.selectors.firstImage)
      .waitForElementVisible(client.home.selectors.firstImageCaption);
  },

  'Verify able to view first image caption on hover in a blog': (client) => {
    client
      .url(`${client.globals.url}/blog/2016/11/26/reset-windows-10-while-keeping-files-intact`)
      .util.hover(client.blog.selectors.blogImage)
      .waitForElementVisible(client.blog.selectors.blogImageCaption);
  }
};
