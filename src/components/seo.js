import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ post }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          base
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.base === "" && typeof window !== "undefined") {
    defaults.base = window.location.origin;
  }

  if (defaults.base === "") {
    console.error("Please set a baseUrl in your site metadata!");
    return null;
  }

  const title = post.title || defaults.title;
  const description = post.description || defaults.description;
  const url = new URL(post.path || "", defaults.base);
  const image = post.image ? new URL(post.image, defaults.base) : false;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
