import React from "react";
import Layout from "../components/layout";
// import Social from "../components/social";
import RecentPost from "../hooks/use-recent-post";
import PostPreview from "../components/post-preview";

const platforms = [
  {
    name: "Instagram",
    imgLink: "https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg",
    desc: "Galore of the astronomical lore",
    link: "https://www.instagram.com/astro.iitbhu/?hl=en",
    linkText: "Follow us",
  },
  {
    name: "Facebook",
    imgLink: "https://www.flaticon.com/svg/static/icons/svg/145/145802.svg",
    desc: "We post on FB too!",
    link: "https://www.facebook.com/astro.iitbhu/",
    linkText: "Visit the page",
  },
];

const Front = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-15  flex-col  md:items-start md:text-left items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900 ">
          Since its foundation
          <br className="hidden lg:inline-block" /> in{" "}
          <span className="font-mono font-semibold ">2012</span>
        </h1>
        <p className="mb-8 leading-relaxed">
          the Astronomy club aims to build on this fascination and brings
          innovation and passion to its vision of spreading the awareness and
          knowledge of astronomy and space sciences to the students. This forum
          is built to spread the facts and news about all the events taking part
          in the realm of Astronomy and the events being conducted within the
          club in and out the campus.
          <br className="hidden lg:inline-block" />
          <br className="hidden lg:inline-block" />
          If you have ever been curious to know the secrets preserved in this
          Universe's lap, if watching the night sky provides you the indigenous
          curiosity, then you're at the right place. The Astronomy club IIT
          BHU,an ambitious team driven by amateur astronomers, strives to quench
          a student’s thirst for astronomy by organizing various exciting events
          including{" "}
          <span className="font-semibold">
            Observational Sessions,Corona magazine, Astro-quiz, Telescon
          </span>
          , and many more.We do conduct Online and offline workshops as well for
          students to introduce them to basics of Astronomy.
        </p>
      </div>
    </section>
  );
};

export default () => {
  const recentPost = RecentPost();
  console.log(recentPost);
  return (
    <Layout>
      <Front />
      <div>
        <h1 className="max-w-2xl text-4xl mx-auto px-8 py-4 ">Recent Posts</h1>
        {recentPost.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>

      {/* <Social platform={platforms} /> */}
    </Layout>
  );
};
