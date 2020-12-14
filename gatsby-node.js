exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    console.log(post.frontmatter.slug);
    actions.createPage({
      path: `/blogs/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
