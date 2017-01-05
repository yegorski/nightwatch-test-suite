module.exports = {
  'Verify able to open all blog posts': (client) => {
    var i;

    client.blog.navAndVerify();

    client.elements('css selector', client.blog.selectors.blogs, function(numberOfBlogs) {
      client.assert.ok(numberOfBlogs.value.length > 0, 'There were 0 blog posts.');
      for (i = 1; i < numberOfBlogs.value.length + 1; i++) {
        client
          .blog.openNthBlog(i)
          .blog.verifyBlogPostLoaded()
          .blog.navAndVerify();
      }
    });
  }
};
