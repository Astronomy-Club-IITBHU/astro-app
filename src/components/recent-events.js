import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
const UpcomingEvents = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: {relativeDirectory: {eq: "merch"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `);

  return (
    <div
      className="flex-grow lg:w-1/4 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5 bg-white overflow-hidden mb-5 font-mono"
      style={{
        height: "1%",
        position: "sticky",
        top: "0",
      }}
    >
      <h1 className="text-2xl	text-center pb-5">Recent Events</h1>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      <p className="my-3 flex flex-col">
        <p className="mb-3 text-center text-xl">Merch Launch</p>
        {data.images.nodes.map(image => (
          <Img
            alt={image.name}
            class="absolute inset-0 w-full h-full object-cover object-center"
            fluid={image.childImageSharp.fluid}
            style={{ height: "100%", width: "100%" }}
          />
        ))}
        <a href="https://forms.gle/37aAR4bW34BxLYTF9" className="text-center mt-5 bg-indigo-600 bg-opacity-50 transition duration-300 hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
          Order Now
        </a>
      </p>
    </div>
  );
};

export default UpcomingEvents;
