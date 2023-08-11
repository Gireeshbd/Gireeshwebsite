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

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  config.module.rules.push({
    test: /\.worker\.js$/,
    use: {
      loader: "worker-loader",
      options: {
        inline: true,
      },
    },
  });

  actions.replaceWebpackConfig(config);
};
