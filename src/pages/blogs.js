import React from "react";
import Layout from "../components/layout";
import TopCard from "../components/topBlogCard";
import Post from "../hooks/all-blog";
import Img from "gatsby-image";
import { Link } from "gatsby";

const BlogLayout = ({ post }) => {
  return (
    <Link to={post.slug}>
      <div className="flex flex-col md:flex-row overflow-hidden bg-gray-900 rounded-lg shadow-xl  mt-4 w-100 mx-7 font-serif">
        <div className="h-64 w-auto md:w-1/2">
          <Img
            className="inset-0 h-full w-full object-cover object-center"
            fluid={post.image}
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        <div className="w-full py-4 px-6 text-white flex flex-col justify-between">
          <h3 className="font-semibold text-3xl	 leading-tight truncate">
            {post.title}
          </h3>
          <p className="mt-1">{post.excerpt}</p>
          <div className="w-full flex flex-row pt-2">
            <Img
              className="h-10 w-10 rounded-full mr-2 object-cover"
              fluid={post.writer}
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {post.author}
              </p>
              <p className="font-semibold text-gray-400 text-xs">
                {" "}
                {post.date}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  const posts = Post();
  posts.shift();

  return (
    <Layout>
      <TopCard />
      <div className=" pb-12">
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col ">
          <h2 className="text-center  text-white  text-4xl xl:text-5xl">
            Our Blogs
          </h2>
          {posts.map(post => (
            <BlogLayout post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
