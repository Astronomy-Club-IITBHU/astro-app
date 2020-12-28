import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Event = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { relativeDirectory: { eq: "events" } }, sort: { fields: [name], order: ASC } ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }`
  );

  return (
    <Layout>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-col text-center text-white w-full mb-1">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Events and Activities
          </h1>
        </div>
        <div class="flex justify-center flex-wrap -mx-1 lg:-mx-4 gap-10 md:gap-0">
          <div
            class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3"
            style={{ boxShadow: "0px -20px 40px rgba(13, 26, 74, 1)" }}
          >
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Theoretical Sessions"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Theoretical Sessions</div>
              <p class="text-base">
                The Astronomy Club conducts various workshops and lectures
                regularly to benefit the students. These lectures are hosted
                by both the club members and guest lecturers on astronomy basics,
                like formation of stars and galaxies, modern astronomy,
                mathematical and analytical modelling to name a few.
              </p>
            </div>
          </div>

          <div
            class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3"
            style={{ boxShadow: "0px -20px 40px rgba(13, 26, 74, 1)" }}
          >
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[1].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Observational Sessions"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Observational Sessions</div>
              <p class="text-base">
                Observations are what solidify any theory. Therefore, we
                organize observational sessions to help students get acquianted
                with observational astronomy and navigate the night sky. The
                club owns various equipments, enabling us to observe a wealth
                of detail on celestial bodies.
              </p>
            </div>
          </div>

          <div
            class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3"
            style={{ boxShadow: "0px -20px 40px rgba(13, 26, 74, 1)" }}
          >
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Telescon"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Telescon</div>
              <p class="text-base">
                Telescon is our first event for freshers, in which 
                they learn about the basics by building telescopes 
                from scratch. This event has two rounds, namely
                Presentation & Telescope Building. In the first round, 
                the teams's ideas are judged on sustainability and feasibility, 
                and in the latter, they build a working model of the telescope.
              </p>
            </div>
          </div>

          <div
            class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3"
            style={{ boxShadow: "0px 20px 40px rgba(13, 26, 74, 1)" }}
          >
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[3].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Supernova"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Supernova</div>
              <p class="text-base">
                Supernova is a culmination of all events encompassing astronomy
                in the Annual Technical Festival of IIT (BHU). The events under
                it are based on observational astronomy (Exploring The Interstellar), capturing them
                (Astrophotography), problem solving (Scientists Of Utopia), paper presentation
                and a quiz on astronomy facts (Astro-Quiz).
              </p>
            </div>
          </div>

          <div
            class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3"
            style={{ boxShadow: "0px 20px 40px rgba(13, 26, 74, 1)" }}
          >
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[4].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Yuri's Night"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Yuri's Night</div>
              <p class="text-base">
                Hosted in the second week of April, Yuri's Night is a commemoration 
                of milestones in space exploration, summing up the academic year.
                It is a two-day event: On the first day we have workshops and
                theoretical lectures, and on the second day, we host an
                observational session followed by a movie night.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Event;
