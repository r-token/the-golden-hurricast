/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* site config */
  siteMetadata: {
    siteUrl: 'https://www.thegoldenhurricast.com',
    url: 'https://www.thegoldenhurricast.com',
    title: `The Golden Hurricast`,
    description: `The leading independent podcast and blog covering Golden Hurricane athletics at The University of Tulsa`,
    image: "./static/logo-white.jpg",
    twitterUsername: "@GoldenHurricast"
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Golden Hurricast",
        short_name: "TGH",
        start_url: "/",
        background_color: "#002D72",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/apple-touch-icon.webp", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    }
  ]
};
