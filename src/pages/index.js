import React from "react";
import Layout from "../components/layout";
import Social from "../components/social";

const platforms = [
  {
    name: "Instagram",
    imgLink: "https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg",
    desc: "Galore of the astronomical lore",
    link: "https://www.instagram.com/astro.iitbhu/?hl=en",
    linkText: "Follow us"
  },
  {
    name: "Facebook",
    imgLink: "https://www.flaticon.com/svg/static/icons/svg/145/145802.svg",
    desc: "We post on FB too!",
    link: "https://www.facebook.com/astro.iitbhu/",
    linkText: "Visit the page"
  },
  {
    name: "Twitter",
    imgLink: "https://www.flaticon.com/svg/static/icons/svg/733/733579.svg",
    desc: "Listen to our tweet",
    link: "https://twitter.com/",
    linkText: "Take me there"
  }
]

export default () => (
  <Layout>
    <h1>Home</h1>
    <Social
      platform={platforms}
      />
  </Layout>
);
