import { graphql, useStaticQuery } from "gatsby";

const RecentPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
        nodes {
          frontmatter {
            title
            author
            slug
            date(formatString: "MMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    date: post.frontmatter.date,
  }));
};

export default RecentPost;
