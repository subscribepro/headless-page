import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import GitHubMark from '../components/svg/github-mark'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    text-rendering: optimizeLegibility;
    color: #464646;
  }

  h1 {
    font-size: 2rem;
    font-weight: normal;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    margin-top: 32px;
  }

  p {
    line-height: 2;
    margin: 1rem 0 2rem;
    letter-spacing: 0.4px;
  }

  blockquote {
    border-left: 1px solid #000;
    margin-left: 8px;
    padding-left: 32px;
  }

  strong {
    font-weight: 600;
  }

  a, a:link {
    color: #777;
  }
  a:visited {
    color: #777;
  }
  a:hover {
    color: #00baa1;
  }
`

const Wrapper = styled.div`
  .site-header {
    padding: 20px;
    border-bottom: 1px solid #eaecef;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  section.content {
    margin: 40px 20px 20px;
  }

  .logo-area {
      display: flex;
      flex-direction: column;

      .site-name {
        font-family: 'Indie Flower', cursive;
        font-size: 40px;
        font-weight: 700;
        line-height: 1;
        margin: 0;
        a, a:link, a:visited, a:hover, a:active {
          text-decoration: none;
          cursor: pointer;
          color: #464646;      
        }
      }
      .by-pilon {
        display: flex;
        margin-top: 4px;

        .by {
          display: block;
          font-size: 14px;
        }

        .pilon-logo {
          width: 52px;
          margin-left: 6px;
        }
      }
    }
  }

  .search-box {
    margin: 6px 20px 4px auto;
    position: relative;

    input {
      display: inline-block;
      cursor: text;
      outline: none;
      width: 160px;
      padding: 0 8px 0 40px;
      border: 1px solid #eaecef;
      border-radius: 32px;
      font-size: 16px;
      line-height: 32px;
      color: #747474;
      transition: border-color .2s ease;
    }
    input:focus {
      border-color: #00baa1;
    }

    svg {
      position: absolute;
      top: 10px;
      left: 12px;
      fill: #747474;
    }
  }
  .search-box:hover {
    input {
      border-color: #00baa1;
    }
  }

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 0;
      margin: 10px 10px;
      line-height: 1;
      font-size: 16px;

      a, a:link, a:visited, a:active {
        text-decoration: none;
        color: #464646;
        transition: color .2s ease;
      }
      a:hover {
        text-decoration: none;
        color: #00baa1;
      }

      svg {
        fill: #464646;
        width: 18px;
        height: 18px;
        padding-top: 4px;
        transition: fill .2s ease;
      }
      svg:hover {
        fill: #00baa1;
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        pilonLogo: file(relativePath: { eq: "pilon-logo@3x.png" }) {
          childImageSharp {
            fluid(maxWidth: 104) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Indie+Flower"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
            type="text/css"
          />
        </Helmet>
        <Wrapper>
          <header className="site-header">
            <div className="logo-area">
              <span className="site-name">
                <Link to="/">Headless.page</Link>
              </span>
              <span className="by-pilon">
                <span className="by">
                  <em>by</em>
                </span>
                <span className="pilon-logo">
                  <OutboundLink href="https://pilon.io" aria-label="Visit Pilon website">
                    <Img fluid={data.pilonLogo.childImageSharp.fluid} />
                  </OutboundLink>
                </span>
              </span>
            </div>
            <ul className="nav">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <OutboundLink
                  href="https://github.com/pilon-io/headless-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See site code on GitHub"
                >
                  <GitHubMark />
                </OutboundLink>
              </li>
            </ul>
          </header>
          <section className="content">{children}</section>
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
