exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulBlogPostMain {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulBlogPostMain.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve("./src/components/blog-post.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};
