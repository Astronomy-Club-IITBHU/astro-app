import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const UpcomingEvents = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "upcomingNews.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);
  // const image = data.file.childImageSharp.fluid;

  return (
    <div
      className=" lg:w-1/4 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5 bg-white overflow-hidden mb-5 font-mono"
      style={{
        height: "1%",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
      }}
    >
      <h1 className="text-2xl	text-center pb-5">Upcoming Events</h1>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      <p className="my-3">
        There aren't any upcoming events. Till then, checkout our {" "}
        <Link
          className="transform duration-200 p-1 text-sm text-gray-200 bg-gray-800 hover:text-gray-100"
          key="Resources"
          to="/misc"
        >
          Resources
        </Link>
        {" "}or{" "}
        <Link
          className="transform duration-200 p-1 text-sm text-gray-200 bg-gray-800 hover:text-gray-100"
          key="Blogs"
          to="/blogs"
        >
          Blogs
        </Link>.
      </p>
    </div>
  );
};

export default UpcomingEvents;
