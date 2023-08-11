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
  if (result.errors) {
    // Handle GraphQL query errors
    console.error(result.errors);
    return;
  }

  result.data.allContentfulBlogPostMain.nodes.forEach((node) => {
    if (node.slug) {
      createPage({
        path: `/blog/${node.slug}`,
        component: require.resolve("./src/components/blogpost.js"),
        context: {
          slug: node.slug,
        },
      });
    } else {
      // Handle null slug value
      console.error("Error: 'slug' value is null.", node);
    }
  });
};

// exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
//   const config = getConfig();

//   config.module.rules.push({
//     test: /\.worker\.js$/,
//     use: {
//       loader: "worker-loader",
//       options: {
//         inline: true,
//       },
//     },
//   });

//   actions.replaceWebpackConfig(config);
// };
