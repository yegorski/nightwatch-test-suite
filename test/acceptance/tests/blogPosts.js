describe('Blog Posts', function () {
  before(function (client, done) {
    client.globals.init(client, done);
  });

  after(function (client, done) {
    client.globals.teardown(client, done);
  });

  it('should be able to open the first blog post', function (client) {
    client.blog.navAndVerify();

    client.elements('css selector', client.blog.selectors.blogs, function (numberOfBlogs) {
      client.assert.ok(numberOfBlogs.value.length > 0, 'There were 0 blog posts.');
    });

    client
      .blog.openNthBlog(1)
      .blog.verifyBlogPostLoaded()
      .blog.navAndVerify();
  });
});
