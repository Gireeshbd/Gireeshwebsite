/**
 * @type {import('gatsby').GatsbyConfig}
 */
// import dotenv from "dotenv";
// dotenv.config();

require("dotenv").config({});

module.exports = {
  siteMetadata: {
    title: `Gireesh Reddy`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.SPACEID,
        accessToken: process.env.ACCESSTOKEN,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
