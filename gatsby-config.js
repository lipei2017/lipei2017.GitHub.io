module.exports = {
  siteMetadata: {
    title: "sy7-blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
    "gatsby-plugin-emotion",
  ],
};
