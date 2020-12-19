import React from "react";
import { Link } from "gatsby";
import Posts from "../hooks/all-blog";
import ArrowLink from "./arrow-link";

const Card = ({ post }) => {
  {
    post.category = post.category.split(",");
  }
  return (
    <div className="p-5 md:w-1/2 flex flex-col items-start">
      <div className="categories">
        {post.category.map(category => {
          return (
            <span className="inline-block py-1 px-3 mr-1 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">
              {category}
            </span>
          );
        })}
      </div>
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-200 mt-4 mb-4">
        {post.title}
      </h2>
      <p className="leading-relaxed mb-8">{post.excerpt}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
        <ArrowLink link={post.slug} />
        <span className="text-gray-200 inline-flex items-center ml-auto leading-none text-sm">
          {post.date}
        </span>
      </div>
    </div>
  );
};

const TopCard = () => {
  const data = Posts();
  return (
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="flex flex-wrap -m-5 ">
        {data.map(post => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default TopCard;
