import React, { useState } from "react";
import { Link } from "gatsby";
import siteMetadata from "../hooks/use-siteMetadata";
import AstroSVG from "../../images/astro";

const Header = () => {
  const { title } = siteMetadata();
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className="bg-gray-200 border-b-2" style={{ marginTop: "-3.5px" }}>
      <div className="flex flex-wrap items-center justify-between max-w-7xl p-4 mx-auto md:p-4">
        <Link to="/">
          <h1 className="flex items-center text-gray-900 no-underline">
            <AstroSVG />
            <span className="text-xl font-bold tracking-tight">{title}</span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-gray-900 border border-gray rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/blogs`,
              title: `Blogs`,
            },
            {
              route: `/events`,
              title: `Events`,
            },
            {
              route: `/gallery`,
              title: `Gallery`,
            },
          ].map(link => (
            <Link
              className="block mt-4 text-gray-900 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
