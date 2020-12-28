import React from "react";
import Header from "./header";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-siteMetadata";
import Footer from "./footer";
import "../css/stars.min.css";
import Star from "./stars";
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
      <Star />
      <div className="flex flex-col min-h-screen ">
        <Header />
        <main className="flex-1 w-full max-w-full  mx-auto ">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
