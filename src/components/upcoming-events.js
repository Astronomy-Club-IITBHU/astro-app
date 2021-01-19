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
      className=" lg:w-1/4 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5  bg-white overflow-hidden mb-5	"
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
        Greetings from Astronomy Club ! The coronavirus may have halted your
        lives but do not let it halt your passion for astronomy. We bring you
        an opportunity to show off your knowledge and enchant with your words. 
        The Astronomy Club presents CORONA ARTICLE WRITING CONTEST (CAWC).
        Write an article on any topic related to astronomy, and the best two
        articles will be published in the upcoming edition of The Corona Magazine.
        <h1 class="text-xl">Rules</h1>
        <ul class="list-disc list-inside">
          <li>Only one article allowed per person</li>
          <li>Word limit: 700-1000 words</li>
          <li>Languages: English & Hindi</li>
          <li>Submission deadline: 25th January, 2021</li>
          <li>Submit as a word document <a class="text-blue-500 hover:text-blue-300" href="https://forms.gle/S1sQfY2kfcVjydsR6">here</a></li>
        </ul>
      </p>
    </div>
  );
};

export default UpcomingEvents;
