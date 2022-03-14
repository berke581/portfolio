require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'portfolio',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
