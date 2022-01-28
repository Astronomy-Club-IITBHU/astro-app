import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const UpcomingEvents = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: {relativeDirectory: {eq: "recent_events"}}) {
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

  const AutoplaySlider = withAutoplay(AwesomeSlider);

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
      <p className="my-3 flex flex-col align-items-center">
        <p className="mb-3 text-center text-xl">AstroPhotography Workshop</p>
        <AutoplaySlider
          play={true}
          bullets={false}
          cancelOnInteraction={false}
          interval={8000}
          style={{
            "--slider-height-percentage": "100%",
            "--organic-arrow-height": "20px",
            "--loader-bar-color": "#869afe",
            "--slider-transition-duration": "800ms"
          }}
        >
          {data.images.nodes.map(image => (
            // <Img
            //   alt={image.name}
            //   class="absolute inset-0 w-full h-full object-cover object-center"
            //   fluid={image.childImageSharp.fluid}
            //   style={{ height: "100%", width: "100%" }}
            // />
            <div data-src={image.childImageSharp.fluid.src} />
          ))}
        </AutoplaySlider>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1bw_WUtrG2YE4OUyLFRL8yONT2LOWlxEUZxL8OZinuBOc7w/viewform?usp=pp_url" className="text-center mt-5 bg-indigo-600 bg-opacity-50 transition duration-300 hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
          Register Now!
        </a>
      </p>
    </div>
  );
};

export default UpcomingEvents;