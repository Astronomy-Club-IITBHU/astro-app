import React from "react";
import { Link } from "gatsby";
import ArrowLink from "./arrow-link";
import Img from "gatsby-image";
const PostPreview = ({ post }) => {
  return (
    <div className="max-w-2xl mb-5 mx-auto px-8 py-4 bg-white rounded-lg shadow-2xl	  ">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600 text-sm">{post.date}</span>
      </div>
      <div className="mt-2">
        <Link
          className="text-2xl text-gray-700 font-bold hover:text-gray-600 "
          to={`/blogs/${post.slug}`}
        >
          {post.title}
        </Link>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <ArrowLink link={`/blogs/${post.slug}`} />
        <div className="flex items-center">
          <Img
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            fluid={post.writer}
            alt="avatar"
          />
          <h3 className="text-gray-700 font-bold ">{post.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
