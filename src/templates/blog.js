import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";

const BlogTemplate = ({ data }) => {
  const seoData = {
    title: data.markdownRemark.frontmatter.title,
    description: data.markdownRemark.frontmatter.description,
  };
  return (
    <Layout>
      <SEO post={seoData} />
      <div className="  mt-0 md:mt-10 mb-10 font-serif">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: 400 }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              background: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <Img
            fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
            style={{ height: "100%", width: "100%" }}
            className="absolute left-0 top-0 w-full h-full z-0 object-fill"
            alt="images for top"
          />

          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-1 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {data.markdownRemark.frontmatter.category}
            </span>

            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {data.markdownRemark.frontmatter.title}
            </h2>

            <div className="flex mt-3">
              <Img
                className="h-10 w-10 rounded-full mr-2 object-cover"
                fluid={
                  data.markdownRemark.frontmatter.writer.childImageSharp.fluid
                }
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {data.markdownRemark.frontmatter.author}
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  {" "}
                  {data.markdownRemark.frontmatter.date}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed markdown "
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        description
        category
        writer {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "MMM DD, YYYY")
      }
      html
    }
  }
`;

export default BlogTemplate;
