import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'

const Wrapper = styled.div`
  margin: 0 auto 8rem;
  max-width: 800px;

  header {
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media only screen and (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      margin-bottom: 0;
      font-size: 36px;
      font-weight: 600;
    }
    span {
      margin-top: 8px;

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
    const mainImage = siteDetailsPage.frontmatter.coverImage.childImageSharp.fluid

    return (
      <Layout location={this.props.location}>
        <SEO
          title={siteDetailsPage.frontmatter.title}
          description={siteDetailsPage.excerpt}
        />
        <Wrapper>
          <div className="main-image">
            <Img fluid={mainImage} />
          </div>

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
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
