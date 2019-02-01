const siteName = 'Headless.page'
const siteSlogan = 'A curated list of modern e-commerce sites'
const siteUrl = `https://headless.page/`

module.exports = {
  siteMetadata: {
    title: `${siteName} | ${siteSlogan}`,
    description: `A curated list of modern, headless e-commerce sites.  We've listed sites which are taking advantage of technologies such as PWA (Progress Web Application), Headless, JAMstack, API-first back-ends, and similar.`,
    author: `Garth Brantley <garth.brantley@pilon.io>`,
    twitterSite: `@Pilon_io`,
    twitterCreator: `@garthbrantley`,
    siteName,
    siteSlogan,
    siteUrl,
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
        start_url: siteUrl,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/headless-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
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
