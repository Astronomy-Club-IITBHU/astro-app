import React from "react";
import { Link } from "gatsby";

const ArrowLink = ({ link }) => {
  return (
    <Link className="text-indigo-500 inline-flex items-center" to={link}>
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
    </Link>
  );
};
export default ArrowLink;
