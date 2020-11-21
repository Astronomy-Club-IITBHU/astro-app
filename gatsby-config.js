const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: "Astronomy Club IIT BHU",
    description: "club for people interested in astronomy",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Astronomy-Club-IIT-BHU",
        short_name: "Astro-app",
        start_url: "/",
        background_color: fullConfig.theme.colors.coolGray,
        theme_color: fullConfig.theme.colors.coolGray,
        display: "minimal-ui",
        icon: "src/images/astro.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss")(tailwindConfig),
          require("autoprefixer"),
          ...(process.env.NODE_ENV === "production"
            ? [require("cssnano")]
            : []),
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
