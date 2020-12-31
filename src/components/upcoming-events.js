import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const UpcomingEvents = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "upcomingNews.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const image = data.file.childImageSharp.fluid;

  return (
    <div
      className=" lg:w-1/5 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5  bg-white overflow-hidden mb-5	"
      style={{
        height: "1%",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
      }}
    >
      <h1 className="text-2xl	text-center pb-5">Upcoming Events</h1>
      <Img fluid={image} />
      <p className="py-2 leading-relaxed text-base">
        {" "}
        The Astronomy Club IIT BHU has something special planned for the new
        year. With the start of the year, we are launching our standalone
        website on the 1st of January 2021. The website will be the source of
        information for upcoming events and blogs. We have put some resources
        and recommended videos to kickstart your journey in field of astronomy.
        We wish everyone a very safe, cherishing and prosperous new year.
      </p>
    </div>
  );
};

export default UpcomingEvents;
