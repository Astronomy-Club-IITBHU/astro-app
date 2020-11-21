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

export default () => {
  const recentPost = RecentPost();

  return (
    <Layout>
      <div>
        <h2>Recent Posts</h2>
        {recentPost.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      {/* <Social platform={platforms} /> */}
    </Layout>
  );
};
