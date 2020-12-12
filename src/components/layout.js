import React from "react";
import Header from "./header";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-siteMetadata";
import Footer from "./footer";
import "../css/stars.css";
// import BackgroundImage from "gatsby-background-image";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="stars large"></div>
      <div className="stars medium"></div>
      <div className="stars small"></div>
      <div className="flex flex-col min-h-screen font-sans text-gray-500  ">
        <Header />

        <main className="flex-1 w-full max-w-8xl px-4 py-8 mx-auto md:px-8 md:py-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
