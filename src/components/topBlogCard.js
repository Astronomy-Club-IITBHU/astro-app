import React from "react";
import Posts from "../hooks/all-blog";
import Img from "gatsby-image";
import { Link } from "gatsby";

const TopCard = () => {
  const posts = Posts();
  const post = posts[0];

  return (
    <div className="   md:mt-10 mb-10  ">
      <div
        className="mb-4 md:mb-0 max-w-screen-lg mx-auto relative"
        style={{ height: 500 }}
      >
        <Link to={post.slug}>
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              background: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <Img
            fluid={post.image}
            style={{ height: "100%", width: "100%" }}
            className="absolute left-0 top-0 w-full h-full z-0 object-fill"
            alt="images for top"
          />

          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-1 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {post.category}
            </span>

            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {post.title}
            </h2>

            <div className="flex mt-3">
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
        </Link>
      </div>
    </div>
  );
};

export default TopCard;
