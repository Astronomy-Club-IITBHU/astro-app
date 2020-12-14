import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogTemplate = ({ data: { markdownRemark: post } }) => {
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <h1>hello</h1>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allMdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        description
        date(formatString: "MMM DD, YYYY")
      }
      html
    }
  }
`;

export default BlogTemplate;
