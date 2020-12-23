import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="container px-5 py-10 mx-auto mb-10 ">
        <div className="flex flex-col text-center text-white w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our camera roll
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This gallery contains some of the pictures from our victories at
            Inter-IIT and different colleges, Alumni's meet, partying,
            orientations, workshops and Astrophotography.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.images.nodes.map(image => (
            <div className=" md:w-1/3 w-full sm:w-1  p-2">
              <Img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                fluid={image.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
