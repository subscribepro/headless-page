module.exports = {
  siteMetadata: {
    title: `Headless.page | A curated list of modern e-commerce sites`,
    description: `A curated list of headless e-commerce sites.  We've listed sites which are taking advantage of technologies such as PWA (Progress Web Application), Headless, JAMstack, Serverless.`,
    author: `Garth Brantley <garth.brantley@pilon.io>`,
    siteUrl: `https://headless.page`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/sites`,
        name: `sites`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Headless.page`,
        short_name: `Headless.page`,
        start_url: `https://headless.page`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/headless-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://headless.page`,
      },
    },    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124605239-2",
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
