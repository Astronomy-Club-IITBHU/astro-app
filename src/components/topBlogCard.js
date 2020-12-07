import React from "react";
import { Link } from "gatsby";
import Posts from "../hooks/all-blog";

const Card = ({ post }) => {
  { post.category = post.category.split(',') }
  return (
    <div class="p-5 md:w-1/2 flex flex-col items-start">
      <div className="categories">
        {post.category.map((category) => {
          return (
            <span class="inline-block py-1 px-3 mr-1 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">
              {category}
            </span>
          )
        })}
      </div>
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-200 mt-4 mb-4">
        {post.title}
      </h2>
      <p class="leading-relaxed mb-8">{post.excerpt}</p>
      <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
        <a class="text-indigo-500 inline-flex items-center">
          Read
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <span class="text-gray-200 inline-flex items-center ml-auto leading-none text-sm">
          {post.date}
        </span>
      </div>
    </div>
  );
};

const TopCard = () => {
  const data = Posts();
  return (
    <section class="text-gray-400 body-font overflow-hidden">
      <div class="flex flex-wrap -m-5 ">
        {data.map(post => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default TopCard;
