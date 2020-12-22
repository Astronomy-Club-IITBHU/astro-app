import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import Img from "gatsby-image";

const Event = ({ data }) => {
  return (
    <Layout>

      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4 gap-10 md:gap-0">

          <div class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3" style={{ boxShadow: "0px -20px 40px rgba(13, 26, 74, 1)" }}>
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
                All great discoveries start as a theory, and astronomy does not differ from this. Rather, all observations have some scientific background to them. We conduct regular sessions wherein club-members, professors and scientists doing
                ground-breaking research share their knowledge while interacting with students.
                </p>
            </div>
          </div>

          <div class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3" style={{ boxShadow: "0px -20px 40px rgba(13, 26, 74, 1)" }}>
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[1].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Theoretical Sessions"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Observational Sessions</div>
              <p class="text-base">
                Observations are what solidify any theory. Therefore, we organize observational sessions to help students get acquianted 
                with observational astronomy and navigate the night sky. The club owns various equipment: Star-Tracker & Orion Equitorial, Dobsonian, Cassegrain, Celestron Alt-AZ and a Star-Tracker motor drive.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3" style={{ boxShadow: "0px -20px 40px rgba(13, 26, 74, 1)" }}>
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Theoretical Sessions"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Telescon</div>
              <p class="text-base">
                Telescope is an essential component in any astronomer's toolbox. Thus it is essential to understand the ins & outs of it, and to promote that, we
                organize Telescon: Telescope building competition. Don't know how to build one? Need not to worry, as the competition is preceeded by a workshop
                where we teach everything about it.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3" style={{ boxShadow: "0px 20px 40px rgba(13, 26, 74, 1)" }}>
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[3].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Theoretical Sessions"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Supernova</div>
              <p class="text-base">
                Prepare to get your mind blown, or as astronomers prefer to say "supernova", in the highly engrossing Astro-Quiz. Held during Technex, various teams from
                colleges all around the country participate in a battle of wits. The contest consists of various rounds from the genre of physics, history, mythology and
                general astronomy.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3" style={{ boxShadow: "0px 20px 40px rgba(13, 26, 74, 1)" }}>
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[4].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Theoretical Sessions"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Yuri's Night</div>
              <p class="text-base">
                Hosted in the month of April, Yuri's Night (named after Yuri Gagarin) is a commemoration of milestones in space exploration. 
                It is a two-day event: On the first day we have workshops and theoretical lectures, and on the second day, we host an observational session followed by a movie night.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap my-1 px-1 w-full md:w-1/2 md:my-3 md:px-3 lg:my-4 lg:px-4 lg:w-1/3" style={{ boxShadow: "0px 20px 40px rgba(13, 26, 74, 1)" }}>
            <div class="w-full">
              <Img
                fluid={data.allFile.edges[5].node.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                className="object-cover"
                alt="Theoretical Sessions"
              />
            </div>
            <div class="px-6 py-4 text-black bg-gray-200">
              <div class="font-bold text-xl mb-2">Exploring The Interstellar (ETI)</div>
              <p class="text-base">
                ETI is a telescope handling event where the participants' observational skills and telescope handling skills are tested in 3
                rounds. The rounds consist of identifying celestial bodies with naked eye / telescope, mythology behind constellation, as well as tests
                of telescope handling skills, thereby testing all-round skills.
              </p>
            </div>
          </div>

        </div>
      </div>

    </Layout >
  )
};

export const query = graphql`
{
  allFile(filter: { sourceInstanceName: { eq: "events" } }, sort: { fields: [name], order: ASC }) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`;


export default Event;