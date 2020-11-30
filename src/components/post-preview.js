import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => {
  return (
    <div className="max-w-2xl mb-5 mx-auto px-8 py-4 bg-white rounded-lg shadow-md  ">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600 text-sm">{post.date}</span>
      </div>
      <div className="mt-2">
        <Link className="text-2xl text-gray-700 font-bold hover:text-gray-600 hover:underline">
          {post.title}
        </Link>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link className="text-blue-600 hover:underline">Read more</Link>
        <div className="flex items-center">
          <img
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=356&q=80"
            alt="avatar"
          />
          <Link className="text-gray-700 font-bold cursor-pointer">
            {post.author}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
