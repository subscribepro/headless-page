import React, { Component } from 'react'
import { graphql, navigate } from 'gatsby'
import styled from 'styled-components'
import qs from 'qs'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SiteCard from '../components/siteCard'
import Filters from '../components/filters'

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
          position: relative;
          border: 1px solid #eaecef;
          .gatsby-image-wrapper {
            transition: filter, opacity 0.2s ease-in-out;
            -webkit-filter: grayscale(0%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
            filter: grayscale(0%); /* FF 35+ */
            opacity: 1;
          }
        }
        .thumbnail:hover {
          .gatsby-image-wrapper {
            -webkit-filter: grayscale(80%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
            filter: grayscale(80%); /* FF 35+ */
            opacity: 0.6;
          }
          .overlay {
            opacity: 1;
          }
        }
        .overlay {
          transition: opacity 0.2s ease;
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          text-align: center;

          .view-button {
            background-color: #00baa1;
            color: #fff;
            padding: 12px 16px;
            line-height: 1;
          }
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

class IndexPage extends Component {
  state = {
    filters: [],
  }

  componentDidMount = () => {
    const {
      location: { search },
    } = this.props

    this.getDerivedStateFromQuery(search)
  }

  getDerivedStateFromQuery = search => {
    const { tag } = qs.parse(search.replace(`?`, ``))
    this.setState(() => {
      return {
        filters: tag || [],
      }
    })
  }

  updateQuery = fn => {
    const {
      location: { pathname },
    } = this.props

    const newQuery = fn(this.state)
    const queryString = qs.stringify({ tag: newQuery })

    navigate(`${pathname}?${queryString}`)
    this.getDerivedStateFromQuery(queryString)
  }

  render() {
    const { data } = this.props
    const { filters } = this.state
    const sites = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="Headless.page | A curated list of modern e-commerce sites"
          titleTemplate="%s"
          keywords={[`headless`, `e-commerce`, `ecommerce`]}
        />
        <Helmet
          meta={[
            {
              name: `twitter:image`,
              content: `https://headless.page/headless.page-home-1200x600.png`,
            },
            {
              property: `og:image`,
              content: `https://headless.page/headless.page-home-1200x600.png`,
            },
            {
              property: `og:url`,
              content: `https://headless.page/`,
            },
          ]}
        />
        <Wrapper>
          <h1>A curated list of modern e-commerce sites.</h1>
          <Filters
            className="tags"
            values={filters}
            update={this.updateQuery}
          />
          <div className="grid">
            {sites.map(({ node }) => (
              <SiteCard
                update={this.updateQuery}
                key={node.fields.slug}
                node={node}
                filters={filters}
              />
            ))}
          </div>
        </Wrapper>
      </Layout>
    )
  }
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
