import React from "react";
import Header from "./header";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-siteMetadata";
import AstroSVG from "../../images/astro";
// import BackgroundImage from "gatsby-background-image";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="flex flex-col min-h-screen font-sans text-gray-500">
        <Header />

        <main className="flex-1 w-full max-w-8xl px-4 py-8 mx-auto md:px-8 md:py-16">
          {children}
        </main>

        <footer className="text-gray-500 body-font border-t-2">
          <div className="container px-5 py-8 mx-auto max-w-3xl flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
              <AstroSVG color="white"/>
              {/* <span className="ml-3 text-xl">Astronomy Club</span> */}
            </a>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2020 IITBHU
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {/* ----------------------   For facebook  -------------------- */}
              <a
                className="text-gray-200"
                href="https://www.facebook.com/astro.iitbhu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              {/* -----------------  For instagram  ---------------*/}
              <a
                className="ml-3 text-gray-200"
                href="https://www.instagram.com/astro.iitbhu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
