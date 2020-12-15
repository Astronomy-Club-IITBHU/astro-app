exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            image
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach(post => {
    console.log(post.frontmatter.slug);
    actions.createPage({
      path: `/blogs/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: post.frontmatter.slug,
        image: post.frontmatter.image,
      },
    });
  });
};
