import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'

const Wrapper = styled.div`
  .grid {
    margin-top: 40px;

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (min-width: 1680px) {
      grid-template-columns: repeat(5, 1fr);
    }

    .site-container {
      display: flex;
      justify-content: center;

      .site {
        width: 100%;
        max-width: 400px;

        a,
        a:visited,
        a:link,
        a:hover,
        a:active {
          text-decoration: none;
          cursor: pointer;
        }

        .thumbnail {
          border: 1px solid #eaecef;
        }
        .title {
          display: block;
          margin: 12px 0 6px;
          color: #464646;
          font-size: 24px;
          font-weight: 300;
          transition: color 0.2s ease;
        }
        a:hover .title {
          color: #000000;
        }
        .tags {
          margin: 0 0 12px;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const sites = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" keywords={[`headless`, `e-commerce`, `ecommerce`]} />
      <Wrapper>
        <h1>A curated list of modern e-commerce sites.</h1>
        <div className="grid">
          {sites.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            // Collect tags
            var tags = []
            if (node.frontmatter.tech) {
              tags = tags.concat(node.frontmatter.tech)
            }
            if (node.frontmatter.frameworks) {
              tags = tags.concat(node.frontmatter.frameworks)
            }
            if (node.frontmatter.backends) {
              tags = tags.concat(node.frontmatter.backends)
            }

            return (
              <div className="site-container" key={node.fields.slug}>
                <div className="site">
                  <Link to={`sites${node.fields.slug}`}>
                    <div className="thumbnail">
                      <Img
                        fluid={
                          node.frontmatter.coverImage.childImageSharp.fluid
                        }
                      />
                    </div>
                    <span className="title">{title}</span>
                  </Link>
                  <Tags className="tags" values={tags} />
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___dateAdded], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            dateAdded(formatString: "MMMM DD, YYYY")
            title
            url
            tech
            frameworks
            backends
            coverImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
