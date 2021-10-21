import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const AchieveProject = () => {
  const achievements = [
    {
      name: "Anvesha 2021, IISER TVM",
      events: [
        {
          eventName: "BAHFest",
          result: [
            "1st (Moulik Deviprasad Ketkar)"
          ],
        },
      ],
    },
    {
      name: "Astrochamp 2021, IIT BBSR",
      events: [
        {
          eventName: "Case Study",
          result: [
            "1st (Preety, Harsh, Atharv, Preksha, Adrija, Manish, Pratyush, Utkarsh, Jashandeep & Varun)"
          ],
        },
        {
          eventName: "Graphic Designing",
          result: [
            "2nd (Prince)"
          ],
        }
      ],
    },
    {
      // TODO
      name: "IAAC 2021",
      events: [
        {
          eventName: "Final Round",
          result: [
            "Gold Honour & Top 1% of all participants (Pratyush)"
          ],
        }
      ],
    },
    {
      name: "NSSC 2019, IIT KGP",
      events: [
        {
          eventName: "Case Study",
          result: [
            "1st (Yash Vinod & Vaibhav Singh)",
            "3rd (Vamsi Bodaballa & Aditya Keshari)",
          ],
        },
        {
          eventName: "The Science of Paper Folding",
          result: [
            "1st (Arjeet Dewanagan & Anmol Saluja)",
            "3rd (Yash Vinod & Vaibhav Singh)",
          ],
        },
      ],
    },
    {
      name: "NSSC 2018, IIT KGP",
      events: [
        {
          eventName: "Case Study",
          result: ["1st (Ayush Kumar Singh & Shristi Singh)"],
        },
        {
          eventName: "Designeer",
          result: ["3rd (Rahul Viswakarma, Pranjal & Yash Agrawal)"],
        },
        {
          eventName: "The Science of Paper Folding",
          result: ["2nd (Yash Vinod & Vaibhav Krishna)"],
        },
      ],
    },
    {
      name: "Inter IIT Tech Meet 2018",
      events: [
        {
          eventName: "Star Cluster Identifying",
          result: [
            "Bronze (Sambhav Jain, Yash Agrawal, Abhishek & Govindswaroop Rahangdale)",
          ],
          link: "https://github.com/Astronomy-Club-IITBHU/star-cluster-identifier",
          linkText: "GitHub Repo"
        },
      ],
    }
  ];

  const projects = [
    {
      name: "Planetarium",
      desc:
        "With the support of SERAI, the Astronomy Club has undertaken the project to build a planetarium. The planetarium helps in attracting people towards amateur astronomy. The planetarium serves the purpose of observing the night sky of Varanasi as well as other regions of the world regardless of weather conditions and time of the day. The planetarium will have an occupancy of 15-20 people. Its major application will be to conduct observational sessions.",
    },
    {
      name: "Horn Antenna",
      desc:
        "Radio astronomy is a major field in observational and computational astronomy. There are many types of antennae to observe radio waves, the most basic of which is Horn Antenna. To encourage advanced astronomy in the institute, the Astronomy Club is building its own Pyramidal Horn Antenna. Upon its completion, the club will be able to conduct its own radio observations and analyze and study the data obtained.",
    },
    {
      name: "Maan Singh Observatory,Varanasi",
      desc:
        "Ancient observatories are an important tool to understand the foundations of Astronomy, about how ancient cultures found a connection between astronomy and nature. In an endeavor to explore the significance of these structures and how they impacted astronomy as we know it, the students of the Astronomy Club of IIT BHU undertook an activity at the Man Singh Observatory in Varanasi, India. Various solar parameters including the local solar time, azimuth, declination, and hour angles were calculated using measurements taken from instruments at the observatory.",
    },
  ];

  const projectImgs = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "projects" } }
        sort: { fields: [name], order: ASC }
      ) {
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
    }
  `);

  return (
    <div
      className="lg:w-2/3 rounded-lg bg-gray-900 md-1/2 px-5 py-5 mx-5 md:mx-10 mb-5 bg-white font-mono "
      style={{ boxShadow: "0px 0px 80px black" }}
    >
      <div className="text-2xl text-center pb-5">Projects</div>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      {projects.map((data, index) => {
        return (
          <div class="my-3  ">
            <div class="inline text-xl ">{data.name}</div>
            <p class="my-1 text-gray-200">{data.desc}</p>
            {index === 0 && (
              <div className="mx-auto w-full md:w-5/6 lg:w-2/3 my-5">
                <Img
                  alt={data.name}
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  fluid={
                    projectImgs.allFile.edges[0].node.childImageSharp.fluid
                  }
                  style={{ height: "100%", width: "100%" }}
                />
                <p class="text-center text-gray-400 italic">
                  Planetarium under construction
                </p>
              </div>
            )}
          </div>
        );
      })}

      <div className="text-2xl text-center pb-2">Recent Achievements</div>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      {achievements.map(data => {
        return (
          <div className="my-3">
            <div className="inline my-2 text-xl">{data.name}</div>
            {data.events.map(event => {
              return (
                <ul className="px-5 list-disc list-inside pb-3">
                  <li className="text-lg text-gray-200">{event.eventName} {event.link && <a class="transform duration-200 p-1 text-sm text-gray-200 bg-gray-800 hover:text-gray-100" href={event.link}>{event.linkText}</a>}</li>
                  <div>
                    {event.result.map(val => {
                      return <div className="pl-7 text-gray-300">{val}</div>;
                    })}
                  </div>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AchieveProject;
