import React from "react";
import Layout from "../components/layout";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
// import UpcomingEvents from "../components/upcoming-events";
import AchieveProject from "../components/achieve-project";

const HomeText = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg  bg-gray-900 text-white font-mono  text-center mb-20	pb-5">
      <h1 className="sm:text-3xl text-2xl font-medium title-font py-5 text-white ">
        Welcome to our official website!
      </h1>
      <p className="lg:w-2/3 mx-auto  py-3	px-2 leading-relaxed text-base">
        Do you often turn your eyes to the stars? Which answers are you looking
        for, stargazing? Every person has their reasons for that, but some great
        minds have shared their thoughts to inspire you to live, love, and
        create. We, at Astronomy Club IIT BHU might help you find the answers
        for which you are looking.
      </p>

      <p className="lg:w-2/3 mx-auto  py-3	px-2 leading-relaxed text-base">
        The Astronomy Club IIT BHU, an ambitious team driven by amateur
        astronomers, strives to quench students' thirst for astronomy by
        organizing various exciting events, from observational sessions to
        astroquizzes, telescope handling to Radio Astronomy, publishing the
        Club's very own corona magazine and many more.
      </p>
    </div>
  );
};

const Front = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "naut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const naut = data.file.childImageSharp.fluid;
  return (
    <BackgroundImage
      fluid={naut}
      className="  bg-contain "
      style={{ height: "100%", width: "100%" }}
    >
      <div className="py-40">
        <div className="logo">
          <b>
            <span>Ast</span>
            ronomy<span> Club </span>
          </b>
          <b>
            <span>IIT</span>
            <span>(BHU)</span>
          </b>
        </div>
      </div>
    </BackgroundImage>
  );
};

const DownDivs = () => {
  return (
    <div className="flex flex-wrap mb-10 text-white">
      <AchieveProject />
      {/* <UpcomingEvents /> */}
    </div>
  );
};

export default () => {
  return (
    <Layout>
      <Front />
      <HomeText />

      <stayTuned />
      <DownDivs />
    </Layout>
  );
};
