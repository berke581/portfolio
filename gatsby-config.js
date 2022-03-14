require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'portfolio',
    siteUrl: 'https://www.berkeyoncaci.com',
    description: 'Berke YONCACI portfolio website.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
