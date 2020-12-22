import React from "react";
import Layout from "../components/layout";
import TopCard from "../components/topBlogCard";
import Post from "../hooks/all-blog";
import Img from "gatsby-image";

const Blog = () => {
  const posts = Post();
  posts.shift();

  return (
    <Layout>
      <TopCard />
    </Layout>
  );
};
export default Blog;
