module.exports = {
  siteMetadata: {
    title: 'sy7-blog',
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-emotion',
  ],
};
