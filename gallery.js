import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const captions = {
  IMG_12331: "great is great alwasy",
};

const giveCaption = () => {
  return "LoremIpsum";
};

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
    }
  `);

  return (
    <Layout>
      {/* style={{width:"30%",display:"inline-block", padding:"3px",position:"relative"}} */}
      <div className=" my-6 mx-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data.images.nodes.map(image => (
          <div className="rounded-md overflow-hidden shadow-lg relative group ">
            <Img
              className="group-hover:opacity-30 h-full rounded-md object-fill"
              key={image.id}
              fluid={image.childImageSharp.fluid}
              alt="Images for  gallery"
              imgStyle={{ objectFit: "contain" }}
            />
            <p className="text-lg text-green-300 absolute top-1/2 left-1/2 origin-center opacity-0 group-hover:opacity-100">
              {giveCaption()}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
