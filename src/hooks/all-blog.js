import { graphql, useStaticQuery } from "gatsby";

const RecentPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            title
            author
            slug
            category
            date(formatString: "MMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    date: post.frontmatter.date,
    category: post.frontmatter.category,
  }));
};

export default RecentPost;
