import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  p {
    line-height: 2;
    margin: 1rem 0 2rem;
    letter-spacing: 0.4px;
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      ogImageUrl={`${data.site.siteMetadata.siteUrl}headless-page-home-1200x600.png`}
      twitterCard="summary_large_image"
      keywords={[
        `Subscribe Pro`,
        `API-First`,
        `micro-services`,
        `GatsbyJS`,
        `Magento`,
        `Shopify`,
      ]}
    />
    <Wrapper>
      <h1>About Headless.page</h1>
      <p>
        Headless.page is a curated list of modern e-commerce sites. We have
        searched high and low to find the e-commerce sites who are doing things
        correctly with regard to modern tech and architectural patterns like: PWA
        (Progress Web Applications), Headless, API-First Back-end. Where we can,
        we call out which JavaScript framework(s) a site was built with (React,
        Vue, Gatsby, etc) and which e-commerce back-ends a site is powered by
        (Magento, Shopify, Stripe, Hybris, etc).
      </p>
      <p>
        This site was created by Garth Brantley and is sponsored by Subscribe
        Pro. Subscribe Pro enables brands to add subscription commerce features
        and programs to their existing DTC eCommerce businesses quickly and
        efficiently.
      </p>
      <p>
        If you have suggestions for sites we should add or new information,
        don't hesitate to get in touch. Email us at{' '}
        <a href="mailto:info@subscribepro.com">info@subscribepro.com</a>.
      </p>
    </Wrapper>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
