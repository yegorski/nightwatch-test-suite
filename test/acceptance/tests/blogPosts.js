describe('Blog Posts', () => {
  before((client, done) => {
    client.globals.setup(client, done);
  });

  after((client, done) => {
    client.globals.teardown(client, done);
  });

  it('should be able to open the first blog post', (client) => {
    client.blog.navAndVerify();

    client.elements('css selector', client.blog.selectors.blogs, (numberOfBlogs) => {
      client.assert.ok(numberOfBlogs.value.length > 0, 'There were 0 blog posts.');
    });

    client
      .blog.openNthBlog(1)
      .blog.verifyBlogPostLoaded()
      .blog.navAndVerify();
  });
});
