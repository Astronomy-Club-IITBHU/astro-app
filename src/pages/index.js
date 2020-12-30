import React from "react";
import Layout from "../components/layout";
import RecentPost from "../hooks/all-blog";
import PostPreview from "../components/post-preview";
import Equipment from "../components/equipment";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import UpcomingEvents from "../components/upcoming-events";
import AchieveProject from "../components/achieve-project";

const HomeText = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg  bg-gray-900 text-white  text-center mb-20	">
      <h1 className="sm:text-3xl text-2xl font-medium title-font py-3 text-white ">
        Welcome to the official website of the Astronomy Club IIT BHU.
      </h1>
      <p class="lg:w-2/3 mx-auto  py-3	 leading-relaxed text-base">
        We, at Astronomy Club, start the session with an introductory workshop
        in which students are made aware of many facts and a brief history of
        astronomy and telescopes. We take this forward and explain the workings,
        expectations and the vision associated with the club. The observatory
        workshop introduces the students to all of our telescopes and we have
        them observe the Moon and Mars through them. Pop science is a common
        topic for discussion.
      </p>
      <h1 className="sm:text-3xl text-2xl font-medium title-font py-3 text-white ">
        Our Vision
      </h1>
      <p className="lg:w-2/3 mx-auto  py-3	 leading-relaxed text-base">
        The Astronomy club tries to bring out the inner astronomer that has been
        hiding inside for so long. We have three major visions for the club:
        Through our workshops and night sessions we wish to build up curiosity
        and knowledge about the universe around us. Getting the astronomy
        fanatics of the college educated and more comfortable all aspects of
        astronomy from observational astronomy and telescope handling to Radio
        Astronomy and other computational aspects. Propagating the ideas of last
        year and bringing forth new ideas. Asteroid mining was a revolutionary
        idea presented in a competition last year and we wish to propagate it
        further as well as get new ideas. In the following academic year, the
        club will be trying to get its own planetarium for various training and
        research purposes. We are also looking forward to collaborate with
        various other clubs and colleges to bring new and exquisite knowledge in
        the club.
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
      <UpcomingEvents />
    </div>
  );
};

export default () => {
  const recentPost = RecentPost();
  return (
    <Layout>
      <Front />
      <HomeText />
      {/* <div>
        <h1 className="text-gray-300 max-w-2xl text-4xl mx-auto px-8 py-4 ">
          Recent Posts
        </h1>
        {recentPost.slice(0, 3).map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div> */}
      {/* <Equipment /> */}
      <DownDivs />
    </Layout>
  );
};
