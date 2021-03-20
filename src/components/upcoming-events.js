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
        <ul className="list-inside list-disc">
          <li className="bold">Supernova :-</li>
          <p>
            Supernova? It's a dead star. And yet, it is the most beautiful
            specimen in the universe. Such a beautiful Supernova transpires in
            Technex. Supernova is the cadence connecting all the Astronomical
            events of the Annual Technical Festival of IIT (BHU).
          </p>
          <li className="bold">Astro-Quiz :-</li>
          <p>
            AstroQuiz, clearing its significance with the word itself; Astronomy
            Quiz. The most comfortable yet the most challenging event of
            "Supernova." All the questions asked will be based on Astronomy,
            Astrophysics, Mythology, and much more general stuff related to
            Cosmos.
          </p>
          <li className="bold">Scientists of Utopia(SOU) :-</li>
          <p>
            SOU ( Scientists of Utopia) is the Case Study Solving event where
            participants are required to provide solutions to the Case Study
            provided. These Case Studies can be hypothetical, and hence it tests
            the imagination skills and problem-solving ability using real-life
            technology.
          </p>
          <li className="bold">Astrophotography :-</li>
          <p>
            Astrophotography, also known as astronomical imaging, is the
            photography of astronomical objects, celestial events, and night sky
            areas. Astrophotography brings out the divine beauty of both, the
            things we see and the things we don't, to our eyes.
          </p>
        </ul>
        <p>
          To register in the events visit{" "}
          <a
            href="https://technex.co.in/"
            className="underline hover:text-green-400"
          >
            Technex'21
          </a>{" "}
          site
        </p>
      </p>
    </div>
  );
};

export default UpcomingEvents;
