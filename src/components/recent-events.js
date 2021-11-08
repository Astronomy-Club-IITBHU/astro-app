import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const UpcomingEvents = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "astromeme.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const image = data.file.childImageSharp.fluid;

  console.log(image);

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
      <h1 className="text-2xl	text-center pb-5">Recent Events</h1>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      <p className="my-3">
        <p className="my-2 text-center">ASTROMEME '21</p>
        <Img
          alt={"Astromeme '21"}
          class="absolute inset-0 w-full h-full object-cover object-center"
          fluid={
            image
          }
          style={{ height: "100%", width: "100%" }}
        />
        <p className="my-1">Winning entries:</p>
        <ol>
          <li>1. {' '}
            <a class="transform duration-200 text-gray-300 hover:text-gray-100" href="https://www.instagram.com/adityasurana7/">Aditya Surana</a> {' '}
            (Entry <a class="transform duration-200 p-1 text-sm text-gray-300 bg-gray-800 hover:text-gray-100"href="https://www.instagram.com/p/CVVhw9XIO1w/">#5</a>)
          </li>
          <li>2. {' '}
            <a class="transform duration-200 text-gray-300 hover:text-gray-100" href="https://www.instagram.com/kumar._.vikrant/">Vikrant</a> {' '}
            (Entry <a class="transform duration-200 p-1 text-sm text-gray-300 bg-gray-800 hover:text-gray-100" href="https://www.instagram.com/p/CVVQb2HIDNm/">#4</a>)
          </li>
          <li>3. {' '}
            <a class="transform duration-200 text-gray-300 hover:text-gray-100" href="https://www.instagram.com/yoshita.vallecha17/">Yoshita Vallecha</a> {' '}
            (Entry <a class="transform duration-200 p-1 text-sm text-gray-300 bg-gray-800 hover:text-gray-100" href="https://www.instagram.com/p/CVdP8VLBg0H/">#21</a>)
          </li>
        </ol>
      </p>
    </div>
  );
};

export default UpcomingEvents;
