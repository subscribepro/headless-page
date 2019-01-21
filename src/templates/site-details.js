import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'

const Wrapper = styled.div`
  header {
    margin-bottom: 32px;
    h1 {
      margin-bottom: 8px;
      font-size: 40px;
    }
    span {
      a,
      a:link,
      a:visited,
      a:active,
      a:hover {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: #777;
        transition: color 0.2s ease;
      }
      a:hover {
        color: #464646;
      }
    }
  }
  .attributes {
    margin-bottom: 32px;

    .attribute {
      display: flex;
      margin-bottom: 4px;

      .title {
        margin-right: 8px;
      }
    }
  }
`

class SiteDetailsTemplate extends React.Component {
  render() {
    const siteDetailsPage = this.props.data.markdownRemark

    return (
      <Layout location={this.props.location}>
        <SEO
          title={siteDetailsPage.frontmatter.title}
          description={siteDetailsPage.excerpt}
        />
        <Wrapper>
          <header>
            <h1>{siteDetailsPage.frontmatter.title}</h1>
            <span>
              <OutboundLink
                href={siteDetailsPage.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteDetailsPage.frontmatter.url}
              </OutboundLink>
            </span>
          </header>
          <div className="attributes">
            <div className="attribute">
              <strong className="title">Date Added:</strong>
              <span>{siteDetailsPage.frontmatter.dateAdded}</span>
            </div>
            {siteDetailsPage.frontmatter.tech && (
              <div className="attribute">
                <strong className="title">Tech: </strong>
                <Tags
                  className="tags"
                  values={siteDetailsPage.frontmatter.tech}
                />
              </div>
            )}
            {siteDetailsPage.frontmatter.frameworks && (
              <div className="attribute">
                <strong className="title">Frameworks: </strong>
                <Tags
                  className="tags"
                  values={siteDetailsPage.frontmatter.frameworks}
                />
              </div>
            )}
            {siteDetailsPage.frontmatter.backends && (
              <div className="attribute">
                <strong className="title">Back-ends: </strong>
                <Tags
                  className="tags"
                  values={siteDetailsPage.frontmatter.backends}
                />
              </div>
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: siteDetailsPage.html }} />
        </Wrapper>
      </Layout>
    )
  }
}

export default SiteDetailsTemplate

export const pageQuery = graphql`
  query SiteDetailsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        dateAdded(formatString: "MMMM DD, YYYY")
        url
        tech
        frameworks
        backends
      }
    }
  }
`
