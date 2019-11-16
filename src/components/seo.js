import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  titleTemplate,
  ogImageUrl,
  twitterCard,
  pageUrl,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteMetadata = data.site.siteMetadata
        const metaDescription = description || siteMetadata.description
        const metaKeywords = keywords.concat([
          `headless`,
          `e-commerce`,
          `ecommerce`,
          `pwa`,
          `curated`,
          `list`,
          `api-first`,
          `jamstack`,
        ])

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={
              titleTemplate
                ? titleTemplate
                : `%s | ${data.site.siteMetadata.title}`
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: pageUrl ? pageUrl : siteMetadata.siteUrl + '/',
              },
              {
                name: `twitter:card`,
                content: twitterCard,
              },
              {
                name: `twitter:site`,
                content: siteMetadata.twitterSite,
              },
              {
                name: `twitter:creator`,
                content: siteMetadata.twitterCreator,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                ogImageUrl
                  ? [
                      {
                        property: `og:image`,
                        content: ogImageUrl,
                      },
                      {
                        name: `twitter:image`,
                        content: ogImageUrl,
                      },
                    ]
                  : []
              )
              .concat(
                metaKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `).toLowerCase(),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  twitterCard: `summary`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string,
  ogImageUrl: PropTypes.string.isRequired,
  twitterCard: PropTypes.string,
  pageUrl: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        twitterSite
        twitterCreator
        siteUrl
      }
    }
  }
`
