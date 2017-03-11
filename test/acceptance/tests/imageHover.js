describe('Images', function () {
  before(function (client, done) {
    client.globals.init(client, done);
  });

  after(function (client, done) {
    client.globals.teardown(client, done);
  });

  it('should be able to view first image caption on hover on Home page', function (client) {
    client
      .home.navAndVerify()
      .util.hover(client.home.selectors.firstImage)
      .waitForElementVisible(client.home.selectors.firstImageCaption);
  });

  it('should be able to view first image caption on hover in a blog', function (client) {
    client
      .url(`${client.globals.url}/blog/2016/11/26/reset-windows-10-while-keeping-files-intact`)
      .util.hover(client.blog.selectors.blogImage)
      .waitForElementVisible(client.blog.selectors.blogImageCaption);
  });
});
